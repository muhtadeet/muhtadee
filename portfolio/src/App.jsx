// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cover from "./components/Cover";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Landscape from "./components/Landscape";
import Macro from "./components/Macro";
import Wildlife from "./components/Wildlife";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route index element={<Cover />} />
          <Route path="/home" element={<Cover />} />
          <Route path="/landscape" element={<Landscape />} />
          <Route path="/macro" element={<Macro />} />
          <Route path="/wildlife" element={<Wildlife />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
