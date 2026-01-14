import React from "react";
import { FiGrid } from "react-icons/fi";
import { GoSidebarCollapse } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuSettings } from "react-icons/lu";
import { IoMdHelpCircleOutline } from "react-icons/io";
import "../styles/app.scss"
import image from "../assets/image/jira.jpg"

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <ul style={{ fontSize: "20px" }}>
          <li>
            <span>
              <GoSidebarCollapse />
            </span>
          </li>
          <li style={{ fontSize: "20px" }}>
            <span>
              <FiGrid />
            </span>
          </li>
          <li>
              <img  src={image} alt="" />
            <p>Jira</p>
          </li>
        </ul>
        <div>
           <input placeholder="🔍  Search" type="text" />
           <button> <span><FiPlus /></span>  Create</button>
        </div>
        <ul>
          <li><IoMdNotificationsOutline /></li>
          <li><IoMdHelpCircleOutline /></li>
          <li><LuSettings /></li>
        </ul>
      </div>
      <div style={{paddingTop:'45px',position:'fixed'}} className="hr"></div>
    </>
  );
};

export default Navbar;
