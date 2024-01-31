import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./helpers/misc";
import LandingPage from "./pages/LandingPage";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import RecentsPage from "./pages/RecentsPage";
import MapSearchPage from "./pages/MapSearchPage";
import SettingsPage from "./pages/SettingsPage";
import { action as landingPageAction } from "./utils/Actions";

const router = createBrowserRouter([
  {
    path: "",
    id: "root",
    children: [
      { index: true, element: <LandingPage />, action: landingPageAction },
      {
        path: "weather",
        element: <RootPage />,
        children: [
          { index: true, path: '', element: <HomePage /> },
          { path: "recents", element: <RecentsPage /> },
          { path: "map", element: <MapSearchPage /> },
          { path: "settings", element: <SettingsPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
