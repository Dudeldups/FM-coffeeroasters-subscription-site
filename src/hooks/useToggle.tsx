import { useState } from "react";

export default function useToggle(
  defaultValue: boolean
): [boolean, () => void] {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = () => {
    setValue(currentValue => !currentValue);
  };

  return [value, toggleValue];
}
