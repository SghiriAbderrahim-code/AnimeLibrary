"use client"
import { useEffect } from 'react';
import SearchForm from '@/components/SearchForm';
import AnimeList from '@/components/AnimeList';
import { useAnimeStore } from '@/store/animeStore';
import ErrPage from '@/components/ErrPage';

const Home = () => {
    const { animes, fetchData, hasMore, error, loading, setQuery, resetStor } = useAnimeStore();

    const onSearch = (query = '') => {
        if (query) {
            setQuery(query);
            fetchData('search');
        }
    }

    useEffect(() => {
        resetStor();
        onSearch('');
        fetchData('search');
    }, [fetchData, setQuery]);

    return (
        <div>
            <SearchForm onSearch={onSearch} />
            {!loading && animes.length === 0 && query && (
        <div className="text-center text-gray-500 mt-4">No results found for "{query}".</div>
      )}
      {error ? (
        <ErrPage />
      ) : (
        <AnimeList animes={animes} fetchMore={fetchData('search')} hasMore={hasMore} />
      )}
        </div>
    );
};

export default Home;
