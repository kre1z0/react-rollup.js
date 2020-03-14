import filesize from "rollup-plugin-filesize";
import { terser } from "rollup-plugin-terser";

import baseConfig from "./rollup.config.base";
import { dist, name } from "./rollup.config.dev";
import copy from "rollup-plugin-copy";

export default [
  {
    ...baseConfig,
    input: "./src/index.js",
    output: [
      // umd with compress version
      {
        file: `${dist}${name}.js`,
        format: "umd",
        name
      }
    ],
    plugins: [
      ...baseConfig.plugins,
      copy({
        targets: [{ src: "./src/index.html", dest: dist }]
      }),
      terser(),
      filesize()
    ]
  }
];
