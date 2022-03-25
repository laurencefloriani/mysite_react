import Banner from "./Banner";
import SectionTitle from "./SectionTitle";
import {PROJECTS} from "./Utilities";
import Project from "./Project";

export default function Projects() {
    return (
        <div className="projects-container" >
            <Banner isHome={false}/>
            <SectionTitle title="Projects" />
            <br/>
            {
                PROJECTS.map((proj) => {
                    return <Project name={proj.name} years={proj.years} url={proj.url} langages={proj.langages}
                                    description={proj.description} img={proj.img} />
                })
            }
        </div>
    )
}