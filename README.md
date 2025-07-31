The Personal Diary Project
Vite provides a fast and smooth development experience with its optimized build tool.
React offers a flexible and component-based architecture for building user interfaces.
Tailwind CSS delivers utility-first styling, enabling rapid and consistent design across your project.
Daisy UI supplies a collection of pre-designed components, streamlining the process of building beautiful and responsive interfaces.

App ← owns global state (entries, selectedEntry, modal flags)
├── Header
│ └── AddEntryButton ← opens AddEntryModal
├── EntryList ← displays cards sorted newest→oldest
│ └── EntryCard (repeated)┐
│ └── onClick → sets selectedEntry + opens ViewEntryModal
├── AddEntryModal ← form to create a new entry
│ └── EntryForm
└── ViewEntryModal ← shows full details for selected entry
└── EntryDetails
