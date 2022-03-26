import SectionSubTitle from "./SectionSubTitle";
import {View} from "react-native-web";
import InnerText from "./InnerText";

export default function Project(props) {
    return (
        <div>
            <SectionSubTitle title={props.name} appendix={props.years}/>
            <br />
            <View>
                {props.langages.map((lang) => {
                    return <InnerText isCode={true}>{lang} </InnerText>;
                })}
            </View>
            <br />
            <View style={{flexDirection: 'row', alignItems: 'left'}}>
                <View>
                    <a href={props.url}>
                        <img src={props.img} alt={props.img} style={{width: 150, height: 150}}/>
                    </a>
                </View>
                <View style={{paddingLeft: 20, justifyContent: 'center', flex: 1}}>
                    <InnerText isCode={false}>{props.description}</InnerText>
                </View>
            </View>
            <br/>
        </div>
    )

}