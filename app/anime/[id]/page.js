"use client"

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import AnimeDetails from '@/components/AnimeDetails';
import AnimeCharacters from '@/components/AnimeCharacters';
import AnimePictures from '@/components/AnimePictures';
import SpinnerLoading from '@/components/SpinnerLoading';

const AnimePage = () => {
  const path = usePathname();

  const tabs = ['details', 'characters', 'pictures'];


  const id = path.split('/')[2];
  const [activeTab, setActiveTab] = useState('details');

  if (!id) {
    return <SpinnerLoading />;
  }
  return (
    <div className="p-2 ">
      <div className="flex sticky top-16 justify-evenly  border-[--second-gray] bg-[--bg-color] mb-2 border-b z-50 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-bold uppercase ${activeTab === tab ? 'border-b-2 border-[--theme-color] text-[--theme-color]' : 'text-[--text-color] border-[--text-color]'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}

      </div>

      {activeTab === 'details' && <AnimeDetails id={id} />}
      {activeTab === 'characters' && <AnimeCharacters id={id} />}
      {activeTab === 'pictures' && <AnimePictures id={id} />}
    </div>
  );
};

export default AnimePage;





