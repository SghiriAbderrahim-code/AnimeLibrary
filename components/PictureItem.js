"use client"

import Image from 'next/image';
import useDownloader from "react-use-downloader";
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'

const PictureItem = ({ picture, index }) => {

  const { download } = useDownloader();

  const fileUrl = picture.jpg.large_image_url;
  const filename = "AnimeARchave_Picture.jpg";
  return (
    <div

      className=" border-[--second-gray] aspect-[1/1.5] rounded overflow-hidden relative bg-[--second-gray] "
      style={{ boxShadow: '0 0 5px var(--shadow)' }}
    >
      <Image

        src={
          picture.webp.image_url
        }
        width={225}
        height={385}
        alt="picture"
        className=" object-fill w-full h-full"
        placeholder="blur"
        blurDataURL={picture.webp.small_image_url}
        priority={index < 6}
      />
      <div className="z-20 absolute bottom-1 right-2">
        <button onClick={() => download(fileUrl, filename)} className="bg-[--bg-color] p-1 rounded mt-2 font-semibold hover:bg-[--theme-color] text-[--text-color] hover:text-[--bg-color] hover:fill-[--bg-color]">
          <ArrowDownTrayIcon aria-hidden="true" className=" size-4" />
        </button>
      </div>
    </div>
  )
};

export default PictureItem;
