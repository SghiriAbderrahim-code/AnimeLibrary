import {create} from 'zustand';
import { fetchTopAnime, fetchSearchAnime } from '@/utils/fetchAnime';

export const useAnimeStore = create((set,get) => ({
  animes: [],
  page: 1,
  hasMore: true,
  error: false,
  loading: true,
  query: '',
  setQuery: (query) => set({ query }),
  resetStor: ()=>{
    set(() => ({
      animes: [],
      hasMore: true,
      error: false,
      query: '',
      page: 1
    }));
  },
  fetchTopAnimes: async () => {
    try {
      set(() => ({
        loading: true
      }));
      const { page } = get();
      
      const response = await fetchTopAnime(page);
      set((state) => ({
        animes: [...state.animes, ...response.data],
        hasMore: response.pagination.has_next_page,
        error: false,
        loading: false,
        page: state.page +1
      }));
    } catch (error) {
      set((state)=>({
        error: true,
        
      }));
      console.log(error);
    }
  },
  fetchSearchAnimes: async () => {
    try {
      set(() => ({
        loading: true
      }));
      const { page,query } = get();
      
      const response = await fetchSearchAnime(page,query);
      set((state) => ({
        animes: [...state.animes, ...response.data],
        hasMore: response.pagination.has_next_page,
        error: false,
        loading: false,
        page: state.page +1
      }));
    } catch (error) {
      set((state)=>({
        error: true,
        
      }));
      console.log(error);
    }
  }
}));

