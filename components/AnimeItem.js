const AnimeItem = ({ anime }) => (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow-md">
      <img src={anime.images.jpg.image_url} alt={anime.title} className="rounded mb-4" />
      <h2 className="text-lg font-semibold">{anime.title}</h2>
      <p>{anime.type}</p>
    </div>
  );
  
  export default AnimeItem;
  