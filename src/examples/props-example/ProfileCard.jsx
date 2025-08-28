/**
 * @component ProfileCard
 * @param {{ user: { first: string, last: string, skills: string[] } }} props
 */
export default function ProfileCard({ user }) {
  const { first, last, skills } = user;
  return (
    <article>
      <h3>{first} {last}</h3>
      <ul>{skills.map((s) => <li key={s}>{s}</li>)}</ul>
    </article>
  );
}
