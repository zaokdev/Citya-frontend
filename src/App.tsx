import { Route, Routes } from "react-router";
import IndexPage from "./pages";
import CityDetailsPage from "./pages/CityDetailsPage";
import DefaultLayout from "./layout/DefaultLayout";

export const App = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/city/:id" element={<CityDetailsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
