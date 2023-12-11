/**
 * クラス名を結合し文字列として返す。
 *
 * @param classNames クラス名
 * @returns 結合後のクラス名
 */
export const join = (...classNames: (string | undefined)[]): string => {
  return classNames
    .filter((name) => name !== undefined && name !== "")
    .join(" ");
};

/**
 * alias of `join()`
 */
export const j = join;
