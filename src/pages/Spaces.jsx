import React from "react";
import image from "../assets/image/jira.jpg";
import '../styles/User.scss'
import { GiThreeFriends } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TiArrowMaximise } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import Tabination from "../components/Tabination";


const Spaces = () => {

    const tabs = [
    {
      id: "Summary",
      label: "Summary",
      content: <div><h2>👤 Profile</h2></div>,
    },
    {
      id: "List",
      label: "List",
      content: <div><h2>⚙️ Settings</h2></div>,
    },
    {
      id: "Board",
      label: "Board",
      content: <div><h2>🔐 Security</h2></div>,
    },
    {
      id: "Code",
      label: "Code",
      content: <div><h2>⭐ Starred</h2></div>,
    },
    {
      id: "Forms",
      label: "Forms",
      content: <div><h2>📋 Boards</h2></div>,
    },
    {
      id: "Timeline",
      label: "Timeline",
      content: <div><h2>📋 Boards</h2></div>,
    },
    {
      id: "Pages",
      label: "Pages",
      content: <div><h2>📋 Boards</h2></div>,
    },
  ];


  return (
    <div className="landing-container">
      <div className="landing">
        <p>spaces</p>
        <div className="topic-spaces">
          <div>
          <img src={image} alt="" />
          <h3>My Software Team</h3>
          <span><GiThreeFriends/></span>
          <span><BsThreeDots  /></span>
        </div>
        <div>
          <span><FiShare2 /></span>
          <span><AiOutlineThunderbolt /></span>
          <span><TiArrowMaximise /></span>
        </div>
        </div>
        <div>
        <Tabination tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export default Spaces;
