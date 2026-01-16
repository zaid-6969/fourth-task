import React from "react";
import "../styles/Aside.scss";
import { NavLink } from "react-router-dom";
import {
  IoPersonCircleOutline,
  IoReorderTwoSharp,
} from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { RiApps2AddLine } from "react-icons/ri";
import { SiSaturn } from "react-icons/si";
import { FiAlignCenter } from "react-icons/fi";
import { BsGrid1X2 } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { TbAdjustmentsFilled } from "react-icons/tb";
import { useSelector } from "react-redux";

const asideMenu = [
  { icon: <IoPersonCircleOutline />, label: "For you", path: "/homeuser" },
  { icon: <IoMdTime />, label: "Recent", path: "/recent" },
  { icon: <IoIosStarOutline />, label: "Starred", path: "/starred" },
  { icon: <RiApps2AddLine />, label: "Apps", path: "/apps" },
  { icon: <IoReorderTwoSharp />, label: "Plans", path: "/plans" },
  { icon: <SiSaturn />, label: "Spaces", path: "/spaces" },
  { icon: <FiAlignCenter />, label: "Filters", path: "/filters" },
  { icon: <BsGrid1X2 />, label: "Dashboards", path: "/dashboards" },
  { icon: <FaUserFriends />, label: "Teams", path: "/teams" },
  { icon: <TbAdjustmentsFilled />, label: "Customize sidebar", path: "/settings" },
];

const Asidebar = () => {
  const showBox = useSelector((state) => state.ui.showBox);

  return (
    <div
      className="aside-container"
      style={{ display: showBox ? "flex" : "none" }}
    >
      <ul>
        {asideMenu.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "aside-link active" : "aside-link"
              }
            >
              <span>{item.icon}</span>
              <p>{item.label}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Asidebar;
