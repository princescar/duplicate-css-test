import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
    // cssTarget: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    cssMinify: false,
  },
});
