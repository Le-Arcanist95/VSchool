import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"
import Dropdown from "./Dropdown";

function NavItem({ items, depthLevel }) {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef()

    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [dropdown]);

    function onMouseEnter() {
        window.innerWidth > 960 && setDropdown(true)
    }
    function onMouseLeave() {
        window.innerWidth > 960 && setDropdown(false);
    }

    return (
        <li className="nav-item" ref={ref}>
            {items.subList ? (
                <>
                    <button 
                        type="button"
                        aria-haspopup={"menu"}
                        aria-expanded={dropdown ? "true" : "false"}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        {items.title}{" "}
                        {depthLevel > 0 ? <span> &raquo; </span> : <span className="arrow" />}
                    </button>
                    <Dropdown 
                        sublists={items.subList}
                        dropdown={dropdown}
                        depthLevel={depthLevel}
                    />
                </>
            ) : (
                <Link to={"/#"}> {items.title} </Link>
            )}
        </li>
    )
}

export default NavItem;