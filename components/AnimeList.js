"use client"
import InfiniteScroll from 'react-infinite-scroll-component';
import AnimeItem from './AnimeItem';
import SpinnerLoading from './SpinnerLoading';

import { useState, useEffect } from 'react';

const AnimeList = ({ animes, fetchMore, hasMore }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div>
      <InfiniteScroll
        dataLength={animes.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={<SpinnerLoading />}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 pt-20">
          {animes.map((anime,i) => (
            <AnimeItem key={anime.mal_id} anime={anime} />
          ))}
        </div>
      </InfiniteScroll>
      {showButton && (
        <button onClick={scrollToTop} className="fixed bottom-4 right-4 p-3 bg-emerald-500 text-white rounded-full">
          ↑ Top
        </button>
      )}
    </div>
  );
};


export default AnimeList;
