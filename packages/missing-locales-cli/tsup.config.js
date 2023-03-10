/** @type {import("tsup").Options} */
export const tsup = {
  entryPoints: ["src/index.ts", "src/core/index.ts"],
  format: ["esm", "cjs"],
  sourcemap: true,
  splitting: false,
  clean: true,
  target: "node14",
};
