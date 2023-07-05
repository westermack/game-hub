import useData from "./useData";

//Import this instead when using the hardcoded Genres
//import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () => useData<Genre>("/genres");

//Use this instead when using the harcoded Genres in ../data/genres.ts
//const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
