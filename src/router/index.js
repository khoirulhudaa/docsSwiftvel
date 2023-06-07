import { createBrowserRouter } from "react-router-dom";
import Homepage from '../pages/homepage';
import App from '../App';
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Pricing from "../pages/pricing";
import PrivacyPolicy from "../pages/privacyPolicy";
import TermService from "../pages/TermService";

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
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-of-service",
    element: <TermService />,
  },
]);

  export default router;
  