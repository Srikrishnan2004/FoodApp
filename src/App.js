import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginComponent from "./pages/LoginPage";
import AboutUs from './pages/AboutUs';
const route=createBrowserRouter([
  {
    path:"/",
    element:<LoginComponent mode="login"
    onSubmit={function() {
      console.log("submit");
    }}/>
  },
  {
    path:"/home",
    element:<HomePage/>,
  },
  {
    path:"/aboutus",
    element:<AboutUs/>
  }
]);

function App() {
  return <RouterProvider router={route}/>;
}

export default App;
