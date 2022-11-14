import React from "react";
import injectSheet from "react-jss";
import './home.css'

const styles = {
    Home: {
        //backgroundColor: "#abbeed",
    },
    logo: {
        verticalAlign: "middle",
        paddingTop: "60%",
    },
    bio: {
        width: "100%",
        padding: "10px",
        backgroundColor: "#212529",
    },
    welc: {
        //fontSize: "25px",
    },
    intr: {
        //fontSize: "20px"
    }
}

const Home = ({classes}) => {
    return (
        <div className={classes.Home}>
            <div className="prlx1">
                <div className={classes.logo}></div>
                <div className={classes.bio}>
                    <h2 className={classes.welc}><span style={{color:"#e294de"}}>Welcome</span> <span style={{color:"#89a3e6"}}>to</span> <span style={{color:"#4990db"}}>my</span> <span style={{color:"#9179e2"}}>online</span> <span style={{color:"#a923e7"}}>space</span></h2>
                    <h3 className={classes.intr} style={{color:"white"}}>I'm Alyssa and I like tech + art.</h3>
                    <h5 style={{color:"white"}}>I'm a student at Stony Brook studying computer science.</h5>
                </div>
            </div>
            <div className="prlx2">
                <table className="table">
                    <tbody>
                        <th className="left"></th>
                        <th className="right">
                            <h2><b>I like being <mark>active</mark>.</b></h2>
                            <h5>
                                Fun fact: When I was six, I was afraid of water touching my face, but I learned how to swim within a month. 
                                Since then, I enjoy trying new sports and staying physically active, whether it's learning how to fence 
                                or exercising at the gym. Right now, I'm learning how to play tennis and part of the TaeKwonDo club. 
                                I've also started spin classes and it's super fun!
                            </h5>
                            <br></br><br></br><br></br>
                            <h2><b>I like <mark>exploring</mark> new places.</b></h2>
                            <h5>
                                I love exploring new places, even though I often get lost from my poor sense of direction.
                                I enjoy discovering yummy restaurants and cozy cafes throughout New York City.
                                I also enjoy traveling to new countries. Recently, I've traveled to South Korea and Austria. 
                                My bucket list includes hiking to Machu Picchu, going on a solo Europe trip, and vacationing in Bora Bora.
                            </h5>
                            <br></br><br></br><br></br>
                            <h2><b>I like learning new <mark>skills</mark>.</b></h2>
                            <h5>
                                I spend a lot of time tinkering on my computer. Right now, I'm taking an online data analytics course and learning how to use Blender.
                                I'm interested in building my own brand and planning to learn video editing and social media branding.
                                I also enjoy DIY crafts, including knitting, origami, and jewelry-making.
                            </h5>
                        </th>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default injectSheet(styles)(Home);