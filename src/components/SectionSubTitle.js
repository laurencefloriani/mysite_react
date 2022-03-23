import {Text, View} from "react-native";


export default function SectionSubTitle(props) {
    return (
        <View style={{flexDirection: 'row', alignItems: 'left'}}>
            <View>
                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold'
                }}> {props.title} </Text>
            </View>
            <View style={{
                flex: 1,
                height: 5,
                backgroundColor: "#464646"
            }} />
            <View>
                <Text style={{
                    fontSize: 25,
                }}> {props.appendix} </Text>
            </View>
        </View>
    );
}