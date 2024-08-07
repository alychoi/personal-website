import React from "react";
import injectSheet from "react-jss";
import "./resume.css";

const styles = {
    Resume: {
        backgroundColor: "#212529",
        marginTop: "50px",
    },
    Title: {
        color: "white",
        textAlign: "center",
        padding: "0",
        paddingTop: "50px"
    }
}

const Resume = ({classes}) => {

    return (
        <div className={classes.Resume}>
            <h1 className={classes.Title}>My Resume</h1>
            <div>
                <a href="https://drive.google.com/file/d/1V8xTTjW476OR7KxBilgy2lxGR9B6q4ks/view?usp=sharing">
                <iframe 
                    className="resume"
                    src="https://drive.google.com/file/d/1V8xTTjW476OR7KxBilgy2lxGR9B6q4ks/preview">
                </iframe>
                </a>
            </div>
        </div>
    );
};

export default injectSheet(styles)(Resume);