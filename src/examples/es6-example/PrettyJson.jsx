/**
 * @component PrettyJson
 * @description Small pretty JSON renderer.
 * @param {{ data: unknown, title?: string }} props
 */
export default function PrettyJson({ data, title }) {
  return (
    <div style={{ margin: "12px 0", border: "1px solid #eee", borderRadius: 8 }}>
      {title && (
        <div style={{ padding: "8px 12px", borderBottom: "1px solid #eee", background: "#fafafa" }}>
          <strong>{title}</strong>
        </div>
      )}
      <pre
        style={{
          margin: 0,
          padding: 12,
          background: "#111",
          color: "#0f0",
          overflow: "auto",
          borderRadius: "0 0 8px 8px",
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
