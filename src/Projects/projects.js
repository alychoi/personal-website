import React from "react";
import injectSheet from "react-jss";
import './projects.css'
import { Link } from 'react-router-dom';

const styles = {
    Projects: {
        backgroundColor: "white",
        color: "black",
        marginTop: "50px",
    }
}

const Projects = ({classes}) => {
    return (
        <div className={classes.Projects}>
            <h1 style={{paddingLeft:"15px",paddingTop:"15px",paddingBottom:"25px",borderBottom:"1px solid white"}}>Selected Projects</h1>
            <div className="container1" style={{color:"black"}}>
                <div className="cell1">
                    {/* <div className="cell1"> */}
                        <a target="_blank" rel="noopener noreferrer" className="projectSource" id="p1" href="https://github.com/alychoi/AI-Twitter-Bot">
                            <h2>Project 01 - AI Twitter Bot</h2>
                            {/* <h4>AI Twitter Bot</h4> */}
                            <p>Created a Twitter Explore Page clone where you can tweet randomly generated text using Deep Learning.</p>
                        </a>
                    {/* </div> */}
                    {/* <div className="cell1"> */}
                        {/* <a target="_blank" rel="noopener noreferrer" className="projectSource" id="p2" href="https://github.com/alychoi/Panda-Shell">
                            <h2>Project 02</h2>
                            <h4>Panda Shell</h4>
                            <p>Built a panda-themed command line shell using C.</p><br></br><br></br>
                        </a> */}
                    {/* </div> */}
                </div>
                <div className="cell1">
                    <a target="_blank" rel="noopener noreferrer" className="projectSource" id="p2" href="https://github.com/alychoi/Panda-Shell">
                        <h2>Project 02 - Panda Shell</h2>
                        {/* <h4>Panda Shell</h4> */}
                        <p>Built a panda-themed command line shell using C.</p>
                    </a>
                </div>
                {/* <div className="row1"> */}
                    <div className="cell1">
                        <Link to="/kakao-friends-video" className="projectSource" id="p3">
                            <h2>Project 03 - Kakao Learn</h2>  
                            {/* <h4>Kakao Learn</h4> */}
                            <p>Designed interactive website where you can learn Korean from a virtual Kakao Friends tutor.</p>
                        </Link>
                    </div>
                    <div className="cell1">
                        <Link to="/avengers-video" className="projectSource" id="p4">
                            <h2>Project 04 - Avengers Animation</h2>  
                            {/* <h4>Avengers Animation</h4> */}
                            <p>Made my first computer program - an animation showcasing Iron Man's birthday and the daily lives of the Avengers.</p>
                        </Link>
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default injectSheet(styles)(Projects);