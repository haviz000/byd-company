import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader";

const Home = React.lazy(() => import("./page/Homepage"));
const Detail = React.lazy(() => import("./page/Detailpage"));
const Gallery = React.lazy(() => import("./page/Gallery"));
const About = React.lazy(() => import("./page/PriceList"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/price-list" element={<About />} />
          <Route path="/type/:id" element={<Detail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
