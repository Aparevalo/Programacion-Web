import React, { useState, useEffect } from 'react';

const CharacterCard = () => {
  const [characterName, setCharacterName] = useState('');
  const [characterImage, setCharacterImage] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1')
      .then(response => response.json())
      .then(data => {
        setCharacterName(data.name);
        setCharacterImage(data.image);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={characterImage} className="card-img-top" alt={characterName} />
      <div className="card-body">
        <h5 className="card-title">{characterName}</h5>
      </div>
    </div>
  );
};
export default CharacterCard;
