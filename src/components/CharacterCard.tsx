import React from 'react';
import type { Character } from '../types';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="character-card">
      <div className="character-card__image-wrapper">
        <img
          src={character.image}
          alt={character.name}
          className="character-card__image"
        />
      </div>
      <div className="character-card__content">
        <h3 className="character-card__name">{character.name}</h3>
        <p className="character-card__info">Actor: {character.actor}</p>
        <p className="character-card__info">Gender: {character.gender}</p>
        <p className="character-card__info">House: {character.house}</p>
        <p className="character-card__info">Wand core: {character.wandCore}</p>
        <p className="character-card__info">Alive: {character.alive ? 'yes' : 'no'}</p>
      </div>
    </div>
  );
};

export default CharacterCard;