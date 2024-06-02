
import './App.css'
import Home from './Components/Home/Home'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login/Login';
import Error from './Components/Home/Error';
import AddProduct from './Components/product/AddProduct';
import AllProduct from './Components/product/AllProduct';
import AllVariants from './Components/product/AllVariants';
import Registration from './Components/Login/Registration';
import CategoryActiveStatus from './Components/Category/CategoryActiveStatus';
import AddCategory from './Components/Category/AddCategory';
import AddSubCategory from './Components/SubCategory/AddSubCategory';
import AllCategory from './Components/Category/AllCategory';
import AddVariants from './Components/product/AddVariants';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
                <Route
      path="/login"
      element={<Login></Login>}
    >
    </Route>
    <Route
      path="/registration"
      element={<Registration/>}
    >
    </Route>
      <Route
      path="/"
      element={<Home/>}
    >
    <Route
      path="/addproduct"
      element={<AddProduct/>}
    >
    </Route>
    <Route
      path="/allproduct"
      element={<AllProduct/>}
    >
    </Route>
    <Route
      path="/addcategory"
      element={<AddCategory/>}
    >
    </Route>
    <Route
      path="/allcategory"
      element={<AllCategory/>}
    >
    </Route>
    <Route
      path="/categoryactivestatus"
      element={<CategoryActiveStatus/>}
    >
    </Route>
    <Route
      path="/addsubcategory"
      element={<AddSubCategory/>}
    >
    </Route>

    <Route
      path="/allvariants"
      element={<AllVariants/>}
    >
    </Route>
    <Route
      path="/addvariants"
      element={<AddVariants/>}
    >
    </Route>
      <Route
      path="*"
      element={<Error/>}
    >
    </Route>
    </Route>

    </Route>
  )
  )

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
