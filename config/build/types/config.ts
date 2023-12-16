export type BuildOptions = {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
};

export type BuildEnv = {
  mode: BuildMode;
  port: number;
};

export type BuildMode = "production" | "development";

export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
  meta: string;
  buildMeta: string;
};
