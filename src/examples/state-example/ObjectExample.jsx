import React, { useState } from 'react';

/**
 * @component ObjectExample
 * @description Demonstrates object state updates with immutable patterns.
 */
export default function ObjectExample() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    profile: {
      age: 30,
      location: 'New York',
      preferences: {
        theme: 'light',
        notifications: true,
        language: 'en'
      }
    },
    settings: {
      privacy: 'public',
      emailNotifications: true
    }
  });

  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({ ...user });

  // Update simple properties
  const updateName = (newName) => {
    setUser(prev => ({
      ...prev,
      name: newName
    }));
  };

  const updateEmail = (newEmail) => {
    setUser(prev => ({
      ...prev,
      email: newEmail
    }));
  };

  // Update nested properties
  const updateAge = (newAge) => {
    setUser(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        age: newAge
      }
    }));
  };

  const updateLocation = (newLocation) => {
    setUser(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        location: newLocation
      }
    }));
  };

  // Update deeply nested properties
  const updateTheme = (newTheme) => {
    setUser(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        preferences: {
          ...prev.profile.preferences,
          theme: newTheme
        }
      }
    }));
  };

  const toggleNotifications = () => {
    setUser(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        preferences: {
          ...prev.profile.preferences,
          notifications: !prev.profile.preferences.notifications
        }
      }
    }));
  };

  const updateLanguage = (newLanguage) => {
    setUser(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        preferences: {
          ...prev.profile.preferences,
          language: newLanguage
        }
      }
    }));
  };

  // Update settings
  const updatePrivacy = (newPrivacy) => {
    setUser(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        privacy: newPrivacy
      }
    }));
  };

  const toggleEmailNotifications = () => {
    setUser(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        emailNotifications: !prev.settings.emailNotifications
      }
    }));
  };

  // Reset to default values
  const resetUser = () => {
    setUser({
      name: 'John Doe',
      email: 'john@example.com',
      profile: {
        age: 30,
        location: 'New York',
        preferences: {
          theme: 'light',
          notifications: true,
          language: 'en'
        }
      },
      settings: {
        privacy: 'public',
        emailNotifications: true
      }
    });
  };

  const handleEditSave = () => {
    setUser(editData);
    setEditMode(false);
  };

  const handleEditCancel = () => {
    setEditData({ ...user });
    setEditMode(false);
  };

  return (
    <div className="state-example">
      <h3>Object State Management Example</h3>
      
      <div className="user-display">
        <h4>Current User State:</h4>
        <div className="user-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.profile.age}</p>
          <p><strong>Location:</strong> {user.profile.location}</p>
          <p><strong>Theme:</strong> {user.profile.preferences.theme}</p>
          <p><strong>Notifications:</strong> {user.profile.preferences.notifications ? 'On' : 'Off'}</p>
          <p><strong>Language:</strong> {user.profile.preferences.language}</p>
          <p><strong>Privacy:</strong> {user.settings.privacy}</p>
          <p><strong>Email Notifications:</strong> {user.settings.emailNotifications ? 'On' : 'Off'}</p>
        </div>
      </div>

      <div className="state-actions">
        <h4>Update Individual Properties:</h4>
        
        <div className="action-group">
          <h5>Basic Properties</h5>
          <div>
            <input
              type="text"
              value={user.name}
              onChange={(e) => updateName(e.target.value)}
              placeholder="Update name"
            />
            <input
              type="email"
              value={user.email}
              onChange={(e) => updateEmail(e.target.value)}
              placeholder="Update email"
            />
          </div>
        </div>

        <div className="action-group">
          <h5>Profile Properties</h5>
          <div>
            <input
              type="number"
              value={user.profile.age}
              onChange={(e) => updateAge(parseInt(e.target.value) || 0)}
              placeholder="Update age"
            />
            <input
              type="text"
              value={user.profile.location}
              onChange={(e) => updateLocation(e.target.value)}
              placeholder="Update location"
            />
          </div>
        </div>

        <div className="action-group">
          <h5>Preferences</h5>
          <div>
            <select value={user.profile.preferences.theme} onChange={(e) => updateTheme(e.target.value)}>
              <option value="light">Light Theme</option>
              <option value="dark">Dark Theme</option>
              <option value="auto">Auto Theme</option>
            </select>
            
            <button onClick={toggleNotifications}>
              {user.profile.preferences.notifications ? 'Disable' : 'Enable'} Notifications
            </button>
            
            <select value={user.profile.preferences.language} onChange={(e) => updateLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
        </div>

        <div className="action-group">
          <h5>Settings</h5>
          <div>
            <select value={user.settings.privacy} onChange={(e) => updatePrivacy(e.target.value)}>
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="friends">Friends Only</option>
            </select>
            
            <button onClick={toggleEmailNotifications}>
              {user.settings.emailNotifications ? 'Disable' : 'Enable'} Email Notifications
            </button>
          </div>
        </div>

        <div className="action-group">
          <h5>Bulk Actions</h5>
          <button onClick={resetUser}>Reset to Default</button>
          <button onClick={() => setEditMode(true)}>Edit All Properties</button>
        </div>
      </div>

      {editMode && (
        <div className="edit-mode">
          <h4>Edit All Properties</h4>
          <div className="edit-form">
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={editData.name}
                onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={editData.email}
                onChange={(e) => setEditData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div>
              <label>Age:</label>
              <input
                type="number"
                value={editData.profile.age}
                onChange={(e) => setEditData(prev => ({
                  ...prev,
                  profile: { ...prev.profile, age: parseInt(e.target.value) || 0 }
                }))}
              />
            </div>
            <div>
              <label>Location:</label>
              <input
                type="text"
                value={editData.profile.location}
                onChange={(e) => setEditData(prev => ({
                  ...prev,
                  profile: { ...prev.profile, location: e.target.value }
                }))}
              />
            </div>
            <div className="edit-actions">
              <button onClick={handleEditSave}>Save All</button>
              <button onClick={handleEditCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="code-explanation">
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Object state</strong> - Managing complex object structures</li>
          <li><strong>Immutable updates</strong> - Spread operator for nested updates</li>
          <li><strong>Nested state</strong> - Updating deeply nested properties</li>
          <li><strong>State structure</strong> - Organizing related data together</li>
          <li><strong>Bulk updates</strong> - Editing multiple properties at once</li>
        </ul>
      </div>
    </div>
  );
}
