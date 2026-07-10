import { lazy, Suspense } from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// import { Dashboard } from './components/Dashboard'
// import { Landing } from './components/Landing'
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(()=> import('./components/Landing'));
function App() {

  return (
    <div>
      {/* <div style={{ backgroundColor: "black",padding:"10px" }}>
</div> */}
      {/* window.location.href */}

      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/Dashboard" element={ <Suspense fallback={"loading..."}>
            <Dashboard/>
            </Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const Navigate = useNavigate();
  return <div>
    <div>
      <button onClick={() => {
        Navigate("/")
      }}>Landing</button>
      <button onClick={() => {
        Navigate("/Dashboard")
      }}>Dashboard</button>
    </div>
  </div>
}

export default App
