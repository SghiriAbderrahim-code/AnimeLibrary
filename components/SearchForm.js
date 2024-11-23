"use client"
import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 p-4">
      <input
        type="text"
        placeholder="Search Anime"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded border-[--second-color] p-2 flex-grow bg-[--bg-color] text-[--text-color]"
      />
      <button type="submit" className="bg-[--theme-color] text-white px-4 rounded font-bold">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
