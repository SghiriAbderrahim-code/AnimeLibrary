import {create} from 'zustand';
import { fetchAnime } from '@/utils/fetchAnime';

export const useAnimeStore = create((set) => ({
  animes: [],
  hasMore: true,
  error: false,
  loading: true,
  fetchAnimes: async () => {
    try {
      set((state) => ({
        loading: true
      }));
      const newAnimes = await fetchAnime();
      set((state) => ({
        animes: [...state.animes, ...newAnimes],
        hasMore: newAnimes.length > 0,
        error: false,
        loading: false
      }));
    } catch (error) {
      set({ error: true });
      console.error("Error fetching anime:", error);
    }
  }
}));

