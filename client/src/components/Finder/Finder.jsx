import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import './Finder.css';

const sidebarSections = [
  {
    title: 'Favorites',
    items: [
      { name: 'AirDrop' },
      { name: 'Recents', active: true },
      { name: 'Applications' },
      { name: 'Desktop' },
      { name: 'Documents' },
      { name: 'Downloads' },
    ],
  },
  {
    title: 'iCloud',
    items: [
      { name: 'iCloud Drive' },
      { name: 'Desktop' },
      { name: 'Documents' },
    ],
  },
  {
    title: 'Locations',
    items: [
      { name: 'Macintosh HD' },
      { name: 'Network' },
    ],
  },
  {
    title: 'Tags',
    isTagList: true,
    items: [
      { name: 'Red', color: '#ff3b30' },
      { name: 'Orange', color: '#ff9500' },
      { name: 'Yellow', color: '#ffd60a' },
      { name: 'Green', color: '#34c759' },
      { name: 'Blue', color: '#0a84ff' },
      { name: 'Purple', color: '#bf5af2' },
    ],
  },
];

const contentItems = [
  { name: 'Design Assets', type: 'folder', detail: 'Folder' },
  { name: 'Mood Board', type: 'folder', detail: 'Folder' },
  { name: 'Launch Checklist.md', type: 'file', detail: 'Markdown • Updated today' },
  { name: 'Product Brief.pdf', type: 'file', detail: 'PDF • 1.2 MB' },
  { name: 'Team Portrait.heic', type: 'photo', detail: 'Image • Edited Mar 12' },
  { name: 'Showreel.mov', type: 'video', detail: 'Video • 320 MB' },
];

const Finder = ({ onClose, onMinimize }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable handle=".window-header" nodeRef={nodeRef}>
      <div ref={nodeRef} className="window finder-window">
        <Resizable
          defaultSize={{
            width: 920,
            height: 560,
          }}
          minWidth={640}
          minHeight={360}
          className="window-content finder"
        >
          <div className="window-header">
            <div className="buttons">
              <span className="close" onClick={onClose}></span>
              <span className="minimize" onClick={onMinimize}></span>
              <span className="maximize"></span>
            </div>
            <div className="title">Finder</div>
            <div className="header-actions">
              <button className="pill-button">&lsaquo;</button>
              <button className="pill-button">&rsaquo;</button>
              <button className="pill-button grid">•••</button>
            </div>
          </div>
          <div className="toolbar">
            <div className="toolbar-left">
              <div className="segmented">
                <button className="active">Gallery</button>
                <button>List</button>
                <button>Columns</button>
                <button>Icons</button>
              </div>
            </div>
            <div className="toolbar-right">
              <div className="breadcrumb">Macintosh HD ▸ Users ▸ codex</div>
              <input type="text" className="search" placeholder="Search" aria-label="Search Finder" />
            </div>
          </div>
          <div className="window-body">
            <aside className="sidebar">
              {sidebarSections.map((section) => (
                <div className="sidebar-section" key={section.title}>
                  <div className="sidebar-title">{section.title}</div>
                  <ul>
                    {section.items.map((item) => (
                      <li
                        key={item.name}
                        className={`${item.active ? 'active' : ''} ${section.isTagList ? 'tag-item' : ''}`}
                      >
                        {section.isTagList && (
                          <span className="tag-dot" style={{ backgroundColor: item.color }} />
                        )}
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </aside>
            <main className="main-content">
              <div className="content-header">
                <h2>Recents</h2>
                <span className="sort-label">Group by Date Modified</span>
              </div>
              <div className="file-grid">
                {contentItems.map((item) => (
                  <div key={item.name} className={`file-item ${item.type}`}>
                    <div className="file-preview" aria-hidden="true" />
                    <span className="file-name">{item.name}</span>
                    <span className="file-meta">{item.detail}</span>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </Resizable>
      </div>
    </Draggable>
  );
};

export default Finder;
