import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/main.ts",
  output: {
    dir: "dist",
    format: "module",
    sourcemap: true
  },
  plugins: [typescript()]
};
