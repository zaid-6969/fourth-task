import React from "react";
import "../styles/Aside.scss";
import { IoPersonCircleOutline, IoReorderTwoSharp } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { RiApps2AddLine } from "react-icons/ri";
import { SiSaturn } from "react-icons/si";
import { FiAlignCenter } from "react-icons/fi";
import { BsGrid1X2 } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import { TbAdjustmentsFilled } from "react-icons/tb";

const asideMenu = [
  { icon: <IoPersonCircleOutline />, label: "For you" },
  { icon: <IoMdTime />, label: "Recent" },
  { icon: <IoIosStarOutline />, label: "Starred" },
  { icon: <RiApps2AddLine />, label: "Apps" },
  { icon: <IoReorderTwoSharp />, label: "Plans" },
  { icon: <SiSaturn />, label: "Spaces" },
  { icon: <FiAlignCenter />, label: "Filters" },
  { icon: <BsGrid1X2 />, label: "Dashboards" },
  { icon: <AiOutlineTeam />, label: "Teams" },
  { icon: <TbAdjustmentsFilled />, label: "Customize sidebar" },
];
const Asidebar = () => {
  return (
    <div className="aside-container">
      <ul>
        {asideMenu.map((item, index) => (
          <li key={index}>
            <span>{item.icon}</span>
            <p>{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Asidebar;
