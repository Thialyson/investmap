import React, { useCallback, useState } from "react";
import useDebounce from "../../hooks/useDebouce";

type InputProps = {
  value: string;
  onChange: (action: string) => void;
};

export const SearchInput = ({ value, onChange }: InputProps) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 2000);

  const handleChange = useCallback(
    (event) => {
      event.preventDefault();
      console.log("event.target.value", event.target.value);
      debouncedChange(event.target.value);
      setDisplayValue(event.target.value);
    },
    [value]
  );

  return <input type="text" value={displayValue} onChange={handleChange} />;
};
