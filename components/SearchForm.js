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
        className="border rounded p-2 flex-grow"
      />
      <button type="submit" className="bg-emerald-500 text-white px-4 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
