import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Details from "./components/Details";
import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import React from "react";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./assets/appStore";
function App() {
  return (
    <Provider store={appStore}>
    <div className="bg-[#9BECE1]">
      <Header />
      <Outlet/>
      <Footer />
      </div>
      </Provider>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<Error/>,
    children: [{
      path: '/',
      element: <Body />,
    },
    {
      path: '/about',
      element: <About />,
      },
    {
      path: '/contact',
      element: <Contact/>,
      },
    {
      path: '/resturant/:id',
      element: <Details/>,
      },
    {
      path: '/cart',
      element: <Cart />,
    },
    ],
  },
])

export default App
