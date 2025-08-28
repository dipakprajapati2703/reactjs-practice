/**
 * @component Badge
 * @param {{ color?: 'primary'|'neutral'; text: string }} props
 */
export default function Badge({ color = 'neutral', text }) {
  return <span className={`badge badge--${color}`}>{text}</span>;
}
