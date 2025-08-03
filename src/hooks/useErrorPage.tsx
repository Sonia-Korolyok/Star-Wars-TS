import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";

export const useErrorPage = () => {
    const {heroId = defaultHero} = useParams();
    const {changeHero, changeRealHero} = useContext(SWContext);

    useEffect(() => {
        changeRealHero(heroId);
        if(!(heroId in characters)){
            return;
        }

        changeHero(heroId);
    }, [heroId]);

    return{
        isError: !(heroId in characters),
        heroId
    }
}