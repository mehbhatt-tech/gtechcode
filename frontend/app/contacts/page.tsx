import React from 'react';

// Mock data to visualize the UI
const contacts = [
  { id: 1, name: "John Doe", phone: "+1 555 123 4567", status: "NEW" },
  { id: 2, name: "Jane Smith", phone: "+1 555 987 6543", status: "CONTACTED" },
];

export default function ContactsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Contact Management</h1>
      <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} className="border-t">
              <td className="p-4">{contact.name}</td>
              <td className="p-4">{contact.phone}</td>
              <td className="p-4">
                <span className={`px-2 py-1 rounded text-sm ${contact.status === 'NEW' ? 'bg-blue-100' : 'bg-green-100'}`}>
                  {contact.status}
                </span>
              </td>
              <td className="p-4">
                <button className="text-blue-600 hover:underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
