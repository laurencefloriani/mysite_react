import {Text} from "react-native";
import {FiGithub, FiLinkedin, FiMail} from 'react-icons/fi';
import {Grid} from "@mui/material";
import "../styles/Biography.css"

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
                        <Text style={{fontSize: 50}}>Bienvenue sur mon site !</Text>
                        <br/>
                        <Text style={{fontSize: 20}}>
                            Bonjour, je m'appelle Laurence Daisy Floriani. <br/>
                            Je suis actuellement étudiante en Master en Science Informatique finalité spécialisée à l'UMons, Belgique.<br/>
                            Durant mes deux ans de Master, j'en ai profité pour m'intéresser à des domaines varier de l'informatique. <br/>
                            J'ai une préférence pour le développement d'applications web ou non. J'apprécie également ce qui touche à la gestion des données et au Machine Learning. <br/>
                            Je vous souhaite une bonne visite sur ce petit site que j'ai implémenté sur mon temps libre.
                        </Text>
                    </Grid>
                    <Grid item>
                        <img src={"quotes_right.png"} alt="quotes_right" className="quotes_right"/>
                    </Grid>
                </Grid>
                <br/>
            </div>
            <div className="contact-container">
                <a href="https://www.linkedin.com/in/laurence-floriani-1659b9234/" >
                    <Text style={{fontSize: 50}}><FiLinkedin /></Text>
                </a>
                <a style={{paddingLeft: 10}} href={"mailto:laurenceflo@hotmail.com"} >
                    <Text style={{fontSize: 50}}><FiMail /></Text>
                </a>
                <a style={{paddingLeft: 10}} href={"https://github.com/laurencefloriani"} >
                    <Text style={{fontSize: 50}}><FiGithub /></Text>
                </a>
            </div>
        </div>
    );
}