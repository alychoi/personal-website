import React from "react";
import injectSheet from "react-jss";
import my_resume from "./my_resume.png"


const styles = {
    Resume: {
        backgroundColor: "#212529",
        marginTop: "50px",
    },
    Image: {
        paddingTop: "30px",
        paddingBottom: "100px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "65%"
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
            <div className={classes.Image}>
                <img src={my_resume}></img>
            </div>
        </div>
    );
};

export default injectSheet(styles)(Resume);