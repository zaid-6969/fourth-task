import React, { use } from "react";
import { FiGrid } from "react-icons/fi";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuSettings } from "react-icons/lu";
import { IoMdHelpCircleOutline } from "react-icons/io";
import "../styles/app.scss";
import image from "../assets/image/jira.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleBox } from "../store/uiSlice";
import { toggleModule } from "../store/module";

const Navbar = () => {
  const dispatch = useDispatch();
  const showBox = useSelector((state) => state.ui.showBox);

  return (
    <>
      <div className="navbar-container">
        <ul style={{ fontSize: "20px" }}>
          <button className="togglebtn" onClick={() => dispatch(toggleBox())}>
            <li>
              <span>
                {showBox ?  <GoSidebarExpand /> : <GoSidebarCollapse /> }
              </span>
            </li>
          </button>
          <li style={{ fontSize: "20px" }}>
            <span>
              <FiGrid />
            </span>
          </li>
          <li>
            <img src={image} alt="" />
            <p>Jira</p>
          </li>
        </ul>
        <div>
          <input placeholder="🔍  Search" type="text" />
          <button className="togglebtn" onClick={() => dispatch(toggleModule())}>
            {" "}
            <span>
              <FiPlus />
            </span>{" "}
            Create
          </button>
        </div>
        <ul>
          <li>
            <IoMdNotificationsOutline />
          </li>
          <li>
            <IoMdHelpCircleOutline />
          </li>
          <li>
            <LuSettings />
          </li>
        </ul>
      </div>
      <div
        style={{ paddingTop: "45px", position: "fixed" }}
        className="hr"
      ></div>
    </>
  );
};

export default Navbar;
