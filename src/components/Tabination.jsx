import React, { useState } from "react";

const Tabination = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  if (!tabs.length) {
    return null; 
  }
  const activeContent = tabs.find(
    (tab) => tab.id === activeTab
  )?.content;

  

  return (
    <>
      <div className="tabs">
        {tabs.map((tab) => (
          <div  className={`tab ${activeTab === tab.id ? "active" : ""}`}  key={tab.id}>
            <span>{tab.icon}</span>
          <button
            className={`tab `}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
          </div>
        ))}
      </div>

      <div  className="hr"></div>

      <div className="tab-content">
        {activeContent}
      </div>
    </>
  );
};

export default Tabination;
