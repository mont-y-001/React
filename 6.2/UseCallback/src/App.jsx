import { useState, useCallback, memo } from "react";

function App() {
  const [count, setCount] = useState(0);

  const inputFunction = useCallback(() => {
    console.log("Hi there");
  }, []);

  return (
    <div>
      <ButtonComponent inputFunction={inputFunction} />

      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
    </div>
  );
}

const ButtonComponent = memo(({ inputFunction })=> {   //if i don't use usememo then then on clicking count then it rerendered every time but i use usememo then it doesn't rerender on clicking button
  console.log("Child Rendered");

  return (
    <div>
      <button onClick={inputFunction}>
        Button Clicked
      </button>
    </div>
  );
});

export default App;