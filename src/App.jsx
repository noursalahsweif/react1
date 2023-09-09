import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './comp/Layoutt/Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import Home from './comp/Homee/Home';
import About from '../src/comp/about/About'
import Port from './comp/port/Port';
import Contact from './comp/contact/Contact';


let routes = createBrowserRouter([
  {path: '' ,element: <Layout/> , children:[
    {path:'' , element: <Home/>},
    {path:'home' , element: <Home/>},
    {path:'about' , element: <About/>},
    {path:'port' , element: <Port/>},
    {path:'contact' , element: <Contact/>}
  ]}
])


function App() {
  return <>
    <RouterProvider router={routes}/>
    
      
  {/* <Layout/> */}
  </>;
}

export default App;
