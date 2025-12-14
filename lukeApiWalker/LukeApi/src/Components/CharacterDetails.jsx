import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CharacterDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then(res => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then(data => {
        setCharacter(data);
        fetch(data.homeworld)
          .then(res => res.json())
          .then(hw => setHomeworld(hw));
      })
      .catch(() => setError(true));
  }, [id]);

  if (error) {
    return (
      <div>
        <h1>These aren't the droids you're looking for</h1>
        <img 
          src="https://media.giphy.com/media/14fXwD2QbAh6g/giphy.gif" 
          alt="Obi-Wan Kenobi" 
          style={{ width: '300px' }}
        />
      </div>
    );
  }

  if (!character) return <p>Loading...</p>;

  // Function to navigate to planet details
  const goToHomeworld = () => {
    if (homeworld) {
      const planetId = homeworld.url.split('/')[5];
      navigate(`/planet/${planetId}`);
    }
  };

  return (
    <div>
      <h2>{character.name}</h2>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Birth Year: {character.birth_year}</p>
      {homeworld && (
        <p style={{ cursor: 'pointer', color: 'blue' }} onClick={goToHomeworld}>
          Homeworld: {homeworld.name} (click to view)
        </p>
      )}
    </div>
  );
}

export default CharacterDetails;
