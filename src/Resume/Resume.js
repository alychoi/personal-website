import React from "react";
import injectSheet from "react-jss";
import my_resume from "./my_resume.png"
import Magnifier from "react-magnifier";


const styles = {
    Resume: {
        backgroundColor: "#212529",
        marginTop: "50px",
    },
    Image: {
        paddingTop: "30px",
        paddingBottom: "100px",
        paddingLeft: "27%"
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
                <Magnifier src={my_resume} width={'65%'} mgWidth={300} mgHeight={300} zoomFactor={0.8} mgShape={'square'}/>
            </div>
        </div>
    );
};

export default injectSheet(styles)(Resume);