import React from 'react';
import Link from 'next/link';

const AutomationPage = () => {
  const workflows = [
    { id: 1, name: "Missed Call Auto-Text", active: true },
    { id: 2, name: "New Lead Welcome SMS", active: true },
    { id: 3, name: "Google Review Request", active: false },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Automation Setup</h1>
        <Link href="/automation/builder" className="bg-blue-600 text-white px-4 py-2 rounded">
          + Build New Workflow
        </Link>
      </div>
      <div className="grid gap-4">
        {workflows.map((wf) => (
          <div key={wf.id} className="p-4 bg-white shadow rounded flex justify-between items-center">
            <span>{wf.name}</span>
            <button className={`px-4 py-2 rounded ${wf.active ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>
              {wf.active ? 'Enabled' : 'Disabled'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutomationPage;
