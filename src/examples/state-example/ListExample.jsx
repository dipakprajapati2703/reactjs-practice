/**
 * @component ListExample
 * @description Demonstrates list state management with CRUD operations.
 */
import { useState } from "react";
import "../../examples/modern-forms.css";

export default function ListExample() {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React Hooks", completed: false },
    { id: 2, text: "Build a todo app", completed: true },
    { id: 3, text: "Master state management", completed: false },
    { id: 4, text: "Deploy to production", completed: false }
  ]);

  const [newItemText, setNewItemText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const addItem = () => {
    if (newItemText.trim()) {
      const newItem = {
        id: Date.now(),
        text: newItemText.trim(),
        completed: false
      };
      setItems(prev => [...prev, newItem]);
      setNewItemText("");
    }
  };

  const toggleItem = (id) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    if (editText.trim()) {
      setItems(prev => prev.map(item =>
        item.id === id ? { ...item, text: editText.trim() } : item
      ));
      setEditingId(null);
      setEditText("");
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const clearCompleted = () => {
    setItems(prev => prev.filter(item => !item.completed));
  };

  const completedCount = items.filter(item => item.completed).length;
  const totalCount = items.length;

  return (
    <div className="state-example">
      <h3>📝 List State Management</h3>
      <p>Managing arrays of objects with CRUD operations and complex state updates.</p>

      <div className="list-stats" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
        gap: '15px', 
        marginBottom: '25px',
        padding: '20px',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        borderRadius: '12px',
        border: '1px solid #e1e8ed'
      }}>
        <div className="stat-item" style={{ textAlign: 'center', padding: '10px' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3498db', marginBottom: '5px' }}>{totalCount}</div>
          <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Total Items</div>
        </div>
        <div className="stat-item" style={{ textAlign: 'center', padding: '10px' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#27ae60', marginBottom: '5px' }}>{completedCount}</div>
          <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Completed</div>
        </div>
        <div className="stat-item" style={{ textAlign: 'center', padding: '10px' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f39c12', marginBottom: '5px' }}>{totalCount - completedCount}</div>
          <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Pending</div>
        </div>
        <div className="stat-item" style={{ textAlign: 'center', padding: '10px' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#9b59b6', marginBottom: '5px' }}>{totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0}%</div>
          <div style={{ fontSize: '0.9rem', color: '#6c757d' }}>Progress</div>
        </div>
      </div>

      <div className="add-item-section" style={{ 
        background: 'white', 
        padding: '25px', 
        borderRadius: '16px', 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', 
        border: '1px solid #e1e8ed',
        marginBottom: '25px'
      }}>
        <h4 style={{ margin: '0 0 20px 0', color: '#2c3e50', fontSize: '1.3rem', fontWeight: 600 }}>➕ Add New Item</h4>
        <div className="add-item-controls" style={{ 
          display: 'flex', 
          gap: '20px', 
          alignItems: 'flex-end',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#2c3e50' }}>New Task</label>
            <input
              type="text"
              value={newItemText}
              onChange={(e) => setNewItemText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addItem()}
              className="modern-input"
              placeholder="Enter a new task..."
              style={{ width: '100%', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ flexShrink: 0, minWidth: '120px' }}>
            <button onClick={addItem} className="modern-button primary" style={{ 
              whiteSpace: 'nowrap',
              width: '100%',
              minWidth: '120px'
            }}>
              ➕ Add Item
            </button>
          </div>
        </div>
      </div>

      {completedCount > 0 && (
        <div className="list-controls" style={{ 
          marginBottom: '25px',
          textAlign: 'center'
        }}>
          <button 
            onClick={clearCompleted} 
            className="modern-button warning"
            disabled={completedCount === 0}
          >
            🗑️ Clear Completed ({completedCount})
          </button>
        </div>
      )}

      <div className="items-list" style={{ 
        background: 'white', 
        padding: '25px', 
        borderRadius: '16px', 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', 
        border: '1px solid #e1e8ed'
      }}>
        <h4 style={{ margin: '0 0 20px 0', color: '#2c3e50', fontSize: '1.3rem', fontWeight: 600 }}>📋 Task List</h4>
        {items.length === 0 ? (
          <div className="empty-state" style={{ 
            textAlign: 'center', 
            padding: '40px 20px',
            color: '#6c757d'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📝</div>
            <p style={{ fontSize: '1.1rem', margin: '0' }}>No items yet. Add your first task above!</p>
          </div>
        ) : (
          <div className="list-container" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {items.map(item => (
              <div key={item.id} className={`list-item ${item.completed ? 'completed' : ''}`} style={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px 20px',
                background: item.completed ? '#f8f9fa' : 'white',
                border: '1px solid #e9ecef',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                gap: '15px'
              }}>
                {/* Checkbox on the left */}
                <div style={{ flexShrink: 0 }}>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleItem(item.id)}
                    className="modern-checkbox"
                    style={{ width: '20px', height: '20px' }}
                  />
                </div>
                
                {/* Task content in the middle */}
                <div className="item-content" style={{ flex: '1', minWidth: 0 }}>
                  {editingId === item.id ? (
                    <div className="edit-mode" style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && saveEdit(item.id)}
                        className="modern-input"
                        autoFocus
                        style={{ flex: '1', minWidth: '200px' }}
                      />
                      <div className="edit-actions" style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                        <button onClick={() => saveEdit(item.id)} className="modern-button success small">
                          💾 Save
                        </button>
                        <button onClick={cancelEdit} className="modern-button secondary small">
                          ❌ Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <span className="item-text" style={{ 
                      fontSize: '1rem', 
                      color: item.completed ? '#6c757d' : '#2c3e50',
                      textDecoration: item.completed ? 'line-through' : 'none',
                      fontWeight: item.completed ? '400' : '500'
                    }}>
                      {item.text}
                    </span>
                  )}
                </div>
                
                {/* Action buttons on the right */}
                <div className="item-actions" style={{ 
                  display: 'flex', 
                  gap: '8px', 
                  flexShrink: 0,
                  alignItems: 'center'
                }}>
                  {editingId !== item.id && (
                    <button 
                      onClick={() => startEdit(item.id, item.text)}
                      className="modern-button ghost small"
                      style={{ padding: '8px 12px', fontSize: '0.9rem' }}
                    >
                      ✏️ Edit
                    </button>
                  )}
                  <button 
                    onClick={() => deleteItem(item.id)}
                    className="modern-button danger small"
                    style={{ padding: '8px 12px', fontSize: '0.9rem' }}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="code-explanation" style={{ 
        background: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '12px', 
        marginTop: '25px',
        border: '1px solid #e9ecef'
      }}>
        <h4 style={{ margin: '0 0 15px 0', color: '#2c3e50' }}>Key Concepts:</h4>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#495057' }}>
          <li><strong>Array state</strong> - Managing lists of objects</li>
          <li><strong>CRUD operations</strong> - Create, Read, Update, Delete</li>
          <li><strong>Immutable updates</strong> - Array methods for state updates</li>
          <li><strong>Conditional rendering</strong> - Different UI states</li>
          <li><strong>Complex interactions</strong> - Edit mode, validation</li>
        </ul>
      </div>
    </div>
  );
}
