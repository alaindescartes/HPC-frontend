import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import MainPage from "./components/MainPage";
import New from "./components/subLinks/New";
import Who_we_are from "./components/subLinks/Who_we_are";
import Faqs from "./components/subLinks/Faqs";
import ContactUs from "./components/subLinks/Contact-us";
import Error from "./components/ErrorPage";
import Happening from "./components/subLinks/Happenning";

//ROUTES
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "about",
        children: [
          {
            path: "new",
            element: <New />,
          },
          {
            path: "faqs",
            element: <Faqs />,
          },
          {
            path: "who-we-are",
            element: <Who_we_are />,
          },
          {
            path: "contact-us",
            element: <ContactUs />,
          },
        ],
      },
      {
        path: "programs",
        children: [
          {
            path: "get-involved",
            element: <h1>GET INVOLVED SECTION COMING SOON</h1>,
          },
          {
            path: "women",
            element: <h1>WOMEN SECTION COMING SOON</h1>,
          },
          {
            path: "men",
            element: <h1>MEN SECTION COMING SOON</h1>,
          },
          {
            path: "children",
            element: <h1>CHILDREN SECTION COMING SOON</h1>,
          },
        ],
      },
      {
        path: "happening",
        element: <Happening/>,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div className={"App"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
