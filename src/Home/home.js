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
    // beli: {
    //     textDecoration: "none",
    //     color: "#00eeff",
    // },
    intr: {
        //fontSize: "20px"
    }
}

const Home = ({classes}) => {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    const [isHovered, setIsHovered] = useState(false);

    const beliStyle = {
        textDecoration: "none",
        color: isHovered ? "#b8faff" : "#00eeff",
        display: "inline-block",
        // transition: "color 0.3s ease"
    }

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
                {/* <div className={classes.bio}>
                    <h2 className={classes.welc}><span style={{color:"#e294de"}}>Welcome</span> <span style={{color:"#89a3e6"}}>to</span> <span style={{color:"#4990db"}}>my</span> <span style={{color:"#9179e2"}}>online</span> <span style={{color:"#a923e7"}}>space</span></h2>
                    <p className={classes.intr} style={{color:"white"}}>
                        I'm Alyssa and I like tech + design + entrepreneurship.
                        I'm a student at Stony Brook studying Computer Science.
                    </p>
                </div> */}
            </div>
            <div className="prlx2">
                <table className="table">
                    <tbody>
                        <th className={topOrLeft(innerWidth)}></th>
                        <th className={bottomOrRight(innerWidth)}>
                            <h2><b>I like <mark>exploring</mark> new places.</b></h2>
                            <h5>
                                I'm from Forest Hills, Queens (<i>Spider-Man's</i> hometown). Despite my awful sense
                                of direction, I love exploring new places, whether it's discovering yummy restaurants
                                to add to my <a style={beliStyle} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} href="https://app.beliapp.com/lists/alychoi123?_branch_match_id=1423128117592633932&utm_medium=my_profile_link&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0rNyUwsKNBLztcHUvqJOZXJGfmZhkbG9nVFqWmpRUWZeenxSUX55cWpRbbOGUX5uakAScoWADsAAAA%3D">beli</a> list or flying to a new country. I recently visited Mexico City,
                                Seoul, Brussels, and Amsterdam. My bucket list includes hiking to Machu Picchu and
                                vacationing in Bora Bora.
                            </h5>
                            <br></br><br></br><br></br>
                            <h2><b>I like to be <mark>active</mark>.</b></h2>
                            <h5>
                                I teach Mat Pilates on campus, and plan to get a Reformer certification. Outside of 
                                teaching, I enjoy weight training and doing calisthenics workouts at the gym. I also
                                like playing sports for fun like volleyball, soccer, and pickleball. I've also been 
                                a tennis fan and try to visit the US Open every year to support my favorite tennis player - Alcaraz.
                            </h5>
                            <br></br><br></br><br></br>
                            <h2><b>I like learning new <mark>skills</mark>.</b></h2>
                            <h5>
                                I spend a lot of time tinkering on my computer. Right now, I'm learning how to make 3D designs on Blender and develop mobile apps in Flutter.
                                I'm interested in building my own brand and planning to learn video editing and social media branding.
                                I also enjoy DIY crafts, including origami and jewelry-making.
                            </h5>
                        </th>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default injectSheet(styles)(Home);