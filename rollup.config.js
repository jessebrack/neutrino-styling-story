import typescript from "@rollup/plugin-typescript";

export default {
  input: "./main.ts",
  output: {
    dir: "dist",
    format: "module"
  },
  plugins: [typescript()]
};
