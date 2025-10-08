import React, { useState } from 'react';
import './App.css';
import Desktop from './components/Desktop/Desktop';
import Dock from './components/Dock/Dock';
import MenuBar from './components/MenuBar/MenuBar';
import Finder from './components/Finder/Finder';
import Terminal from './components/Terminal/Terminal';

// Import app icons
import finderIcon from './assets/icons/Finder.png';
import terminalIcon from './assets/icons/Terminal.png';

const App = () => {
  const [apps, setApps] = useState([
    { id: 'finder', name: 'Finder', icon: finderIcon, isOpen: false, isMinimized: false },
    { id: 'terminal', name: 'Terminal', icon: terminalIcon, isOpen: false, isMinimized: false },
  ]);

  const handleAppClick = (appId) => {
    const app = apps.find((a) => a.id === appId);
    if (app) {
      if (app.isOpen && app.isMinimized) {
        // Restore from minimized
        setApps(apps.map((a) => (a.id === appId ? { ...a, isMinimized: false } : a)));
      } else if (!app.isOpen) {
        // Open the app
        setApps(apps.map((a) => (a.id === appId ? { ...a, isOpen: true, isMinimized: false } : a)));
      }
    }
  };

  const handleCloseApp = (appId) => {
    setApps(apps.map((a) => (a.id === appId ? { ...a, isOpen: false } : a)));
  };

  const handleMinimizeApp = (appId) => {
    setApps(apps.map((a) => (a.id === appId ? { ...a, isMinimized: true } : a)));
  };

  return (
    <div className="App">
      <Desktop>
        <MenuBar />
        {apps.map((app) => {
          if (app.isOpen && !app.isMinimized) {
            switch (app.id) {
              case 'finder':
                return <Finder key={app.id} onClose={() => handleCloseApp(app.id)} onMinimize={() => handleMinimizeApp(app.id)} />;
              case 'terminal':
                return <Terminal key={app.id} onClose={() => handleCloseApp(app.id)} onMinimize={() => handleMinimizeApp(app.id)} />;
              default:
                return null;
            }
          }
          return null;
        })}
        <Dock apps={apps} onAppClick={handleAppClick} />
      </Desktop>
    </div>
  );
};

export default App;
