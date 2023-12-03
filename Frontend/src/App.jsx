import { createBrowserRouter,RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import RecentsPage from "./pages/RecentsPage";
import MapSearchPage from "./pages/MapSearchPage";
import SettingsPage from "./pages/SettingsPage";

const router = createBrowserRouter([
  {path: '/', element: <RootPage />, children: [
    {index: true, element: <HomePage />},
    {path: 'recents', element: <RecentsPage />},
    {path: 'map', element: <MapSearchPage />},
    {path: 'settings', element: <SettingsPage />},
  ]}
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
