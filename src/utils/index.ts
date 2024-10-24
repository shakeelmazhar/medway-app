const capitalizeFirstLetter = (str: string) => {
  return str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const isNumber = (n: string) =>
  /^-?\d{1,3}(,\d{3})*(\.\d+)?([eE][-+]?\d+)?$/.test(n);

const isUpperCase = (str: string) => str === str.toUpperCase();

const commaSeparatedNumber = (number: number | string): string => {
  if (number) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return "0";
};

const formatNumberWithCommas = (value: number | string): string => {
  if (value !== null && value !== undefined) {
    // accept case where number is 0
    if (typeof value === "string") {
      return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return value.toLocaleString();
  }
  return "";
};

export {
  capitalizeFirstLetter,
  commaSeparatedNumber,
  formatNumberWithCommas,
  generateRandomNumber,
  isNumber,
  isUpperCase,
};
