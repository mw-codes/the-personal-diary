// src/components/AddEntryModal.jsx
import React, { useState } from "react";

const defaultImageUrl = "/images/default.png"; // Relativer Pfad in kleines p public/

const AddEntryModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validierung
    if (!title || !date || !content) {
      setError("Bitte fülle alle Felder aus.");
      return;
    }

    // Lokaler Eintrag
    const newEntry = {
      id: Date.now(),
      title,
      date,
      imageUrl: imageUrl || defaultImageUrl, // Fallback
      content,
    };

    onSave(newEntry); // an App übergeben
    onClose(); // Modal schließen
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-lg p-6 text-white">
        <h2 className="text-xl font-bold mb-4 text-white">
          Neuen Tagebucheintrag hinzufügen
        </h2>

        {error && <p className="text-red-400 mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Titel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white placeholder-gray-400"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Bild-URL (optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white placeholder-gray-400"
          />
          <textarea
            placeholder="Inhalt"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded p-2 h-32 resize-none text-white placeholder-gray-400"
          ></textarea>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-500 hover:bg-gray-600 transition"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Speichern
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEntryModal;
