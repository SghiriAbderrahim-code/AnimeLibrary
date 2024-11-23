"use client"
import { useEffect } from 'react';

import AnimeList from '@/components/AnimeList';
import { useAnimeStore } from '@/store/animeStore';
import ErrPage from '@/components/ErrPage';

const Home = () => {
  const { animes, fetchTopAnimes, hasMore, error, loading } = useAnimeStore();

  useEffect(() => {
    fetchTopAnimes();
  }, [fetchTopAnimes]);

  return (
    <div>

      {!loading && animes.length === 0 && query && (
        <div className="text-center text-gray-500 mt-4">No results found for "{query}".</div>
      )}
      {error ? (
        <ErrPage />
      ) : (
        <AnimeList animes={animes} fetchMore={fetchTopAnimes} hasMore={hasMore} />
      )}
    </div>
  );
};

export default Home;
