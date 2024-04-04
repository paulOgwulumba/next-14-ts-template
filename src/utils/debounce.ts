export const debounce = (func: any, delay = 100) => {
  let timeout: NodeJS.Timeout;

  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
