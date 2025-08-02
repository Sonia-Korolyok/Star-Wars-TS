import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import OpeningCrawl from "./OpeningCrawl.jsx";
import ErrorPage from "./ErrorPage.tsx";
import {useErrorPage} from "../hooks/useErrorPage.tsx";

const Home = () => {
    const {isError} = useErrorPage()
    
    return !isError ? (
        <main>
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    ) : <ErrorPage/>;
};

export default Home;