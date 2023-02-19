import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import Main from "./components/Main";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <Main /> },
      { path: "watch", element: <WatchPage /> },
    ],
  },
  // {
  //   path: "/watch",
  //   element: <WatchPage />,
  // },
]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      {/* <Body /> */}
      <RouterProvider router={appRoute} />
    </Provider>
  );
}

export default App;
