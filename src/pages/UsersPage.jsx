import React from "react";
import "../styles/User.scss";
import Tabination from "../components/Tabination";
import "../styles/User.scss";
import Card from "../components/Card";
import SupportCard from "../components/Card";

const UsersPage = () => {
  return (
    <div className="landing-container">
      <div className="landing">
        <h2>For you</h2>
        <div className="hr"></div>
          <div className="tabination-container">
            <div>
            <div className="tabination-topic">
              <p>Recent spaces</p>
              <p style={{color:'#669df1'}}>View all spaces</p>
            </div>
            <div className="card-container">
              <SupportCard />
            </div>
            </div>
            <div className="tabination">
              <Tabination />
            </div>
          </div>
      </div>
    </div>
  );
};

export default UsersPage;
