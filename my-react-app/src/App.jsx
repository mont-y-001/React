import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    // Render Child Component
    <div>
      <CustomButton count={count} setCount={setCount} />
    </div>
  );
}

// Component
function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  return (
    <button onClick={onClickHandler}>
      Counter {props.count}
    </button>
  );
}

export default App;