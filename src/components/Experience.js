import Banner from "./Banner";
import SectionTitle from "./SectionTitle";
import {EXPERIENCES} from "./Utilities";
import Section from "./Section";

export default function Experience() {
    return (
        <div className="experience-container" >
            <Banner home={false}/>
            <SectionTitle title="Expériences" />
            <br/>
            {
                EXPERIENCES.map((exp) => {
                    return <Section title={exp.post} appendix={exp.years} description={exp.description}/>
                })
            }
        </div>
    )
}