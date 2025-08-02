import {starWarsInfo} from "../utils/constants.js";
import Text from "./ui/Text.jsx";
import ErrorPage from "./ErrorPage.tsx";
import {useErrorPage} from "../hooks/useErrorPage.tsx";

const StarWars = () => {
    const {isError} = useErrorPage()
    return !isError ? (
        <Text>{starWarsInfo}</Text>
    ) : <ErrorPage/>
    };

export default StarWars;