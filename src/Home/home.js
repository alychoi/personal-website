import React, {useState, useEffect} from "react";
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
        padding: "0",
    },
    intr: {
        //fontSize: "20px"
    }
}

const Home = ({classes}) => {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setInnerWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function topOrLeft(innerWidth) {
        if (innerWidth <= 700) return "top"
        return "left"
    }

    function bottomOrRight(innerWidth) {
        if (innerWidth <= 700) return "bottom"
        return "right"
    }

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
                        <th className={topOrLeft(innerWidth)}></th>
                        <th className={bottomOrRight(innerWidth)}>
                            <h2><b>I like being <mark>active</mark>.</b></h2>
                            <h5>
                                Fun fact: When I was six, I was afraid of water touching my face, but I learned how to swim within a month. 
                                Since then, I enjoy trying new sports and staying physically active, whether it's learning how to fence 
                                or exercising at the gym. Right now, I'm learning how to play tennis. 
                                I also took surfing lessons in Hawaii over the Spring and it's super fun!
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
                                I spend a lot of time tinkering on my computer. Right now, I'm learning how to make 3D designs on Blender and develop mobile apps in Flutter.
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