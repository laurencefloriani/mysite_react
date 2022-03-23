import {Text, View} from "react-native";
import SectionSubTitle from "./SectionSubTitle";

export default function Section(props) {

    return (
        <div>
            <SectionSubTitle title={props.title} appendix={props.appendix}/>
        <br />
        <View>
            <Text style={{
                fontSize: 18,
            }}> {props.description} </Text>
        </View>
        </div>
    )

}