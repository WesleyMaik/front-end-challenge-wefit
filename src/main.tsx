import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/routes/App";
import "@/style/global.css";
import { CartProvider } from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<CartProvider items={[]}>
			<App />
		</CartProvider>
	</React.StrictMode>
);
