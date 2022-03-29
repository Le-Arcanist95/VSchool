import NavItem from "./NavItem";

function Dropdown({ sublists, dropdown, depthLevel }) {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {sublists.map((submenu, index) => (
                <NavItem 
                    items={submenu}
                    key={index}
                    depthLevel={depthLevel}
                />
            ))}
        </ul>
    )
}

export default Dropdown;