import { fileURLToPath, URL } from "url";
import friendlyTypeImports from "rollup-plugin-friendly-type-imports";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default ({ mode }) => {
  const plugins =
    mode === "development"
      ? [vue({ reactivityTransform: true }), friendlyTypeImports()]
      : [vue({ reactivityTransform: true })];

  return defineConfig({
    envDir: "./env",
    envPrefix: "APP",
    plugins,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "~": fileURLToPath(new URL(".", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/variables.scss";`,
        },
      },
    },
  });
};
