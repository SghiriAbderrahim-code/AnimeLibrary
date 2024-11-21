import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/solid'
const CharacterItem = ({ item, index }) => (
  <div
    className=" border-[--second-gray] aspect-[1/1.5] rounded overflow-hidden relative bg-[--second-gray] "
    style={{ boxShadow: '0 0 5px var(--shadow)' }}
  >
    <Image

      src={
        item.character.images.webp.image_url
      }
      width={225}
      height={385}
      alt={item.character.name}
      className=" object-fill w-full h-full"
      placeholder="blur"
      blurDataURL={item.character.images.webp.small_image_url}
      priority={index < 6}
    />

    <div className="text-white lg:text-[1vw]  sm:text-[1.5vw] text-[2.2vw] grid grid-cols-2 z-10 absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-black to-[rgba(0,0,0,0.3)]">
      <p className="col-span-2 [text-shadow:_0_0_10px_black]  font-medium  text-ellipsis whitespace-nowrap overflow-x-hidden text-center px-1">
        {item.character.name}
      </p>


      <p className=" font-semibold p-1 items-center flex gap-1 fill-[var(--theme-color)] text-[var(--theme-color)] ">
        <HeartIcon aria-hidden="true" className=" size-4" />
        {item.favorites}
      </p>
      <p className=' font-semibold justify-self-end p-1 place-self-center'>{item.role}</p>


    </div>
  </div>
);

export default CharacterItem;
