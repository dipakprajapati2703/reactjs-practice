/**
 * @component App
 * @description App shell: persistent header + route table from config.
 */
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import { routes, notFoundRoute } from "./routes/config.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <Routes>
          {routes.map((r) =>
            r.index ? (
              <Route key="__index__" index element={r.element} />
            ) : (
              <Route key={r.path} path={r.path} element={r.element} />
            )
          )}
          <Route path={notFoundRoute.path} element={notFoundRoute.element} />
        </Routes>
      </main>
      <ScrollToTop />
    </div>
  );
}
