import React, { useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import { Terminal as XTerm } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';
import './Terminal.css';

const Terminal = ({ onClose, onMinimize }) => {
  const terminalRef = useRef(null);
  const fitAddon = useRef(new FitAddon());
  const nodeRef = useRef(null);

  useEffect(() => {
    const term = new XTerm({
      cursorBlink: true,
      theme: {
        background: '#1e1e1e',
        foreground: '#00ff00',
      },
    });
    term.loadAddon(fitAddon.current);
    term.open(terminalRef.current);
    fitAddon.current.fit();

    term.writeln('Welcome to Ubuntu Web Desktop!');
    term.writeln('$ ');

    let command = '';
    term.onKey(({ key, domEvent }) => {
      if (domEvent.keyCode === 13) {
        term.writeln('');
        if (command) {
          term.writeln(`You typed: ${command}`);
        }
        term.writeln('$ ');
        command = '';
      } else if (domEvent.keyCode === 8) {
        if (command.length > 0) {
          term.write('\b \b');
          command = command.slice(0, -1);
        }
      } else {
        command += key;
        term.write(key);
      }
    });

    return () => {
      term.dispose();
    };
  }, []);

  const onResizeStop = () => {
    fitAddon.current.fit();
  };

  return (
    <Draggable handle=".window-header" nodeRef={nodeRef}>
      <div ref={nodeRef} className="window terminal-window">
        <Resizable
          defaultSize={{
            width: 600,
            height: 400,
          }}
          minWidth={300}
          minHeight={200}
          className="window-content terminal"
          onResizeStop={onResizeStop}
        >
          <div className="window-header">
            <div className="buttons">
              <span className="close" onClick={onClose}></span>
              <span className="minimize" onClick={onMinimize}></span>
              <span className="maximize"></span>
            </div>
            <div className="title">Terminal</div>
          </div>
          <div className="window-body" ref={terminalRef}></div>
        </Resizable>
      </div>
    </Draggable>
  );
};

export default Terminal;
