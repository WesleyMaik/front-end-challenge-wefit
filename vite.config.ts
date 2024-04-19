import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react-swc";

const root = path.resolve(__dirname, "src");
const outDir = path.resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
	base: "/front-end-challenge-wefit/",
	plugins: [react()],
	resolve: {
		alias: [{ find: "@", replacement: root }],
	},
	build: {
		outDir,
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: path.resolve("index.html"),
				cart: path.resolve("cart", "index.html"),
			},
		},
	},
});
