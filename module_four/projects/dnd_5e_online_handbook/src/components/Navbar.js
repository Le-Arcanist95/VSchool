import React from "react";
import { navItemList } from "../resources/NavList";
import NavItem from "./NavItem"

function Navbar() {
    return (
        <nav>
            <ul className="nav-menu">
                {navItemList.map((menu, index) => {
                    const depthLevel = 0;
                    return (
                        <NavItem items={menu} key={index} depthLevel={depthLevel} />
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar;