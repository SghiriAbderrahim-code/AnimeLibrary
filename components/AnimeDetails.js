"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SpinnerLoading from './SpinnerLoading';
import { ChevronDoubleUpIcon, ChevronDoubleDownIcon } from '@heroicons/react/24/solid'

const AnimeDetails = ({ id }) => {
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    const fetchTopAnime = async () => {
      try {
        const { data } = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
        setAnime(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching anime details:', error);
        setLoading(false);
      }
    };

    fetchTopAnime();
  }, [id]);

  if (loading) return <SpinnerLoading />;
  if (!anime) return <p className="text-center">Anime not found.</p>;

  return (
    <div className="flex flex-col items-center mb-4 overflow-y-auto">

      <div className="w-full grid grid-cols-3">
        <div className="border-[--second-gray] aspect-[1/1.5] h-4/5 place-self-center">
          <Image
            src={anime.images.webp.large_image_url}
            width={225}
            height={385}
            alt={anime.title || 'Anime Image'}
            className="object-fill w-full h-full rounded"
            placeholder="blur"
            blurDataURL={anime.images.webp.small_image_url}

          />
        </div>
        <div className="col-span-2 p-1 self-center text-[--first-gray]">
          <p className="lg:text-4xl text-[--text-color] text-xl mb-2">{anime.title}</p>
          <p  >
            {anime.status || '???? ???'}
          </p>
          <p  >{`${anime.season || '????'} - ${anime.aired.prop.from.year || '????'
            }`}</p>
          <p  >{`${anime.type || '???'
            } - ${anime.episodes || '??'} episodes - ${anime.rating?.split(' - ')[1] || '????'
            }`}</p>
        </div>
      </div>


      <div className="w-11/12 bg-[--second-gray] rounded">
        <div
          onClick={() => setSlide(!slide)}
          className={`mb-3 text-sm text-[--text-color] w-full p-4 pb-4 ${slide ? '' : 'lg:h-20 h-16'
            } overflow-hidden cursor-pointer relative lg:text-lg`}
        >
          {anime.synopsis}
          <div className="absolute bottom-0 left-0 w-full flex justify-center text-[--text-color] bg-gradient-to-t from-[--second-gray] pt-2">
            {slide ? <ChevronDoubleUpIcon aria-hidden="true" className=" size-4" /> : <ChevronDoubleDownIcon aria-hidden="true" className=" size-4" />}
          </div>
        </div>


        <div className={`flex gap-2 ${slide ? 'flex-wrap' : 'overflow-auto'} p-2`}>
          {[
            ...anime.genres || [],
            ...anime.explicit_genres || [],
            ...anime.demographics || [],
            ...anime.themes || [],
          ].map((item, i) => (
            <div
              key={i}
              className=" text-[--bg-color] bg-[--first-gray] px-4 rounded-full font-semibold lg:text-lg text-sm whitespace-nowrap "
            >
              {item.name}
            </div>
          ))}
        </div>


        <div className="grid grid-cols-2 p-4 gap-4">
          {[
            { name: 'Source', value: anime.source || '????' },
            { name: 'Duration', value: anime.duration || '?? ???' },
            {
              name: 'Started in',
              value: anime.aired?.from?.split('T')[0] || '????-??-??',
            },
            {
              name: 'Ended in',
              value: anime.aired?.to?.split('T')[0] || '????-??-??',
            },
            {
              name: 'Studio',
              value: anime.studios[0]?.name || '?????',
            },
            { name: 'Episodes', value: anime.episodes || '????' },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-[--text-color] lg:text-xl text-sm font-semibold">{item.name}:</p>
              <p className={`text-[--first-gray] lg:text-lg text-xs font-semibold  `}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {(anime.trailer.embed_url) ?
        <div className="w-full font-bold text-lg p-4 mt-4">
          <h1>Trailer:</h1>
          <div className="mx-auto mt-8 rounded border aspect-[16/9] lg:w-1/2 w-4/5 overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={anime.trailer.embed_url || ''}
              title={`${anime.title} Trailer`}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        : null}




    </div>
  );
};

export default AnimeDetails;
