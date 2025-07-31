// src/components/EntryList.jsx
import React from "react";
import EntryCard from "./EntryCard";

const EntryList = ({ entries, onEntryClick }) => {
  // Neueste zuerst
  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {sortedEntries.length === 0 ? (
        <p className="text-gray-300 col-span-full text-center">
          Noch keine Einträge vorhanden.
        </p>
      ) : (
        sortedEntries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} onClick={onEntryClick} />
        ))
      )}
    </div>
  );
};

export default EntryList;
