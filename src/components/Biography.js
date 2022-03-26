import {FiGithub, FiLinkedin, FiMail} from 'react-icons/fi';
import {Grid} from "@mui/material";
import "../styles/Biography.css"
import TitleText from "./TitleText";
import InnerText from "./InnerText";
import {View} from "react-native-web";

export default function Biography() {
    return (
        <div className="bio-main-container">
            <div className="bio-container" >
                <img src={"profil.jpg"} alt="profil" className="profil"/>
                <Grid container spacing={0} paddingLeft={5}>
                    <Grid item>
                        <img src={"quotes_left.png"} alt="quotes_left" className="quotes_left"/>
                    </Grid>
                    <Grid item>
                        <View style={{flexDirection: 'column', alignItems: 'left'}}>
                            <View>
                                <TitleText>Bienvenue sur mon site !</TitleText>
                            </View>
                            <br/>
                            <View>
                                <InnerText>Bonjour, je m'appelle Laurence Daisy Floriani.</InnerText>
                            </View>
                            <View>
                                <InnerText>
                                    Je suis actuellement étudiante en Master en Science Informatique finalité spécialisée à l'UMons, Belgique.
                                    Durant mes deux ans de Master, j'en ai profité pour m'intéresser à des domaines varier de l'informatique.
                                    J'ai une préférence pour le développement d'applications web ou non. J'apprécie également ce qui touche à la gestion des données et au Machine Learning.
                                    Je vous souhaite une bonne visite sur ce petit site que j'ai implémenté sur mon temps libre.
                                </InnerText>
                            </View>
                        </View>
                    </Grid>
                    <Grid item>
                        <img src={"quotes_right.png"} alt="quotes_right" className="quotes_right"/>
                    </Grid>
                </Grid>
                <br/>
            </div>
            <div className="contact-container">
                <a href="https://www.linkedin.com/in/laurence-floriani-1659b9234/" >
                    <TitleText><FiLinkedin /></TitleText>
                </a>
                <a style={{paddingLeft: 10}} href={"mailto:laurenceflo@hotmail.com"} >
                    <TitleText><FiMail /></TitleText>
                </a>
                <a style={{paddingLeft: 10}} href={"https://github.com/laurencefloriani"} >
                    <TitleText><FiGithub /></TitleText>
                </a>
            </div>
        </div>
    );
}