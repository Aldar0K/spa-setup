import webpack from "webpack";

import { buildCssLoader } from './loaders';
import { BuildOptions } from "./types";

export const buildLoaders = ({
  isDev,
}: BuildOptions): webpack.RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader: webpack.RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const babelLoader: webpack.RuleSetRule = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [],
      },
    },
  };

  const typescriptLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = buildCssLoader(isDev);

  return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader];
};
