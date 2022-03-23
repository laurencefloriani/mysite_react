import {Text, View} from "react-native";

export default function SectionTitle(props) {
    return (
        <View style={{flexDirection: 'row', alignItems: 'right'}}>
            <View style={{
                flex: 1,
                height: 5,
                backgroundColor: "#464646"
            }} />
            <View>
                <Text style={{
                    fontSize: 50,
                    fontWeight: 'bold'
                }}> {props.title} </Text>
            </View>
        </View>
    );
}