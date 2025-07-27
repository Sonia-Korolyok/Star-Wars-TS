import Button from "./ui/Button.jsx";
import {NavLink} from "react-router";

interface NavItemsProps {
    itemTitle: string
}

const NavItem = ({itemTitle}: NavItemsProps) => {


    return (

            <NavLink to={`${itemTitle}`}><Button>{itemTitle}</Button></NavLink>


    )
}

export default NavItem;