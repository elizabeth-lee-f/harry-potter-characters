import React from 'react';
import { houses } from '../data/characters';

interface FiltersProps {
  nameFilter: string;
  schoolFilter: string;
  onNameChange: (value: string) => void;
  onSchoolChange: (value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  nameFilter,
  schoolFilter,
  onNameChange,
  onSchoolChange
}) => {
  return (
    <div className="filters">
      <div className="filters__group">
        <label className="filters__label" htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          className="filters__input"
          placeholder="Hermione"
          value={nameFilter}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </div>
      <div className="filters__group">
        <label className="filters__label" htmlFor="school">School</label>
        <select
          id="school"
          className="filters__select"
          value={schoolFilter}
          onChange={(e) => onSchoolChange(e.target.value)}
        >
          <option value="">Choose one</option>
          {houses.map((house) => (
            <option key={house} value={house}>{house}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
