import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
import { countAtom } from "./store/Atoms/Count";

function App() {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
}

function Count() {
  return (
    <>
      <CountRenderer />
      <Buttons />
    </>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <h2>{count}</h2>;
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </>
  );
}

export default App; 