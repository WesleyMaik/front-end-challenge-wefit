import React from "react";
import ReactDOM from "react-dom/client";

import { CartProvider } from "@/contexts/CartContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/libs/react-query";
import { MovieProvider } from "@/contexts/MovieContext";

import Router from "@/routes/Router";

import "@/style/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<MovieProvider>
				<CartProvider items={[]}>
					<Router />
				</CartProvider>
			</MovieProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
