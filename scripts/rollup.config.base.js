import alias from "rollup-plugin-alias";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  plugins: [
    alias({
      resolve: [".js", ".jsx"]
    }),
    peerDepsExternal(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
    }),
    resolve(),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: "node_modules/**",
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        "react-is": ["isElement", "isValidElementType"],
        react: [
          "useContext",
          "useState",
          "useMemo",
          "useEffect",
          "useRef",
          "createElement",
          "useDebugValue",
          "Component",
          "Children",
          "useCallback",
          "isValidElement",
          "Fragment",
          "useLayoutEffect",
          "PureComponent"
        ],
        "react-dom": ["render", "createPortal"]
      }
    }),
    babel({
      runtimeHelpers: true,
      exclude: "node_modules/**" // only transpile our source code
    })
  ]
};
