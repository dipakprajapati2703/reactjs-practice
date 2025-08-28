/**
 * @component App
 * @description App shell: header + routes. Home route preserves Vite default UI.
 */
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Es6ExamplesPage from "./pages/Es6Examples.jsx";
import PropsExamplesPage from "./pages/PropsExamples.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <Header />
      <main style={{ padding: 16 }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/es6-examples" element={<Es6ExamplesPage />} />
          <Route path="/props-example" element={<PropsExamplesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
