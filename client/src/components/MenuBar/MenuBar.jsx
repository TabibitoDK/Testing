import React from 'react';
import './MenuBar.css';

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <div className="left-section">
        <span className="menu-item logo"></span>
        <span className="menu-item app-name">Finder</span>
        <span className="menu-item">File</span>
        <span className="menu-item">Edit</span>
        <span className="menu-item">View</span>
        <span className="menu-item">Go</span>
        <span className="menu-item">Window</span>
        <span className="menu-item">Help</span>
      </div>
      <div className="right-section">
        <span className="menu-item">Wi-Fi</span>
        <span className="menu-item">Battery</span>
        <span className="menu-item">Clock</span>
        <span className="menu-item">Control Center</span>
      </div>
    </div>
  );
};

export default MenuBar;