export function getDecimals(value: number): number {
  const numberStr = value.toString();

  if (/^-?[0-9]+$/.test(numberStr)) {
    return 0;
  }

  return +numberStr.substr(numberStr.indexOf('.') + 1);
}
