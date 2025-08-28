/**
 * @component Card
 * @description Generic container that renders arbitrary children.
 * @param {{ title: string, children: React.ReactNode }} props
 */
export default function Card({ title, children }) {
  return (
    <section className="card">
      <h4>{title}</h4>
      <div className="content">{children}</div>
    </section>
  );
}
