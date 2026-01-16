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
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="hr"></div>

      <div className="tab-content">
        {activeContent}
      </div>
    </>
  );
};

export default Tabination;
