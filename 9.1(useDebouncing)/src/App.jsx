import { useEffect, useState } from "react";

function useDebouncing(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [value, timeout]);

  return debouncedValue;
}

function App() {
  const [value, setValue] = useState("");

  const debouncedValue = useDebouncing(value, 500);

  return (
    <div>
      <p>Original Value: {value}</p>
      <p>Debounced Value: {debouncedValue}</p>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default App;
