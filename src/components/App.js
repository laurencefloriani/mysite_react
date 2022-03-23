import Banner from "./Banner";
import Section from "./Section";
import "../styles/App.css"
import Biography from "./Biography";
import SectionTitle from "./SectionTitle";
import {ACTIVITIES, EDUCATIONS, EXPERIENCES, VOLUNTEERWORKS} from "./Utilities";

export default function App() {
    return (
        <div className="main-container" >
            <Banner />
            <br/>
            <Biography />
            <br/>
            <SectionTitle title="Éducation" />
            <br/>
            {
                EDUCATIONS.map((educ) => {
                    return <Section title={educ.level} appendix={educ.years} description={educ.description} />
                })
            }
            <br/>
            <SectionTitle title="Expériences" />
            <br/>
            {
                EXPERIENCES.map((exp) => {
                    return <Section title={exp.post} appendix={exp.years} description={exp.description}/>
                })
            }
            <br/>
            <SectionTitle title="Bénévolats" />
            <br/>
            {
                VOLUNTEERWORKS.map((vol) => {
                    return <Section title={vol.post} appendix={vol.years} description={vol.description} />
                })
            }
            <br/>
            <SectionTitle title="Activités" />
            <br/>
            {
                ACTIVITIES.map((act) => {
                    return <Section title={act.name} appendix={act.years} description={act.description} />
                })
            }
        </div>
    );
}
