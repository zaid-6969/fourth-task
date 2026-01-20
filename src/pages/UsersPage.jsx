import React from "react";
import "../styles/User.scss";
import Tabination from "../components/Tabination";
import SupportCard from "../components/Card";
import Creationmodule from "../components/Creationmodule";
import { useSelector } from "react-redux";
import { db } from "../firebase/firebase";

const UsersPage = () => {

  console.log("Firestore DB:", db);

  const showModule = useSelector((state) => state.module.showModule);

  const tabs = [
    {
      id: "Worked on",
      label: "Worked on",
      content: (
        <div>
          <h2>👤 Profile</h2>
        </div>
      ),
    },
    {
      id: "Viewed",
      label: "Viewed",
      content: (
        <div>
          <h2>⚙️ Settings</h2>
        </div>
      ),
    },
    {
      id: "Assigned to me",
      label: "Assigned to me",
      content: (
        <div>
          <h2>🔐 Security</h2>
        </div>
      ),
    },
    {
      id: "Starred",
      label: "Starred",
      content: (
        <div>
          <h2>⭐ Starred</h2>
        </div>
      ),
    },
    {
      id: "Boards",
      label: "Boards",
      content: (
        <div>
          <h2>📋 Boards</h2>
        </div>
      ),
    },
  ];

  return (
    <>
      <div
        style={{ display: showModule ? "flex" : "none" }}
        className="creation-module"
      >
        <Creationmodule />
      </div>
      <div className="landing-container">
        <div className="landing">
          <h2>For you</h2>
          <div className="hr"></div>

          <div className="tabination-container">
            <div>
              <div className="tabination-topic">
                <p>Recent spaces</p>
                <p style={{ color: "#669df1" }}>View all spaces</p>
              </div>

              <div className="card-container">
                <SupportCard />
              </div>
            </div>

            <div className="tabination">
              <Tabination tabs={tabs} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
