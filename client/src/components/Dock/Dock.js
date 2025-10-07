import React from 'react';
import './Dock.css';

const Dock = ({ apps, onAppClick }) => {
  return (
    <div className="dock">
      {apps.map((app) => (
        <div
          key={app.id}
          className={`dock-item ${app.isOpen ? 'open' : ''}`}
          onClick={() => onAppClick(app.id)}
        >
          <img src={app.icon} alt={app.name} />
          <span className="tooltip">{app.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Dock;