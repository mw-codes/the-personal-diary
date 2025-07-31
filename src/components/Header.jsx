// src/components/Header.jsx
import React from "react";

const Header = ({ onAddEntryClick }) => {
  return (
    <header className="bg-gray-800 text-gray-100 px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">📓 The Personal Diary</h1>
      <button
        onClick={onAddEntryClick}
        className="bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition"
      >
        + Neuer Eintrag
      </button>
    </header>
  );
};

export default Header;
