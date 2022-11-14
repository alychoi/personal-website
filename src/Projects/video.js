import React from "react";
import injectSheet from "react-jss";
import Avengers from "./avengersVideo.mp4";
import { Navigate, useNavigate } from 'react-router-dom';


const styles = {
    Body: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#212529",
        flexDirection: "column",
    },
    Video: {
        marginTop: "80px",
    },
    Button: {
        marginBottom: "40px",
        padding: "10px",
        backgroundColor: "#4990db",
        border: "none",
        borderRadius: "20px",
        color: "white",
    },
    Suggestion: {
        color: "white",
        fontSize: "12px",
        margin: "20px",
    }
}

const Video = ({classes}) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/technical-projects');
    };

    return (
        <div className={classes.Body}>
            <video className={classes.Video} width="600" controls>
                <source src={Avengers} type="video/mp4"></source>
                Your browser does not support HTML video.
            </video>
            <p className={classes.Suggestion}>Suggestion: Play the video in 2x playback speed.</p>
            <button onClick={goBack} className={classes.Button}>
                Go back to Projects
            </button>
        </div>
    );
};

export default injectSheet(styles)(Video);
