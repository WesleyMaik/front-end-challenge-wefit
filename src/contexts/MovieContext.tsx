import { createContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { sleep } from "@/utils/sleep";

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
	async function queryFunction() {
		const response = await axios.get(MOVIES_API_URL, {
			method: "GET",
		});

		await sleep(1000);

		return response.data;
	}

	const { data, isLoading, error, isFetching } = useQuery<MoviesAPIResponse>({
		initialData: { products: [] },
		queryKey: ["movies"],
		queryFn: queryFunction,
	});

	const items = data.products;

	return (
		<MovieContext.Provider
			value={{
				items,
				isLoading: isLoading || isFetching,
				error,
			}}
		>
			{children}
		</MovieContext.Provider>
	);
}

export { MovieContext, MovieProvider };
