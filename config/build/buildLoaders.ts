import webpack from 'webpack';

import { buildCssLoader } from './loaders';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { BuildOptions } from './types';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  };

  const fileLoader: webpack.RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  const babelLoader: webpack.RuleSetRule = buildBabelLoader(options);

  const typescriptLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const cssLoader = buildCssLoader(isDev);

  return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader];
};
