import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";

export const useErrorPage = () => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        // changeRealHero(heroId);
        if(!(heroId in characters)){
            changeHero()
            return;
        }else {
            changeHero(heroId);
        }

    }, [heroId]);

    return{
        isError: !(heroId in characters),
        heroId
    }
}