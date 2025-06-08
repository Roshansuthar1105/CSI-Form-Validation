import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
const FormPage = lazy(() => import("./pages/FormPage"));
const Success = lazy(() => import("./pages/Success"));
const HomePage = lazy(() => import("./pages/Home"));
const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};
function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/submitted" element={<Success />} />
        </Routes>
      </ScrollToTop>
    </Router>
  )
}

export default App