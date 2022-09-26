import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import Index from "./pages";
import Section from "./pages/section";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />}></Route>
        <Route path="/section" element={<Section />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
