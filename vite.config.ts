import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    root: ".",
    publicDir: "images",
    envDir: "./env",
    plugins: [react(), tsconfigPaths(), splitVendorChunkPlugin()],
    define: {
      "process.env": process.env,
    },
    esbuild: {
      jsxFactory: "jsx",
    },
    build: {
      chunkSizeWarningLimit: 500,
      minify: true,
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
        },
      },
    },
    resolve: {
      alias: {
        process: "process/browser",
        stream: "stream-browserify",
        zlib: "browserify-zlib",
        util: "util",
      },
    },
  });
};
