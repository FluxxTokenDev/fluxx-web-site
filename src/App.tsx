import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import IndividualsPage from "./components/IndividualsPage";
import MerchantsPage from "./components/MerchantsPage";
import ExchangesPage from "./components/ExchangesPage";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/individuals" element={<IndividualsPage />} />
          <Route path="/merchants" element={<MerchantsPage />} />
          <Route path="/exchanges" element={<ExchangesPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
