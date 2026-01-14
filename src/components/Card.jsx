// import React from 'react'

// const Card = () => {
//   return (
//     <>
//     <div className='user-card'>
//        <div className='card'> 
//         </div>
//         <div className='card'> 
//         </div> 
//         <div className='card'> 
//         </div>  
//     </div>
//     </>
//   )
// }

// export default Card

import React from "react";
// import "./SupportCard.css";
import '../styles/User.scss'

const SupportCard = () => {
  return (
    <div className="user-card">
    <div className="support-card">
      {/* Left accent bar */}
      <div className="accent-bar"></div>

      {/* Card Content */}
      <div className="card-content">
        {/* Header */}
        <div className="card-header">
          <div className="icon">🎫</div>
          <div>
            <h4>Support</h4>
            <p className="subtitle">Service management</p>
          </div>
        </div>

        {/* Body */}
        <div className="card-body">
          <p className="section-title">Recent queues</p>

          <div className="row">
            <span>All open</span>
            <span className="count">0</span>
          </div>

          <div className="row">
            <span>Assigned to me</span>
            <span className="count">0</span>
          </div>

          <div className="footer">
            <span>3 queues</span>
            <span className="arrow">⌄</span>
          </div>
        </div>
      </div>
    </div>
     <div className="support-card">
      {/* Left accent bar */}
      <div className="accent-bar"></div>

      {/* Card Content */}
      <div className="card-content">
        {/* Header */}
        <div className="card-header">
          <div className="icon">🎫</div>
          <div>
            <h4>Support</h4>
            <p className="subtitle">Service management</p>
          </div>
        </div>

        {/* Body */}
        <div className="card-body">
          <p className="section-title">Recent queues</p>

          <div className="row">
            <span>All open</span>
            <span className="count">0</span>
          </div>

          <div className="row">
            <span>Assigned to me</span>
            <span className="count">0</span>
          </div>

          <div className="footer">
            <span>3 queues</span>
            <span className="arrow">⌄</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SupportCard;
 