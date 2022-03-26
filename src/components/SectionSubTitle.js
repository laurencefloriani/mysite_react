import {View} from "react-native";
import SubTitleText from "./SubTitleText";


export default function SectionSubTitle(props) {
    return (
        <View style={{flexDirection: 'row', alignItems: 'left'}}>
            <View>
                <SubTitleText>{props.title} </SubTitleText>
            </View>
            <View style={{
                flex: 1,
                height: 5,
                backgroundColor: "#464646"
            }} />
            <View>
                <SubTitleText> {props.appendix}</SubTitleText>
            </View>
        </View>
    );
}