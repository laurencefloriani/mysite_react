import {Text, View} from "react-native";
import SectionSubTitle from "./SectionSubTitle";
import {Grid} from "@mui/material";

export default function Section(props) {

    return (
        <div>
            <SectionSubTitle title={props.title} appendix={props.appendix}/>
            <br />
            <Grid container spacing={5}>
                <Grid item>
                    <img src={props.img} alt={props.img} style={{width: 150, height: 150}}/>
                </Grid>
                <Grid item>
                    <Text style={{ fontSize: 18, }}> {props.description} </Text>
                </Grid>
            </Grid>
        </div>
    )

}