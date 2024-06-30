import { useState, useEffect } from 'react';

type DebouncedValue<T> = (value: T, delay: number) => T;

export const useDebounce: DebouncedValue<string> = <T extends string>(
  value: T,
  delay: number,
) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debouncedValue;
};
