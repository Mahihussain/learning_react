import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="light" light expand="md" className="fixed-top">
        <NavbarToggler onClick={toggle} />
        <NavbarBrand href="/">reactstrap</NavbarBrand>

        <Collapse
          isOpen={isOpen}
          navbar
          className={`${isOpen ? "active" : ""}`}
        >
          <SideBar />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
