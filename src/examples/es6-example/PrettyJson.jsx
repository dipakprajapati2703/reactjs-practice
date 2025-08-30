/**
 * @component PrettyJson
 * @description Displays JSON data with syntax highlighting and error handling.
 */
import { useState } from "react";

export default function PrettyJson({ data, title = "JSON Data", icon = "📄" }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatJson = (data) => {
    try {
      if (typeof data === "string") {
        // Try to parse if it's a JSON string
        const parsed = JSON.parse(data);
        return JSON.stringify(parsed, null, 2);
      }
      return JSON.stringify(data, null, 2);
    } catch (error) {
      return `Error formatting JSON: ${error.message}`;
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const formattedJson = formatJson(data);

  return (
    <div className="es6-example-card">
      <div className="json-header">
        <span className="json-icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      
      <div className="json-content">
        <div className={`json-output ${isExpanded ? 'expanded' : 'collapsed'}`}>
          {formattedJson}
        </div>
        
        <button 
          onClick={toggleExpanded}
          className="expand-button"
        >
          {isExpanded ? "Collapse" : "Expand"}
        </button>
      </div>
    </div>
  );
}
