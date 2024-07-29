import React from "react";
import injectSheet from "react-jss";
import YF from './Yoonique-Friends.png';
import MR from './marcus-rashford-01.png';
import MP from './melanie-perkins-01.png';
import Lang from './lang.png';
import WS from './wonderscape.png';
import BP from './baby_project-01.png';
import './idea.css'
import Popup from 'reactjs-popup';


const styles = {
    Idea: {
        backgroundColor: "white",
        marginTop: "50px",
        color: "black",
    },
}

const Idea = ({classes}) => {
    return (
        <div className={classes.Idea}>
            <h1 style={{paddingLeft:"15px",paddingTop:"15px",paddingBottom:"25px",borderBottom:"1px solid white"}}><span style={{color:"#e294de"}}>Some</span> <span style={{color:"#89a3e6"}}>of</span> <span style={{color:"#4990db"}}>my</span> <span style={{color:"#9179e2"}}>ideas</span> <span style={{color:"#e294de"}}>&#38;</span> <span style={{color:"#a923e7"}}>designs</span><span style={{color:"#9179e2"}}>...</span></h1>
            <div className="container" style={{paddingBottom:"60px"}}>
                <div className="row">
                    <Popup trigger=
                        { <div className="cell"><img className="img" id="yoonique" src={YF} width="600px" alt="Yoonique Friends"></img></div>}
                        position="bottom center">
                        <div className="des">
                            <h3>Yoonique Friends</h3>
                            <p>
                                Yoonique Friends is a language learning platform where users
                                are immersed in a 3D interactive world. The world will include
                                a cafe, school, and other public places where users can explore
                                different settings in a different language and communicate with
                                other avatars. The theme of the world is animal kingdom, where 
                                all the characters will be animals including the three shown on 
                                the left: tiger, panda, and elephant. The 3D world will be in 
                                a web platform built with ThreeJS and the graphics will be made
                                with Blender.
                            </p>
                        </div>
                    </Popup>
                    <Popup trigger=
                        {<div className="cell" style={{marginLeft:"30%"}}><img id="right" className="img" src={BP} alt="Smartglasses" width="400px"></img></div>}
                        position="bottom center">
                        <div className="des">
                            <h3>Smartglasses</h3>
                            <p>
                                I ideated a technology innovation - smartglasses - that can 
                                help children with autism recognize facial expressions and
                                emotions. The poster was designed with Adobe Illustrator.
                            </p>
                        </div>
                    </Popup>
                </div>
                <div className="row">
                    <Popup trigger=
                        {
                            <div className="cell">
                                <div id="fs-img" className="img">
                                    <img src={MR} alt="Marcus Rashford" className="mr"></img>
                                    <img src={MP} alt="Melanie Perkins" className="mp"></img>
                                </div>
                            </div>
                        }
                        position="bottom center">
                        <div className="des">
                            <h3>Face Stickers</h3>
                            <p>
                            I used Adobe Illustrator to design portraits of people I admire: 
                            Marcus Rashford and Melanie Perkins, respectively. I plan to make
                            a series of portraits and make them into a sticker collection, as
                            I have always wanted to start my own eCommerce business.
                            </p>
                        </div>
                    </Popup>
                    <Popup trigger=
                        {<div className="cell" style={{marginTop:"5%"}}><img id="right" className="img" width="500px" src={Lang} alt="LangXplora"></img></div>}
                        position="bottom center">
                        <div className="des">
                            <h3>LangXplora</h3>
                            <p>
                            LangXplora is an AR language learning mobile app. The user takes pictures
                            of actual objects in their physical environment and learns its vocabulary translation.
                            Then, that vocabulary is transferred to the user's virtual "Memory Land", which 
                            contains all of the vocabulary that the user has encountered. The purpose of this app
                            is to simulate natural language acquisition through interaction, which I believe is 
                            more effective than learning through memorization and repitition. 
                            </p>
                        </div>
                    </Popup>
                </div>
                <div className="row">
                    <Popup trigger=
                        {<div className="cell" style={{marginTop:"-20%"}}><img id="wonder" className="img" src={WS} alt="WONDERSCAPE" width="500px"></img></div>}
                        position="bottom center">
                        <div className="des">
                            <h3>WONDERSCAPE</h3>
                            <p>
                            Wonderscape is an adventure-type game that is set in the ancient wonders around the world, 
                            such as the Great Pyramid of Giza, the Colosseum, and Taj Mahal. 
                            The goal of the player is to find a hidden gem in each location through a series of clues and puzzles. 
                            However, the player has to avoid being seen by the people in the background, or else the course of history would be changed. 
                            </p>
                        </div>
                    </Popup>
                </div>
            </div>
        </div>
    );
};

export default injectSheet(styles)(Idea);