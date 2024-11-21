import {create} from 'zustand';
import { fetchTopAnime, fetchSearchAnime } from '@/utils/fetchAnime';

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
  query: '',
  setQuery: (query) => set({ query }),
  resetStor: ()=>{
    set(() => ({
      animes: [],
      hasMore: true,
      error: false,
      loading: true,
      query: '',
      page: 1
    }));
  },
  fetchData: async (fetchType) => {
    try {
      set(() => ({
        loading: true
      }));
      const { page, query } = get();
      const fetchFunction = fetchType === 'search' ? fetchSearchAnime(page, query) : fetchTopAnime(page);
      const response = await fetchFunction;
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

