import Image from 'next/image';

const AnimeItem = ({ anime }) => (
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow-md">
    <Image 
      src={anime.images.jpg.image_url} 
      alt={`${anime.title} cover image`} 
      width={200}   
      height={300}   
      className="rounded mb-4"  
      loading="lazy"     
    />
    <h2 className="text-lg font-semibold">{anime.title}</h2>
    <p>{anime.type}</p>
  </div>
);

export default AnimeItem;
