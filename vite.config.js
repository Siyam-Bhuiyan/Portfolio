import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500, // Increase limit further
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          three: ["three"],
          "react-three": ["@react-three/fiber", "@react-three/drei"],
          utils: [
            "framer-motion",
            "maath",
            "react-router-dom",
            "react-tilt",
            "react-vertical-timeline-component",
          ],
        },
        assetFileNames: (assetInfo) => {
          if (
            assetInfo.name.endsWith(".png") ||
            assetInfo.name.endsWith(".jpg")
          ) {
            return "assets/images/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
    assetsInlineLimit: 4096, // 4kb
    target: "esnext",
    minify: "esbuild",
  },
});
