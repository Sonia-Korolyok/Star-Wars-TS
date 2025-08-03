import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import {defaultHero} from "./utils/constants.js";
import {SWContext} from "./utils/context.js";

function App() {
    const [hero, setHero] = useState(defaultHero);
    const [realHero, setRealHero] = useState(defaultHero);

    return (
        <div>
            <SWContext value={{hero, changeHero: setHero, realHero, changeRealHero: setRealHero}}>
                <Header/>
                <Main/>
                <Footer/>
            </SWContext>
        </div>

    )
}

export default App
