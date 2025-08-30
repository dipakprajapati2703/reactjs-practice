/**
 * @component PrettyJson
 * @description Beautiful JSON renderer with theme-consistent styling.
 * @param {{ data: unknown, title?: string }} props
 */
export default function PrettyJson({ data, title }) {
  // Ensure proper JSON formatting with no trailing commas or malformed arrays
  const formatJson = (data) => {
    try {
      // Clean the data to ensure proper JSON structure
      const cleanData = JSON.parse(JSON.stringify(data));
      return JSON.stringify(cleanData, null, 2);
    } catch (error) {
      console.error('JSON formatting error:', error);
      return JSON.stringify(data, null, 2);
    }
  };

  return (
    <div className="es6-example-card" style={{
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      border: '1px solid #e1e8ed',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    }}>
      {title && (
        <div style={{
          padding: '20px 25px',
          borderBottom: '1px solid #e9ecef',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
        }}>
          <h3 style={{
            margin: 0,
            color: '#2c3e50',
            fontSize: '1.3rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ fontSize: '1.5rem' }}>🔧</span>
            {title}
          </h3>
        </div>
      )}
      <div style={{
        padding: '20px',
        background: '#1e1e1e',
        borderRadius: '0 0 16px 16px'
      }}>
        <pre style={{
          margin: 0,
          padding: '16px',
          background: '#1e1e1e',
          color: '#4ec9b0',
          overflow: 'auto',
          borderRadius: '8px',
          border: '1px solid #333',
          fontSize: '0.9rem',
          lineHeight: '1.5',
          fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word'
        }}>
          {formatJson(data)}
        </pre>
      </div>
    </div>
  );
}
