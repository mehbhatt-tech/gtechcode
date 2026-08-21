import React, { useState } from 'react';

// Mock data for workflow nodes
const initialNodes = [
  { id: 1, type: 'trigger', label: 'New Lead' },
  { id: 2, type: 'action', label: 'Send Welcome SMS' },
  { id: 3, type: 'condition', label: 'If no reply after 1hr' },
  { id: 4, type: 'action', label: 'Email Follow-up' },
];

const DragDropWorkflow = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Visual Workflow Builder</h1>
      <div className="flex gap-4">
        {/* Workflow Canvas */}
        <div className="flex-1 border-2 border-dashed border-gray-400 p-8 min-h-[400px] bg-gray-50 flex flex-col items-center gap-4">
          {initialNodes.map((node, index) => (
            <React.Fragment key={node.id}>
              <div className="p-4 bg-white shadow border border-blue-500 rounded w-64 text-center cursor-move">
                {node.label}
              </div>
              {index < initialNodes.length - 1 && <div className="text-blue-500 font-bold">↓</div>}
            </React.Fragment>
          ))}
        </div>

        {/* Sidebar Tool Palette */}
        <div className="w-64 bg-white shadow p-4 rounded">
          <h3 className="font-bold mb-4">Elements</h3>
          <div className="space-y-2">
            <div className="p-2 bg-gray-100 rounded cursor-pointer">➕ Trigger</div>
            <div className="p-2 bg-gray-100 rounded cursor-pointer">⚙️ Action</div>
            <div className="p-2 bg-gray-100 rounded cursor-pointer">❓ Condition</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragDropWorkflow;
