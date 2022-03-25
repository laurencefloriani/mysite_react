import {Text, View} from "react-native";
import SectionSubTitle from "./SectionSubTitle";
import {Grid} from "@mui/material";

export default function Section(props) {

    return (
        <div>
            <SectionSubTitle title={props.title} appendix={props.appendix}/>
            <br />
            <Grid container style={{paddingLeft: 50, paddingRight: 250}} spacing={10}>
                <Grid item style={{ display: "flex", alignItems: "center" }}>
                    <img src={props.img} alt={props.img} style={{width: 150, height: 150}}/>
                </Grid>
                <Grid item style={{ display: "flex", alignItems: "center" }}>
                    <Text style={{ fontSize: 20, }}>{props.description}</Text>
                </Grid>
            </Grid>
            <br/>
        </div>
    )

}