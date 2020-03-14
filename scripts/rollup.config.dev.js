import baseConfig from "./rollup.config.base";
import serve from "rollup-plugin-serve";
import copy from "rollup-plugin-copy";
import livereload from "rollup-plugin-livereload";

export const dist = "./dist/";

export const name = "bundle";

export default {
  ...baseConfig,
  input: "./src/index.js",
  output: [
    {
      file: `${dist}${name}.js`,
      format: "umd",
      name,
      sourcemap: true
    }
  ],
  plugins: [
    ...baseConfig.plugins,
    copy({
      targets: [{ src: "./src/index.html", dest: dist }]
    }),
    livereload({ watch: dist }),
    serve({
      port: 4444,
      contentBase: [dist],
      open: true,
      historyApiFallback: true
    })
  ]
};
