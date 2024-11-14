"use client"
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import AnimeList from '@/components/AnimeList';
import ToggleMode from '@/components/ToggleMode';
import { useAnimeStore } from '@/store/animeStore';
import ErrPage from '@/components/ErrPage';

const Home = () => {
  const { animes, fetchAnimes, hasMore, error, loading } = useAnimeStore();

  useEffect(() => {
    fetchAnimes();
  }, [fetchAnimes]);

  return (
    <div>
      <Navbar />
      <ToggleMode />
      {!loading && animes.length === 0 && query && (
  <div className="text-center text-gray-500 mt-4">No results found for "{query}".</div>
)}
      {error ? (
        <ErrPage />
      ) : (
        <AnimeList animes={animes} fetchMore={fetchAnimes} hasMore={hasMore} />
      )}
    </div>
  );
};

export default Home;
