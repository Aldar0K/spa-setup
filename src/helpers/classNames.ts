type Mods = Record<string, boolean | string>;

export const classNames = (
  mainClass: string,
  mods: Mods,
  additionalClasses: string[]
): string => {
  return [
    mainClass,
    ...Object.entries(mods)
      .filter(([_, condition]) => !!condition)
      .map(([className, _]) => className),
    ...additionalClasses,
  ].join(" ");
};
