import {Text, View} from "react-native";
import "../styles/Biography.css"

export default function Biography() {
    return (
        <div className="bio-container" >
            <img src={"profil.jpg"} alt="profil" className="profil"/>
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
        </div>
    );
}