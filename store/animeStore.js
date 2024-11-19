import {create} from 'zustand';
import { fetchAnime } from '@/utils/fetchAnime';

export const useAnimeStore = create((set,get) => ({
  animes: [],
  page: 1,
  hasMore: true,
  error: false,
  errormessage:{
    status: 404,
    text: 'not fond'
  },
  loading: true,

  fetchAnimes: async () => {
    try {
      set((state) => ({
        loading: true
      }));
      const { page } = get(); 
      const response = await fetchAnime(page);
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
        errormessage:{
          status: error.response.status,
          text: error.response.statusText
        }
      }));
      console.error(`${error.response.status} :: ${error.response.statusText}`);
    }
  }
}));

