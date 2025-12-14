import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PlanetDetails() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${id}/`)
      .then(res => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then(data => setPlanet(data))
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

  if (!planet) return <p>Loading...</p>;

  return (
    <div>
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Population: {planet.population}</p>
      <p>Diameter: {planet.diameter}</p>
    </div>
  );
}

export default PlanetDetails;
