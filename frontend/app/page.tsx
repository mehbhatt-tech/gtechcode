// Simple Dashboard Layout
import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">CRM Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-white shadow rounded">Total Leads: 124</div>
        <div className="p-4 bg-white shadow rounded">Active Calls: 2</div>
        <div className="p-4 bg-white shadow rounded">Pending Tasks: 5</div>
      </div>
      <div className="mt-8 bg-white p-4 shadow rounded">
        <h2 className="font-semibold">Recent Interactions</h2>
        {/* Contact list component would go here */}
      </div>
    </div>
  );
}
