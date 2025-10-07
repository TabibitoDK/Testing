import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import './FileManager.css';

const initialFiles = [
  { name: 'Documents', type: 'folder' },
  { name: 'Pictures', type: 'folder' },
  { name: 'Music', type: 'folder' },
  { name: 'resume.pdf', type: 'file' },
  { name: 'photo.jpg', type: 'file' },
];

const FileManager = ({ onClose, onMinimize }) => {
  const [files, setFiles] = useState(initialFiles);

  return (
    <Draggable handle=".window-header">
      <Resizable
        defaultSize={{
          width: 800,
          height: 500,
        }}
        minWidth={300}
        minHeight={200}
        className="file-manager window"
      >
        <div className="window-header">
          <div className="buttons">
            <span className="close" onClick={onClose}></span>
            <span className="minimize" onClick={onMinimize}></span>
            <span className="maximize"></span>
          </div>
          <div className="title">File Manager</div>
        </div>
        <div className="window-body">
          <div className="sidebar">
            <ul>
              <li>Desktop</li>
              <li>Documents</li>
              <li>Downloads</li>
              <li>Pictures</li>
            </ul>
          </div>
          <div className="main-content">
            {files.map((file, index) => (
              <div key={index} className="file-item">
                <span className={file.type === 'folder' ? 'folder-icon' : 'file-icon'}></span>
                <span>{file.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Resizable>
    </Draggable>
  );
};

export default FileManager;