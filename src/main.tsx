import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/routes/App";

import { CartProvider } from "@/contexts/CartContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/libs/react-query";

import "@/style/global.css";
import { MovieProvider } from "./contexts/MovieContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<MovieProvider>
				<CartProvider items={[]}>
					<App />
				</CartProvider>
			</MovieProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
