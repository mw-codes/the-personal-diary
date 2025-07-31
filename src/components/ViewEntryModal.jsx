import React from "react";

const ViewEntryModal = ({ entry, onClose }) => {
  if (!entry) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl p-6 relative overflow-y-auto max-h-[90vh] text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-2">{entry.title}</h2>
        <p className="text-gray-300 mb-4">{entry.date}</p>

        <img
          src={entry.imageUrl}
          alt={entry.title}
          className="w-full h-64 object-cover rounded mb-4"
        />

        <p className="whitespace-pre-wrap text-gray-100">{entry.content}</p>
      </div>
    </div>
  );
};

export default ViewEntryModal;
