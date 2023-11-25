import path from "path";
import { Configuration } from "webpack";

import { buildCssLoader, buildSvgLoader } from "../build/loaders";
import { BuildPaths } from '../build/types';

export default ({config}: {config: Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.modules?.push(paths.src);

  config.resolve?.extensions?.push('.ts', '.tsx');

  if (config.module?.rules) {
    config.module.rules = config.module.rules.map((rule: any) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });
  }
  config.module?.rules?.push(buildSvgLoader());

  config.module?.rules?.push(buildCssLoader(true));

  return config;
}
