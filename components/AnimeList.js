"use client"
import InfiniteScroll from 'react-infinite-scroll-component';
import AnimeItem from './AnimeItem';
import SpinnerLoading from './SpinnerLoading';
import { ArrowUpIcon } from '@heroicons/react/24/outline'

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 ">
          {animes.map((anime,i) => (
            <AnimeItem key={`${anime.mal_id}-${i}`} anime={anime} />
          ))}
        </div>
      </InfiniteScroll>
      {showButton && (
        <button onClick={scrollToTop} className="fixed z-50 bottom-4 right-4 p-2 bg-[--bg-color] text-[--text-color] border-[--text-color] border-2 hover:text-[--theme-color] hover:border-[--theme-color] rounded-full">
          <span className="absolute -inset-1.5" />
      <span className="sr-only">View notifications</span>
      <ArrowUpIcon aria-hidden="true" className=" size-6" /> 
        </button>
      )}
    </div>
  );
};


export default AnimeList;
