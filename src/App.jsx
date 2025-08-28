/**
 * @component App
 * @description App shell: persistent header + route table from config.
 */
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import { routes, notFoundRoute } from "./routes/config.jsx";

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <Header />
      <main style={{ padding: 16 }}>
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
    </div>
  );
}
