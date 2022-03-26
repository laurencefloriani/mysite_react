import {View} from "react-native";
import TitleText from "./TitleText";

export default function SectionTitle(props) {
    return (
        <View style={{flexDirection: 'row', alignItems: 'right'}}>
            <View style={{
                flex: 1,
                height: 5,
                backgroundColor: "#464646"
            }} />
            <View>
                <TitleText>{props.title}</TitleText>
            </View>
        </View>
    );
}