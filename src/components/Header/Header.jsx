/**
 * @component Header
 * @description Sticky, accessible primary navigation driven by route config.
 */
import { NavLink } from "react-router-dom";
import { routes, NAV_MAX_PRIMARY } from "../../routes/config.jsx";
import "./Header.css";

/**
 * Render a single nav item with active styling.
 * @param {{to: string, label: string}} props
 */
function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) => `link${isActive ? " linkActive" : ""}`}
    >
      {label}
    </NavLink>
  );
}

/**
 * Overflow menu using <details>/<summary> for built-in a11y & keyboard support.
 * @param {{items: {to:string, label:string}[]}} props
 */
function MoreMenu({ items }) {
  if (!items.length) return null;
  return (
    <details className="more">
      <summary className="link moreSummary">More ▾</summary>
      <ul className="dropdown dropdownList" role="list">
        {items.map((it) => (
          <li key={it.to} className="dropdownItem">
            <NavItem to={it.to} label={it.label} />
          </li>
        ))}
      </ul>
    </details>
  );
}

/** @returns {JSX.Element} */
export default function Header() {
  // Build items from route config so header and route table stay in sync.
  const navItems = routes
    .filter((r) => r.inNav)
    .map((r) => ({ to: r.index ? "/" : r.path, label: r.label || r.path }));

  const primary = navItems.slice(0, NAV_MAX_PRIMARY);
  const overflow = navItems.slice(NAV_MAX_PRIMARY);

  return (
    <header className="header">
      <nav aria-label="Primary" className="container nav">
        <ul role="list" className="navList">
          {primary.map((it) => (
            <li key={it.to}>
              <NavItem to={it.to} label={it.label} />
            </li>
          ))}
          <li>
            <MoreMenu items={overflow} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
