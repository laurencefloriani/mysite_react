import {Text, View} from "react-native";
import {FiGithub, FiLinkedin, FiMail} from 'react-icons/fi';
import "../styles/Biography.css"

export default function Biography() {
    return (
        <div className="main-container">
            <div className="bio-container" >
                <img src={"profil.jpg"} alt="profil" className="profil"/>
                <img src={"quotes_left.png"} alt="quotes_left" className="quotes_left"/>
                <p className="welcome-text">
                    <h1 className="welcome-title">Bienvenue sur mon site !</h1>
                    <View>
                        <Text style={{
                            fontSize: 18,
                        }}>
                            Bonjour, je m'appelle Laurence Daisy Floriani. <br/>
                            Je suis actuellement étudiante en Master en Science Informatique finalité spécialisée à l'UMons, Belgique.<br/>
                            Durant mes deux ans de Master, j'en ai profité pour m'intéresser à des domaines varier de l'informatique. <br/>
                            J'ai une préférence pour le développement d'applications web ou non. J'apprécie également ce qui touche à la gestion des données et au Machine Learning. <br/>
                            Je vous souhaite une bonne visite sur ce petit site que j'ai implémenté sur mon temps libre.
                        </Text>
                    </View>
                </p>
                <img src={"quotes_right.png"} alt="quotes_right" className="quotes_right"/>
                <br/>
            </div>
            <div className="contact-container">
                <a href="https://www.linkedin.com/in/laurence-floriani-1659b9234/" >
                    <Text style={{fontSize: 50}}><FiLinkedin /></Text>
                </a>
                <Text>   </Text>
                <a href={"mailto:laurenceflo@hotmail.com"} >
                    <Text style={{fontSize: 50}}><FiMail /></Text>
                </a>
                <Text>   </Text>
                <a href={"https://github.com/laurencefloriani"} >
                    <Text style={{fontSize: 50}}><FiGithub /></Text>
                </a>
            </div>
        </div>
    );
}