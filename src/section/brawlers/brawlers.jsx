import React, { useEffect, useState } from "react";
import Filtered from "./fitered";
import { Link } from "react-scroll";

const url = 'https://api.brawlapi.com/v1/brawlers'

export default function Brawlers() {
    const [brawlers, setBrawlers] = useState([]);

    const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setBrawlers(data.list);
        console.log(data.list);
    }
    useEffect(() => {
        fetchData()
    }, [])

    const rareBrawlers = brawlers.filter(brawler => brawler.rarity.name === 'Rare');
    const spRareBrawlers = brawlers.filter(brawler => brawler.rarity.name === 'Super Rare');
    const epicBrawlers = brawlers.filter(brawler => brawler.rarity.name === 'Epic');
    const mythicBrawlers = brawlers.filter(brawler => brawler.rarity.name === 'Mythic');
    const legendBrawlers = brawlers.filter(brawler => brawler.rarity.name === 'Legendary');
    const chromaBrawlers = brawlers.filter(brawler => brawler.rarity.name === 'Chromatic');
    
    const rarity = [
        { rar: rareBrawlers, name: 'Rare Brawlers', color: '#68fd58' },
        { rar: spRareBrawlers, name: 'Super Rare Brawlers', color: '#5ab3ff'},
        { rar: epicBrawlers, name: 'Epic Brawlers', color: '#d850ff' },
        { rar: mythicBrawlers, name: 'Mythic Brawlers', color: '#fe5e72'},
        { rar: legendBrawlers, name: 'Legend Brawlers', color: '#fff11e'},
        { rar: chromaBrawlers, name: 'Chroma Brawlers', color: '#f88f25'}
    ]

    return (
        <div className="brw-sec" id="brawlers">
            <header><h2>Brawlers</h2></header>
            <div className="brw-ovr">
                {rarity.map((rarities) => {
                    const { rar, name, color } = rarities;
                    return(
                        <section key={name} >
                            <h3 style={{ color: color, borderBottom: `5px solid ${color}` }}>{name}</h3>
                            <div className="brw-cont">
                                {rar.map((item) => {
                                    return(
                                        <Filtered key={rar.id} {...item}/>
                                    )
                                })}
                            </div>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}