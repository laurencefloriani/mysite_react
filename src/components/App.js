import Banner from "./Banner";
import "../styles/App.css"
import Biography from "./Biography";

export default function App() {
    return (
        <div className="app-container" >
            <Banner home={true}/>
            <br/>
            <Biography />
        </div>
    );
}
