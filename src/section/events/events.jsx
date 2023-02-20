import { yellow } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import BrawlerC from "./c-brawler";
import { Link } from "react-scroll";

const url = "https://api.brawlapi.com/v1/events"

export default function Events() {
    const [activeEvents, setActiveEvents] = useState([]);
    const [upcEvents, setUpcEvents] = useState([]);
    

    const fetchEvents = async () => {
        const res = await fetch(url);
        const data = await res.json();
        const array = Object.entries(data)
        setActiveEvents(array[0][1]);
        setUpcEvents(array[1][1])
    }
    useEffect(() => {
        fetchEvents()
    }, [])


    return (
        <div className="evt-sec" id="events">
            <header><h2>Active Events</h2></header>
            <section className="curr-evt">
                {activeEvents.map((item) => {
                    const {slot , endTime, map} = item;
                    return (
                        <article className="evt-sec" key={map.id}>
                            <div className="evt-hea">
                                <div className="evt-title">
                                    <h3>{slot.name}</h3>
                                    <span>{slot.emoji}</span>
                                </div>
                                <div className="gamemode">
                                    <h3>{map.gameMode.name} -</h3>
                                    <a href={map.imageUrl} target="_blank">
                                        <h3 style={{ cursor: 'pointer', textDecoration: 'underline', color: 'yellow' }}>
                                            {map.name}
                                        </h3>
                                    </a>
                                </div>
                            </div>
                            <div className="a-evt-bd">
                                <img src={map.environment.imageUrl} className="evt-bgr"></img>
                                <div className="img-cont">
                                    {map.stats.slice(0, 8).map((brawlers) => {
                                        const { brawler, winRate, useRate } = brawlers;
                                        return (
                                            <BrawlerC 
                                                brawler={brawler} 
                                                winRate={winRate} 
                                                useRate={useRate} 
                                                key={brawler}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>

            <header><h2>Upcoming Events</h2></header>
            <section className="curr-evt">
                {upcEvents.map((item) => {
                    const {slot , endTime, map} = item;
                    return (
                        <article className="evt-sec" key={map.id}>
                            <div className="evt-hea">
                                <div className="evt-title">
                                    <h3>{slot.name}</h3>
                                    <span>{slot.emoji}</span>
                                </div>
                                <div className="gamemode">
                                    <h3>{map.gameMode.name} -</h3>
                                    <a href={map.imageUrl} target="_blank">
                                        <h3 style={{ cursor: 'pointer', textDecoration: 'underline', color: 'yellow' }}>
                                            {map.name}
                                        </h3>
                                    </a>
                                </div>
                            </div>
                            <div className="a-evt-bd">
                                <img src={map.environment.imageUrl} className="evt-bgr"></img>
                                <div className="img-cont">
                                    {map.stats.slice(0, 8).map((brawlers) => {
                                        const { brawler, winRate, useRate } = brawlers;
                                        return (
                                            <BrawlerC 
                                                brawler={brawler} 
                                                winRate={winRate} 
                                                useRate={useRate} 
                                                key={brawler}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>

        </div>
    )
}