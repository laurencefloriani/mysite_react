import SectionSubTitle from "./SectionSubTitle";
import {Grid} from "@mui/material";
import {Text} from "react-native";
import {View} from "react-native-web";

export default function Project(props) {

    return (
        <div>
            <SectionSubTitle title={props.name} appendix={props.years}/>
            <br />
            <View>
                {props.langages.map((lang) => {
                    return <Text style={{fontSize: 20, fontStyle: 'italic', color: 'blue', fontWeight: 'bold', textAlign: 'center'}}>{lang} </Text>;
                })}
            </View>
            <br />
            <Grid container style={{paddingLeft: 50, paddingRight: 250}} spacing={10}>
                <Grid item style={{ display: "flex", alignItems: "center" }}>
                    <a href={props.url}>
                        <img src={props.img} alt={props.img} style={{width: 150, height: 150}}/>
                    </a>
                </Grid>
                <Grid item style={{ display: "flex", alignItems: "center" }}>
                    <Text style={{ fontSize: 20, }}>{props.description}</Text>
                </Grid>
            </Grid>
            <br/>
        </div>
    )

}