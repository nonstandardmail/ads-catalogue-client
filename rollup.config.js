import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

import pkg from "./package.json";

export default [
  // browser-friendly UMD build
  {
    input: "index.js",
    output: {
      name: "ads-catalogue-client",
      file: pkg.browser,
      format: "umd"
    },
    plugins: [
      json(),
      resolve({
        jsnext: true,
        main: true,
        browser: true,
        preferBuiltins: false
      }),
      commonjs(),
      babel({
        runtimeHelpers: true,
        exclude: "node_modules/**" // only transpile our source code
      })
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "index.js",
    external: ["ms"],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ]
  }
];
