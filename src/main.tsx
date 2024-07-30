import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./page/Home.tsx";
import { Login } from "./Login/Login.tsx";
import { Signup } from "./Signup/Signup.tsx";
import { Market } from "./component/Market.tsx";
import { Asset } from "./component/Asset.tsx";

import { SwapComp } from "./component/SwapComp.tsx";
import { PtoP } from "./component/PtoP.tsx";
import { OrderBook } from "./component/OrderBook.tsx";

import { Otp } from "./Signup/otp.tsx";
import { ForgotPassword } from "./Login/forgot_password_1.tsx";
import { ForgotPasswordSuccess } from "./Login/forgot_password__2.tsx";
import { NewPassword } from "./Login/new_password.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/otp",
        element: <Otp/>
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "/forgot-password-success",
        element: <ForgotPasswordSuccess />
      },
      {
        path: "/new-password",
        element: <NewPassword />
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/market",
        element: <Market />,
      },
      {
        path: "/asset",
        element: <Asset />,
      },

      {
        path: "/swap",
        element: <SwapComp />,
      },
      {
        path: "/pp",
        element: <PtoP />,
      },
      {
        path: "/orderbook",
        element: <OrderBook />,
      },
      // {
      //   path: "/spot",
      //   element: <Spot />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
