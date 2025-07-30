import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import OpeningCrawl from "./OpeningCrawl.jsx";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "./ErrorPage.tsx";

const Home = () => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if(!(heroId in characters)){
            return;
        }
        changeHero(heroId);
    }, [heroId]);

    return (heroId in characters) ? (
        <main>
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    ) : <ErrorPage/>;
};

export default Home;