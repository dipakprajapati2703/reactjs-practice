import React, { useState } from 'react';

/**
 * @component ListExample
 * @description Demonstrates array state management with add, remove, and update operations.
 */
export default function ListExample() {
  const [items, setItems] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Deploy to production', completed: false }
  ]);

  const [newItemText, setNewItemText] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  const addItem = () => {
    if (newItemText.trim()) {
      const newItem = {
        id: Date.now(), // Simple ID generation
        text: newItemText.trim(),
        completed: false
      };
      
      setItems(prev => [...prev, newItem]);
      setNewItemText('');
    }
  };

  const removeItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleComplete = (id) => {
    setItems(prev => prev.map(item => 
      item.id === id 
        ? { ...item, completed: !item.completed }
        : item
    ));
  };

  const updateItemText = (id, newText) => {
    if (newText.trim()) {
      setItems(prev => prev.map(item => 
        item.id === id 
          ? { ...item, text: newText.trim() }
          : item
      ));
    }
  };

  const clearCompleted = () => {
    setItems(prev => prev.filter(item => !item.completed));
  };

  const filteredItems = items.filter(item => {
    if (filter === 'active') return !item.completed;
    if (filter === 'completed') return item.completed;
    return true; // 'all'
  });

  const completedCount = items.filter(item => item.completed).length;
  const activeCount = items.length - completedCount;

  return (
    <div className="state-example">
      <h3>List Management Example</h3>
      
      <div className="list-controls">
        <div className="add-item">
          <input
            type="text"
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
            placeholder="Add new item..."
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
          />
          <button onClick={addItem}>Add Item</button>
        </div>

        <div className="filter-controls">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All ({items.length})
          </button>
          <button 
            className={filter === 'active' ? 'active' : ''} 
            onClick={() => setFilter('active')}
          >
            Active ({activeCount})
          </button>
          <button 
            className={filter === 'completed' ? 'active' : ''} 
            onClick={() => setFilter('completed')}
          >
            Completed ({completedCount})
          </button>
        </div>

        {completedCount > 0 && (
          <button onClick={clearCompleted} className="clear-completed">
            Clear Completed
          </button>
        )}
      </div>

      <div className="list-items">
        {filteredItems.length === 0 ? (
          <p className="no-items">No items to display</p>
        ) : (
          filteredItems.map(item => (
            <ListItem
              key={item.id}
              item={item}
              onToggle={toggleComplete}
              onRemove={removeItem}
              onUpdate={updateItemText}
            />
          ))
        )}
      </div>

      <div className="code-explanation">
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Array state</strong> - Managing lists of objects</li>
          <li><strong>Immutable updates</strong> - Never mutate arrays directly</li>
          <li><strong>Filter operations</strong> - Show different views of data</li>
          <li><strong>CRUD operations</strong> - Create, Read, Update, Delete</li>
          <li><strong>Derived state</strong> - Counts calculated from array</li>
        </ul>
      </div>
    </div>
  );
}

/**
 * @component ListItem
 * @description Individual list item with inline editing.
 */
function ListItem({ item, onToggle, onRemove, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  const handleSave = () => {
    onUpdate(item.id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(item.text);
    setIsEditing(false);
  };

  return (
    <div className={`list-item ${item.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggle(item.id)}
      />
      
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSave()}
            autoFocus
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div className="view-mode">
          <span 
            className="item-text"
            onDoubleClick={() => setIsEditing(true)}
          >
            {item.text}
          </span>
          <div className="item-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onRemove(item.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}
