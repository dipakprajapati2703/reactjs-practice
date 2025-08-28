/**
 * @component Header
 * @description Site header with navigation links.
 */
import { NavLink } from "react-router-dom";

export default function Header() {
  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: 8,
    fontWeight: 600,
    background: isActive ? "#eef2ff" : "transparent",
    color: "#1f2937",
    border: isActive ? "1px solid #c7d2fe" : "1px solid transparent",
  });

  return (
    <header style={{ padding: 12, borderBottom: "1px solid #e5e7eb" }}>
      <nav style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <NavLink to="/" style={linkStyle} end>
          Home
        </NavLink>
        <NavLink to="/es6-examples" style={linkStyle}>
          ES6 Examples
        </NavLink>
        <NavLink to="/props-example" style={linkStyle}>
          Props Example
        </NavLink>
      </nav>
    </header>
  );
}
