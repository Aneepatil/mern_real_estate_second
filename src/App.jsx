import HomePage from "./pages/homePage/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Lists from "./pages/listPage/Lists";
import Layout from "./pages/layout/Layout";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SinglePage from "./pages/singlePage/SinglePage";
import Profile from "./pages/profile/Profile";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "/list",
          element: <Lists/>,
        },
        {
          path: "/:id",
          element: <SinglePage/>,
        },
        {
          path: "/login",
          element: <LoginPage/>,
        },
        {
          path: "/register",
          element: <RegisterPage/>,
        },
        {
          path: "/profile",
          element: <Profile/>,
        },
        // {
        //   path: "/contact",
        //   element: <Contact/>,
        // },
      ]
    },
    
  ]);

  return (
    
    <RouterProvider router={router} />
  );
}

export default App;
