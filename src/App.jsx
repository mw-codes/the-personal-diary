import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import EntryList from "./components/EntryList";
import AddEntryModal from "./components/AddEntryModal";
import ViewEntryModal from "./components/ViewEntryModal";

function App() {
  const [entries, setEntries] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  // Lade vorhandene Einträge aus localStorage beim Start
  useEffect(() => {
    const saved = localStorage.getItem("diaryEntries");
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  // Eintrag speichern und in localStorage ablegen
  const handleSaveEntry = (newEntry) => {
    const alreadyExists = entries.some((e) => e.date === newEntry.date);
    if (alreadyExists) {
      alert(
        "Für dieses Datum existiert bereits ein Eintrag. Bitte komm morgen wieder."
      );
      return;
    }

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header onAddEntryClick={() => setIsAddModalOpen(true)} />

      {/* Eintragsliste */}
      <EntryList
        entries={entries}
        onEntryClick={(entry) => setSelectedEntry(entry)}
      />

      {/* Modal zum Erstellen */}
      {isAddModalOpen && (
        <AddEntryModal
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleSaveEntry}
        />
      )}

      {/* Modal zur Detailanzeige */}
      {selectedEntry && (
        <ViewEntryModal
          entry={selectedEntry}
          onClose={() => setSelectedEntry(null)}
        />
      )}
    </div>
  );
}

export default App;
