import React from 'react';
import Link from 'next/link';
import { Home, Layers, Lock, Monitor, Box, Menu, BookOpen, RefreshCw, Download } from 'react-feather';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-dark text-white vh-100 d-none d-lg-flex flex-column" style={{ width: '250px', position: 'sticky', top: 0 }}>
      <div className="p-4 border-bottom border-secondary">
        <h4 className="fw-bold mb-0 text-white">Dash UI</h4>
      </div>
      
      <div className="flex-grow-1 overflow-auto p-3">
        {/* Main Nav */}
        <div className="nav-item mb-4">
          <Link href="/" className="nav-link text-white d-flex align-items-center opacity-75 hover-opacity-100">
            <Home size={18} className="me-3" /> Dashboard
          </Link>
        </div>

        <p className="text-uppercase text-muted small fw-bold mb-3" style={{ fontSize: '0.7rem' }}>Layouts & Pages</p>
        <ul className="list-unstyled">
          <li className="mb-3 d-flex justify-content-between align-items-center opacity-75 cursor-pointer">
            <span><Layers size={18} className="me-3" /> Pages</span>
            <span className="small">▾</span>
          </li>
          <li className="mb-3 d-flex justify-content-between align-items-center opacity-75 cursor-pointer">
            <span><Lock size={18} className="me-3" /> Authentication</span>
            <span className="small">▾</span>
          </li>
          <li className="mb-3 opacity-75 cursor-pointer">
            <Monitor size={18} className="me-3" /> Layouts
          </li>
        </ul>

        <p className="text-uppercase text-muted small fw-bold mt-4 mb-3" style={{ fontSize: '0.7rem' }}>Documentation</p>
        <ul className="list-unstyled">
          <li className="mb-3 opacity-75 cursor-pointer"><BookOpen size={18} className="me-3" /> Docs</li>
          <li className="mb-3 opacity-75 cursor-pointer"><RefreshCw size={18} className="me-3" /> Changelog</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;