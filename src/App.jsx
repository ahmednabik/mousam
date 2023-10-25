import { Routes, Route, useRoutes } from "react-router-dom";
import Weather from "./pages/weather";
import Cities from "./pages/cities";
import Maps from "./pages/maps";
import Settings from "./pages/settings";
import NavigationMenu from "./components/NavigationMenu";

export default function App() {
  let navigation = useRoutes([
    {
      path: "/",
      element: <Weather />,
    },
    {
      path: "cities",
      element: <Cities />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
    {
      path: "maps",
      element: <Maps />,
    },
    {
      path: "*",
      element: <h1>404. Page Missing</h1>,
    },
  ]);
  return (
    <>
      <NavigationMenu />
      {navigation}
    </>
  );
}
