/**
 * @component Toolbar
 * @param {{ left?: React.ReactNode, right?: React.ReactNode }} props
 */
export default function Toolbar({ left, right }) {
  return (
    <header className="toolbar">
      <div className="left">{left}</div>
      <div className="right">{right}</div>
    </header>
  );
}
