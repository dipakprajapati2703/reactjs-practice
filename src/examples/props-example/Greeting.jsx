/**
 * @component Greeting
 * @description Renders a greeting with a salutation.
 * @param {{ name: string, excited?: boolean }} props
 */
export default function Greeting({ name, excited = false }) {
  return <h2>{excited ? `Hello, ${name}! 🎉` : `Hello, ${name}.`}</h2>;
}
