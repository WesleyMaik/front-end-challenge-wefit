import { createContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type MovieContextProps = {
	items: Product[];
	isLoading: boolean;
	error: Error | null;
};

export type MovieProviderProps = {
	children: ReactNode;
};

export type MoviesAPIResponse = {
	products: Product[];
};

export type Product = {
	id: number;
	title: string;
	price: number;
	image: string;
};

const MovieContext = createContext({} as MovieContextProps);

const MOVIES_API_URL = import.meta.env.VITE_MOVIES_API;

function MovieProvider({ children }: MovieProviderProps) {
	const { data, isLoading, error } = useQuery<MoviesAPIResponse>({
		initialData: { products: [] },
		queryKey: ["movies"],
		queryFn: async () =>
			(
				await axios.get(MOVIES_API_URL, {
					method: "GET",
				})
			).data,
	});

	const items = data.products;

	return (
		<MovieContext.Provider
			value={{
				items,
				isLoading,
				error,
			}}
		>
			{children}
		</MovieContext.Provider>
	);
}

export { MovieContext, MovieProvider };
