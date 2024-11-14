import {create} from 'zustand';
import { fetchAnime } from '@/utils/fetchAnime';

export const useAnimeStore = create((set,get) => ({
  animes: [],
  page: 1,
  hasMore: true,
  error: false,
  loading: true,
  fetchAnimes: async () => {
    try {
      set((state) => ({
        loading: true
      }));
      const { page } = get(); 
      const newAnimes = await fetchAnime(page);
      set((state) => ({
        animes: [...state.animes, ...newAnimes],
        hasMore: newAnimes.length > 0,
        error: false,
        loading: false,
        page: state.page +1
      }));
    } catch (error) {
      set({ error: true });
      console.error("Error fetching anime:", error);
    }
  }
}));

