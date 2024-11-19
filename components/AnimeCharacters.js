"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterItem from './CharacterItem';
import SpinnerLoading from './SpinnerLoading';

const AnimeCharacters = ({ id }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const { data } = await axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`);
        setCharacters(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching characters:', error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [id]);

  if (loading) return <SpinnerLoading />;
  if (!characters.length) return <p className="text-center">No characters found.</p>;

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
      {characters.map((char) => (
        <CharacterItem key={char.character.mal_id} item={char} />
      ))}
    </div>
  );
};

export default AnimeCharacters;
