import React from "react";
import injectSheet from "react-jss";
import { Link } from 'react-router-dom';
import { Spotify } from 'react-spotify-embed';

const styles = {
    Misc: {
        backgroundColor: "white",
        color: "black",
        marginTop: "50px",
    },
    Songs: {
        // display: "flex",
        // justifyContent: "space-around"
        paddingTop: "20px",
        paddingBottom: "200px"
    },
    Song: {
        paddingBottom: "10px",
        paddingLeft: "10%",
        paddingRight: "10%",
    }
}

const Projects = ({classes}) => {
    return (
        <div className={classes.Misc}>
            <h1 style={{paddingLeft:"15px",paddingTop:"15px",paddingBottom:"25px",borderBottom:"1px solid white"}}>My Spotify Playlists 🎵</h1>
            <div className={classes.Songs} style={{color:"black"}}>
                <div className={classes.Song}>
                    <Spotify wide link="https://open.spotify.com/playlist/4t2NY6Tgl8bDU41b4JZf4k?si=_3Dq1fkjQ_exXPQ3gBnr2g&pi=zzEOL78pQfyNP" />
                </div>
                <div className={classes.Song}>
                    <Spotify wide link="https://open.spotify.com/playlist/4Ks0dPlvjgKyWYMg7MIfWR?si=gBtjspvCTva05u4ETT6dZQ&pi=zTG8OfruT0GKM" />
                </div>
            </div>
        </div>
    );
};

export default injectSheet(styles)(Projects);