import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

import pkg from "./package.json";

export default {
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
      exclude: "node_modules/**"
    })
  ]
};