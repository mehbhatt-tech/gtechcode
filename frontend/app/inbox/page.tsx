import React from 'react';

// Mock data for the inbox
const messages = [
  { id: 1, sender: "John Doe", type: "SMS", preview: "Hey, are you available for a call?", time: "10:30 AM" },
  { id: 2, sender: "Jane Smith", type: "Email", preview: "Following up on the proposal...", time: "09:15 AM" },
  { id: 3, sender: "Tech Support", type: "WhatsApp", preview: "Your request has been processed.", time: "Yesterday" },
];

export default function UnifiedInbox() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Unified Inbox</h1>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {messages.map((msg) => (
          <div key={msg.id} className="p-4 border-b hover:bg-gray-50 flex justify-between items-center cursor-pointer">
            <div>
              <p className="font-semibold">{msg.sender}</p>
              <p className="text-sm text-gray-600">{msg.preview}</p>
            </div>
            <div className="text-right text-xs text-gray-400">
              <span className="block mb-1 font-medium text-blue-500">{msg.type}</span>
              {msg.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
