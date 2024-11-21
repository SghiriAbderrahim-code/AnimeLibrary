"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import PictureItem from './PictureItem';
import SpinnerLoading from './SpinnerLoading';

const AnimePictures = ({ id }) => {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const { data } = await axios.get(`https://api.jikan.moe/v4/anime/${id}/pictures`);
        setPictures(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pictures:', error);
        setLoading(false);
      }
    };

    fetchPictures();
  }, [id]);

  if (loading) return <SpinnerLoading />;
  if (!pictures.length) return <p className="text-center">No pictures found.</p>;

  return (
    <div className="grid lg:grid-cols-7  sm:grid-cols-5 grid-cols-3 p-2 gap-2">
      {pictures.map((pic, i) => (
        <PictureItem key={i} picture={pic} index={i} />
      ))}

    </div>
  );
};

export default AnimePictures;
