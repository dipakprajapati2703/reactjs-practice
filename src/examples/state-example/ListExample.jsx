/**
 * @component ListExample
 * @description Demonstrates array state management with CRUD operations.
 */
import { useState } from "react";

export default function ListExample() {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: true },
    { id: 3, text: "Deploy to production", completed: false }
  ]);
  const [newItemText, setNewItemText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const totalCount = items.length;
  const completedCount = items.filter(item => item.completed).length;

  const addItem = () => {
    if (newItemText.trim()) {
      const newItem = {
        id: Date.now(),
        text: newItemText.trim(),
        completed: false
      };
      setItems([...items, newItem]);
      setNewItemText("");
    }
  };

  const toggleItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    if (editText.trim()) {
      setItems(items.map(item =>
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

  const clearAll = () => {
    setItems([]);
  };

  return (
    <div className="state-example">
      {/* Statistics */}
      <div className="list-stats">
        <div className="stat-item">
          <div className="stat-number total">{totalCount}</div>
          <div className="stat-label">Total Items</div>
        </div>
        <div className="stat-item">
          <div className="stat-number completed">{completedCount}</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number pending">{totalCount - completedCount}</div>
          <div className="stat-label">Pending</div>
        </div>
        <div className="stat-item">
          <div className="stat-number progress">{totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0}%</div>
          <div className="stat-label">Progress</div>
        </div>
      </div>

      {/* Add Item Section */}
      <div className="add-item-section">
        <h4>➕ Add New Item</h4>
        <div className="add-item-controls">
          <div>
            <label>New Task</label>
            <input
              type="text"
              value={newItemText}
              onChange={(e) => setNewItemText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addItem()}
              placeholder="Enter task description..."
              className="modern-input"
            />
          </div>
          <div>
            <button onClick={addItem} className="add-item-button">
              Add Item
            </button>
          </div>
        </div>
      </div>

      {/* List Controls */}
      <div className="list-controls">
        <button 
          onClick={clearAll} 
          className="clear-all-button"
          disabled={items.length === 0}
        >
          Clear All
        </button>
      </div>

      {/* Items List */}
      <div className="items-list">
        <h4>📋 Task List</h4>
        
        {items.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📝</div>
            <p className="empty-state-text">No items yet. Add your first task above!</p>
          </div>
        ) : (
          <div className="list-container">
            {items.map((item) => (
              <div key={item.id} className={`list-item ${item.completed ? 'completed' : ''}`}>
                <div className="flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleItem(item.id)}
                    className="modern-checkbox"
                  />
                </div>

                <div className="item-content">
                  {editingId === item.id ? (
                    <div className="edit-mode">
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="modern-input"
                      />
                      <div className="edit-actions">
                        <button 
                          onClick={() => saveEdit(item.id)} 
                          className="modern-button success small"
                        >
                          Save
                        </button>
                        <button 
                          onClick={cancelEdit} 
                          className="modern-button secondary small"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <span className="item-text">
                      {item.completed ? <s>{item.text}</s> : item.text}
                    </span>
                  )}
                </div>

                <div className="item-actions">
                  {editingId !== item.id && (
                    <button 
                      onClick={() => startEdit(item.id, item.text)} 
                      className="modern-button warning small"
                    >
                      Edit
                    </button>
                  )}
                  <button 
                    onClick={() => deleteItem(item.id)} 
                    className="modern-button danger small"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Code Explanation */}
      <div className="code-explanation">
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Array State:</strong> Using useState with arrays for dynamic lists</li>
          <li><strong>Immutable Updates:</strong> Creating new arrays instead of modifying existing ones</li>
          <li><strong>CRUD Operations:</strong> Create, Read, Update, Delete operations on list items</li>
          <li><strong>Conditional Rendering:</strong> Different UI states for editing vs. viewing</li>
          <li><strong>Event Handling:</strong> Managing user interactions with form inputs and buttons</li>
        </ul>
      </div>
    </div>
  );
}
