import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths"; // Added vite-tsconfig-paths import

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()], // Updated to include tsconfigPaths plugin
	server: {
		host: "0.0.0.0",
	},
});
