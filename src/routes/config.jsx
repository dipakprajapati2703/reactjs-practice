/**
 * @file Route configuration (single source of truth).
 * @description Define all app routes and which ones should appear in the primary nav.
 */

import Home from "../pages/Home.jsx";
import Es6ExamplesPage from "../pages/Es6Examples.jsx";
import PropsExamplesPage from "../pages/PropsExamples.jsx";
import StateExamplesPage from "../pages/StateExamples.jsx";
import NotFound from "../pages/NotFound.jsx";

/**
 * @typedef {Object} AppRoute
 * @property {string} path - URL path. Ignored when `index` is true.
 * @property {JSX.Element} element - Component to render for this route.
 * @property {string} [label] - Text for nav link (if shown in header).
 * @property {boolean} [inNav=false] - Whether to show in header.
 * @property {boolean} [index=false] - If true, this is the index route for "/".
 */

/** @type {AppRoute[]} */
export const routes = [
  { index: true, path: "/", element: <Home />, label: "Home", inNav: true },
  { path: "/es6-examples", element: <Es6ExamplesPage />, label: "ES6 Examples", inNav: true },
  { path: "/props-example", element: <PropsExamplesPage />, label: "Props Example", inNav: true },
  { path: "/state-examples", element: <StateExamplesPage />, label: "State Examples", inNav: true },

  // 👉 Add as many pages as you like; set inNav: true to show in Header
  // { path: "/effects-examples", element: <EffectsExamplesPage />, label: "Effects", inNav: true },
  // ...
];

/** Catch-all (must be separate) */
export const notFoundRoute = { path: "*", element: <NotFound /> };

/** Maximum number of primary links to show before putting the rest under "More" */
export const NAV_MAX_PRIMARY = 7;
