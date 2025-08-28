/**
 * @component Header
 * @description Accessible, responsive primary navigation that scales to many links.
 */
import { NavLink } from "react-router-dom";
import { routes, NAV_MAX_PRIMARY } from "../routes/config.jsx";

/** @returns {React.CSSProperties} */
const baseLinkStyles = (isActive) => ({
  textDecoration: "none",
  padding: "8px 12px",
  borderRadius: 8,
  fontWeight: 600,
  lineHeight: 1.2,
  display: "inline-block",
  border: isActive ? "1px solid #c7d2fe" : "1px solid transparent",
  background: isActive ? "#eef2ff" : "transparent",
  color: "#1f2937",
});

/**
 * Render a single Nav item.
 * @param {{to:string, label:string}} props
 */
function NavItem({ to, label }) {
  return (
    <NavLink to={to} end={to === "/"} style={({ isActive }) => baseLinkStyles(isActive)}>
      {label}
    </NavLink>
  );
}

/**
 * Overflow menu using <details>/<summary> for built-in accessibility & keyboard support.
 * @param {{items: {to:string,label:string}[]}} props
 */
function MoreMenu({ items }) {
  if (!items.length) return null;
  return (
    <details>
      <summary style={{ ...baseLinkStyles(false), cursor: "pointer" }}>More ▾</summary>
      <ul
        role="list"
        style={{
          margin: "8px 0 0",
          padding: 8,
          border: "1px solid #e5e7eb",
          borderRadius: 8,
          background: "#fff",
          minWidth: 200,
          boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
          listStyle: "none",
        }}
      >
        {items.map((it) => (
          <li key={it.to} style={{ margin: "4px 0" }}>
            <NavItem to={it.to} label={it.label} />
          </li>
        ))}
      </ul>
    </details>
  );
}

export default function Header() {
  // Build nav list from route config so Header and Routes never fall out of sync.
  const navItems = routes
    .filter((r) => r.inNav)
    .map((r) => ({
      to: r.index ? "/" : r.path,
      label: r.label || r.path,
    }));

  const primary = navItems.slice(0, NAV_MAX_PRIMARY);
  const overflow = navItems.slice(NAV_MAX_PRIMARY);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <nav
        aria-label="Primary"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: 12,
        }}
      >
        <ul
          role="list"
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            flexWrap: "wrap",           // wraps gracefully if the viewport is narrow
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
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
