import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import TermService from "../pages/TermService";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Contributors from "../pages/contributors";
import Homepage from '../pages/homepage';
import Pricing from "../pages/pricing";
import PrivacyPolicy from "../pages/privacyPolicy";
import ForgotPassword from "../pages/auth/forgotPassword";
import CheckEmail from "../pages/auth/checkEmail";
import ConfirmPassword from "../pages/auth/confirmPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/swiftvelBuilder",
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
  {
    path: "/contributors",
    element: <Contributors />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/check-email",
    element: <CheckEmail />,
  },
  {
    path: "/reset-password/swfitveler1635dsd3290",
    element: <ConfirmPassword />,
  },
]);

  export default router;
  