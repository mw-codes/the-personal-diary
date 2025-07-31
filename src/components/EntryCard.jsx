// src/components/EntryCard.jsx
import React from "react";

const EntryCard = ({ entry, onClick }) => {
  return (
    <div
      className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
      onClick={() => onClick(entry)}
    >
      <img
        src={entry.imageUrl}
        alt={entry.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{entry.title}</h3>
        <p className="text-sm text-gray-300">{entry.date}</p>
      </div>
    </div>
  );
};

export default EntryCard;
