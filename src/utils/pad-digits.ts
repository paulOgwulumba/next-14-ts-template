export const padDigits = (number: number, digits: number): string => {
  return Array(Math.max(digits - String(number).length + 1, 0)).join('0') + number;
};
