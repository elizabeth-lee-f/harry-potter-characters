import { useState, useMemo } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import CharacterList from './components/CharacterList';
import { characters } from './data/characters';
import './App.css';

function App() {
  const [nameFilter, setNameFilter] = useState('');
  const [schoolFilter, setSchoolFilter] = useState('');

  const filteredCharacters = useMemo(() => {
    return characters.filter((character) => {
      const matchesName = character.name
        .toLowerCase()
        .includes(nameFilter.toLowerCase());
      const matchesSchool = !schoolFilter || character.house === schoolFilter;
      return matchesName && matchesSchool;
    });
  }, [nameFilter, schoolFilter]);

  return (
    <div className="app">
      <div className="container">
        <Header />
        <Filters
          nameFilter={nameFilter}
          schoolFilter={schoolFilter}
          onNameChange={setNameFilter}
          onSchoolChange={setSchoolFilter}
        />
        <CharacterList characters={filteredCharacters} />
      </div>
    </div>
  );
}

export default App;