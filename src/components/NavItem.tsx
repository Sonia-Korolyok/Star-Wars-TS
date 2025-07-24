import Button from "./ui/Button.jsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.js";

interface NavItemsProps {
    itemTitle: string
}

const NavItem = ({itemTitle}: NavItemsProps) => {
    const {changePage} = useContext(SWContext);

    return (
        <Button callback={() => changePage(itemTitle)}>{itemTitle}</Button>
    )
}

export default NavItem;