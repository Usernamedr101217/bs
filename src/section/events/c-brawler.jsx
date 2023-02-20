import React, { useState, MouseEvent } from "react";
import { useEffect } from "react";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';


export default function BrawlerC({ brawler, winRate, useRate }) {
    const [brawlers, setBrawlers] = useState();
    const [anchorEl, setAnchorEl] = useState(null);

    const fetchBrawler = async () => {
        const res = await fetch(`https://api.brawlapi.com/v1/brawlers/${brawler}`)
        const data = await res.json();
        setBrawlers(data.imageUrl)
    }
    useEffect(() => {
        fetchBrawler()
    }, [brawler])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="evt-img">
            <img className="brw-img" src={brawlers} alt="back" onClick={handleClick}/>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Typography sx={{ p: 2, backgroundColor: '#4f4f4f', color: 'white' }}>
                  Win rate: {winRate}% <br /> Use rate: {useRate}
              </Typography>
            </Popover>
        </div>
    )
}