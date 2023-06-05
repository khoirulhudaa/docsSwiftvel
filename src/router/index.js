import { createBrowserRouter } from "react-router-dom";
import Homepage from '../pages/homepage';
import App from '../App';
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Pricing from "../pages/pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/dragmeBuilder",
    element: <App />,
  },
  {
    path: "/signIn",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <Register />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
]);

  export default router;
  