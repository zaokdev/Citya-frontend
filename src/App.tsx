import { Route, Routes } from "react-router";
import IndexPage from "./pages";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
    </Routes>
  );
};

export default App;
