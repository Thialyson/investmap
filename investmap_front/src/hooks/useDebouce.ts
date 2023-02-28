import { useRef } from "react";

export default function useDebounce(func: any, delay: any) {
  const timeoutRef: any = useRef(null);

  function debouncedFunc(...args: any) {
    window.clearTimeout(timeoutRef.current || undefined);
    timeoutRef.current = window.setTimeout(() => {
      func(...args);
    }, delay);
  }

  return debouncedFunc;
}
