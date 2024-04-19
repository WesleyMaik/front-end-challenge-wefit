import { MovieContext } from "@/contexts/MovieContext";
import { useContext } from "react";

const useMovies = () => useContext(MovieContext);

export { useMovies };
