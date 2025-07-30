import Button from "./ui/Button.jsx";
import {NavLink} from "react-router";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

interface NavItemsProps {
    itemTitle: string
}

const NavItem = ({itemTitle}: NavItemsProps) => {
const {hero} = useContext(SWContext);

    return (

            <NavLink to={`${itemTitle}/${hero}`}><Button>{itemTitle}</Button></NavLink>


    )
}

export default NavItem;