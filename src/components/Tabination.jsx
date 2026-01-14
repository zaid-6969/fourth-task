import React, { useState } from "react";

const tabs = [
  {
    id: "Worked on",
    label: "Worked on",
    content: (
      <div>
        <h2>👤 Profile</h2>
        <p>Name: John Doe</p>
        <p>Email: john@gmail.com</p>
      </div>
    ),
  },
  {
    id: "Viewed",
    label: "Viewed",
    content: (
      <div>
        <h2>⚙️ Settings</h2>
        <p>Theme: Dark</p>
        <p>Notifications: Enabled</p>
      </div>
    ),
  },
  {
    id: "Assigned to me",
    label: "Assigned to me",
    content: (
      <div>
        <h2>🔐 Security</h2>
        <p>Password: ********</p>
        <p>2FA: Enabled</p>
      </div>
    ),
  },
  {
    id: "Starred",
    label: "Starred",
    content: (
      <div>
        <h2>🔐 Security</h2>
        <p>Password: ********</p>
        <p>2FA: Enabled</p>
      </div>
    ),
  },
  {
    id: "Boards",
    label: "Boards",
    content: (
      <div>
        <h2>🔐 Security</h2>
        <p>Password: ********</p>
        <p>2FA: Enabled</p>
      </div>
    ),
  },
];

const Tabination = () => {
  const [activeTab, setActiveTab] = useState("Worked on");

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
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </>
  );
};

export default Tabination;
