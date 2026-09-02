import React from 'react';

const Sidebar = () => (
  <nav className="w-64 h-screen bg-gray-800 text-white p-4">
    <h1 className="text-xl font-bold mb-8">gtechcode</h1>
    <ul>
      <li className="mb-4"><a href="/dashboard">Dashboard</a></li>
      <li className="mb-4"><a href="/contacts">Contacts</a></li>
      <li className="mb-4"><a href="/inbox">Unified Inbox</a></li>
      <li className="mb-4"><a href="/automation">Automation</a></li>
      <li className="mb-4"><a href="/settings">Settings</a></li>
    </ul>
  </nav>
);

export default Sidebar;
