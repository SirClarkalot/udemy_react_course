import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

// http://example.com

// Commented lines below is an alternative way to do routing
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element= {<Home/>}/>
//     <Route path="/products" element={<Products/>} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      // index: true for the <Home/> component dets it as the default when parent route is loaded
      { index: true, path: '', element: <Home /> },
      { path: 'products', element: <Products /> },
      {path: 'products/:id', element: <ProductDetail/>} //colon is important. Lets router know it is dynamic
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
