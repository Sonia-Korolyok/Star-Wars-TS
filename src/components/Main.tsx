import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contact from "./Contact.jsx";
import {navItems} from "../utils/constants.js";
import {SWContext} from "../utils/context.js";
import {useContext} from "react";
import {Route, Routes} from "react-router";
import ErrorPage from "./ErrorPage.tsx";

const Main = () => {
    useContext(SWContext);

    return (
        <Routes>
            {['/', navItems[0], `${navItems[0]}/:heroId`].map(path => <Route key={path} path={path} element={<Home/>}/>)}
            {[`${navItems[1]}`, `${navItems[1]}/:heroId`].map(path => <Route key={path} path={path} element={<AboutMe/>}/>)}
            {[`${navItems[2]}`, `${navItems[2]}/:heroId`].map(path=> <Route key={path} path={path} element={<StarWars/>}/>)}
            {[`${navItems[3]}`, `${navItems[3]}/:heroId`].map(path=> <Route key={path} path={path} element={<Contact/>}/>)}
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    )
}


export default Main;