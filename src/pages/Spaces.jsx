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
import Kanban from "../components/Kanban"
import Table from "../components/Table";
import { TbWorld } from "react-icons/tb";
import { LiaThListSolid } from "react-icons/lia";
import { CiViewColumn } from "react-icons/ci";
import { LuCodeXml } from "react-icons/lu";
import { SiFormspree } from "react-icons/si";
import { CiAlignLeft } from "react-icons/ci";
import { FaWpforms } from "react-icons/fa6";



const Spaces = () => {

    const tabs = [
    {
      id: "Summary",
      label: "Summary",
      content: <div><h2>👤 Profile</h2></div>,
      icon: <TbWorld/>
    },
    {
      id: "List",
      label: "List",
      content: <Table />,
      icon:<LiaThListSolid />
    },
    {
      id: "Board",
      label: "Board",
      content: <><Kanban /></>,
      icon:<CiViewColumn />
    },
    {
      id: "Code",
      label: "Code",
      content: <div><h2>⭐ Starred</h2></div>,
      icon: <LuCodeXml/>
    },
    {
      id: "Forms",
      label: "Forms",
      content: <div><h2>📋 Boards</h2></div>,
      icon:<SiFormspree/>
    },
    {
      id: "Timeline",
      label: "Timeline",
      content: <div><h2>📋 Boards</h2></div>,
      icon:<CiAlignLeft/>
    },
    {
      id: "Pages",
      label: "Pages",
      content: <div><h2>📋 Boards</h2></div>,
      icon: <FaWpforms/>
    },
  ];


  return (
    <div style={{width:'100% '}} className="landing-container">
      <div style={{width:'97%'}} className="landing">
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
