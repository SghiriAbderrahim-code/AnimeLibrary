import Image from 'next/image';
import Link from 'next/link'
import { StarIcon } from '@heroicons/react/24/solid'

const AnimeItem = ({ anime }) => (
  <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id} aria-label={`${anime.title}`}>
  <div
    className="relative border-[--second-gray] aspect-[1/1.5] rounded overflow-hidden bg-[--second-gray]  hover:opacity-75"
    style={{ boxShadow: '0 0 5px black' }}
  >
    <div className="text-white absolute font-bold text-[.5rem] tracking-widest top-1 left-1 rounded-md py px-2 z-30">
      {anime.type}
    </div>

    <Image
      
      src={anime.images.jpg.image_url}
      fill={true}
      alt={anime.title}
      sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
      className="object-cover"
    />

    <div className="lg:text-[1.2vw] sm:text-[2vw] text-[3vw] grid grid-cols-2 z-10 absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-black to-[rgba(0,0,0,0.3)]">
      <p className="text-white col-span-2 [text-shadow:_0_0_10px_black] font-medium text-ellipsis whitespace-nowrap overflow-hidden text-center px-1">
        {anime.title}
      </p>

      <p className="font-semibold p-1 items-center flex gap-1 fill-yellow-400 text-yellow-400">
      <StarIcon aria-hidden="true" className=" size-4" />
        {anime.score}
      </p>
      <p className="text-white font-semibold justify-self-end p-1 place-self-center">
        {anime.aired.prop.from?.year || 'N/A'}
      </p>
    </div>
  </div>
</Link>
);

export default AnimeItem;
