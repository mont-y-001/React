import './App.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Result from './components/Result';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import NotFound from './components/NotFound';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:  <div>
        <Navbar/>
        <Home/>
      </div>
      
    },
    {
      path:"/about",
         element:  <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:"/dashboard",
         element:  <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children : [
        {
          path:"reports",
          element:<Reports/>,
        },
        {
           path:"mock-test",
           element:<MockTest/>,
        },
        {
           path:"result",
           element:<Result/>,
        }
      ]
    },
    {
      path:"/student/:id",
      element: <div>
        <Navbar/>
        <ParamComp/>
      </div>
    },
    {
      path:"*",
      element:<NotFound/>
    }
  ]
);


function App() {


  return (
   <RouterProvider router={router}/>    //provider just giving context to routes pages
  )
}

export default App


//anchor tag (a) tag use nhi krenge navbar kyunki vo pura page refresh krta h so we hav eoption to use Link or NavLink (NavLink provide class that that can help to give css to Element)