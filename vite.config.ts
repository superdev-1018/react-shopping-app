import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
// import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
// import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  plugins: [
    react({
      babel: {
        plugins: ["@babel/plugin-syntax-import-assertions"],
      },
    }),
    tsconfigPaths(),
  ],
  
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      plugins: [
        // NodeGlobalsPolyfillPlugin({
        //   buffer: true,
        //   process: true,
        // }),
        // NodeModulesPolyfillPlugin(),
      ],
    },
  },
  build: {
    rollupOptions: {
      plugins: [],
    },
  },
  esbuild: {
    supported: {
      "top-level-await": true,
    },
  },
});
