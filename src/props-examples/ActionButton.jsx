/**
 * @component ActionButton
 * @param {{ onRun: () => void, label: string }} props
 */
export default function ActionButton({ onRun, label }) {
  return <button onClick={onRun}>{label}</button>;
}
