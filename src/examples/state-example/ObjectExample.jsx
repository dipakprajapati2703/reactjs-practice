/**
 * @component ObjectExample
 * @description Demonstrates complex object state management with nested updates.
 */
import { useState } from "react";
import "../../examples/modern-forms.css";

export default function ObjectExample() {
  const [user, setUser] = useState({
    name: "Dipak Prajapati",
    age: 25,
    email: "dipak@example.com",
    profile: {
      bio: "Full-stack developer passionate about React and modern web technologies",
      location: "Mumbai, India",
      website: "https://dipak.dev",
      preferences: {
        theme: "dark",
        language: "en",
        notifications: true
      }
    },
    settings: {
      privacy: "public",
      timezone: "Asia/Kolkata",
      currency: "INR"
    }
  });

  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({ ...user });

  // Update nested object properties
  const updateName = (newName) => {
    setUser(prev => ({
      ...prev,
      name: newName
    }));
  };

  const updateAge = (newAge) => {
    setUser(prev => ({
      ...prev,
      age: parseInt(newAge) || 0
    }));
  };

  const updateEmail = (newEmail) => {
    setUser(prev => ({
      ...prev,
      email: newEmail
    }));
  };

  const updateBio = (newBio) => {
    setUser(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        bio: newBio
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

  const updateWebsite = (newWebsite) => {
    setUser(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        website: newWebsite
      }
    }));
  };

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

  const updatePrivacy = (newPrivacy) => {
    setUser(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        privacy: newPrivacy
      }
    }));
  };

  const toggleEditMode = () => {
    if (editMode) {
      // Save changes
      setUser(editData);
    } else {
      // Enter edit mode
      setEditData({ ...user });
    }
    setEditMode(!editMode);
  };

  const handleEditChange = (path, value) => {
    const keys = path.split('.');
    setEditData(prev => {
      const newData = { ...prev };
      let current = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const cancelEdit = () => {
    setEditData({ ...user });
    setEditMode(false);
  };

  return (
    <div className="state-example">
      <h3>🏗️ Complex Object State Management</h3>
      <p>Managing nested objects with immutable updates and complex state structures.</p>

      {/* Quick Updates Section - First */}
      <div className="controls-section">
        <h4>🎛️ Quick Updates</h4>
        <div className="control-group">
          <label>Name:</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => updateName(e.target.value)}
            className="modern-input"
            placeholder="Enter new name"
          />
        </div>

        <div className="control-group">
          <label>Age:</label>
          <input
            type="number"
            value={user.age}
            onChange={(e) => updateAge(e.target.value)}
            className="modern-input"
            placeholder="Enter new age"
          />
        </div>

        <div className="control-group">
          <label>Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => updateEmail(e.target.value)}
            className="modern-input"
            placeholder="Enter new email"
          />
        </div>

        <div className="control-group">
          <label>Bio:</label>
          <input
            type="text"
            value={user.profile.bio}
            onChange={(e) => updateBio(e.target.value)}
            className="modern-input"
            placeholder="Enter new bio"
          />
        </div>

        <div className="control-group">
          <label>Location:</label>
          <input
            type="text"
            value={user.profile.location}
            onChange={(e) => updateLocation(e.target.value)}
            className="modern-input"
            placeholder="Enter new location"
          />
        </div>

        <div className="control-group">
          <label>Website:</label>
          <input
            type="url"
            value={user.profile.website}
            onChange={(e) => updateWebsite(e.target.value)}
            className="modern-input"
            placeholder="Enter new website"
          />
        </div>

        <div className="control-group">
          <label>Theme:</label>
          <select value={user.profile.preferences.theme} onChange={(e) => updateTheme(e.target.value)} className="modern-select">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </select>
        </div>

        <div className="control-group">
          <label>Language:</label>
          <select value={user.profile.preferences.language} onChange={(e) => updateLanguage(e.target.value)} className="modern-select">
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="gu">Gujarati</option>
          </select>
        </div>

        <div className="control-group">
          <label>Privacy:</label>
          <select value={user.settings.privacy} onChange={(e) => updatePrivacy(e.target.value)} className="modern-select">
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="friends">Friends Only</option>
          </select>
        </div>
      </div>

      {/* User Profile Section - Second */}
      <div className="user-display">
        <h4>👤 User Profile</h4>
        <div className="profile-section">
          <div className="profile-field">
            <strong>Name:</strong> {user.name}
          </div>
          <div className="profile-field">
            <strong>Age:</strong> {user.age}
          </div>
          <div className="profile-field">
            <strong>Email:</strong> {user.email}
          </div>
        </div>

        <h4>📝 Profile Details</h4>
        <div className="profile-section">
          <div className="profile-field">
            <strong>Bio:</strong> {user.profile.bio}
          </div>
          <div className="profile-field">
            <strong>Location:</strong> {user.profile.location}
          </div>
          <div className="profile-field">
            <strong>Website:</strong> <a href={user.profile.website} target="_blank" rel="noopener noreferrer">{user.profile.website}</a>
          </div>
        </div>

        <h4>⚙️ Preferences</h4>
        <div className="profile-section">
          <div className="profile-field">
            <strong>Theme:</strong> {user.profile.preferences.theme}
          </div>
          <div className="profile-field">
            <strong>Language:</strong> {user.profile.preferences.language}
          </div>
          <div className="profile-field">
            <strong>Notifications:</strong> {user.profile.preferences.notifications ? 'On' : 'Off'}
          </div>
        </div>

        <h4>🔒 Settings</h4>
        <div className="profile-section">
          <div className="profile-field">
            <strong>Privacy:</strong> {user.settings.privacy}
          </div>
          <div className="profile-field">
            <strong>Timezone:</strong> {user.settings.timezone}
          </div>
          <div className="profile-field">
            <strong>Currency:</strong> {user.settings.currency}
          </div>
        </div>
      </div>

      <div className="edit-form">
        <h4>✏️ Bulk Edit Mode</h4>
        <p>Edit multiple fields at once and save all changes together.</p>
        
        <div className="form-actions">
          <button onClick={toggleEditMode} className="modern-button primary">
            {editMode ? '💾 Save Changes' : '✏️ Enter Edit Mode'}
          </button>
          {editMode && (
            <button onClick={cancelEdit} className="modern-button secondary">
              ❌ Cancel
            </button>
          )}
        </div>

        {editMode && (
          <div className="edit-fields">
            <div className="control-group">
              <label>Name:</label>
              <input
                type="text"
                value={editData.name}
                onChange={(e) => handleEditChange('name', e.target.value)}
                className="modern-input"
                placeholder="Enter new name"
              />
            </div>

            <div className="control-group">
              <label>Age:</label>
              <input
                type="number"
                value={editData.age}
                onChange={(e) => handleEditChange('age', parseInt(e.target.value) || 0)}
                className="modern-input"
                placeholder="Enter new age"
              />
            </div>

            <div className="control-group">
              <label>Email:</label>
              <input
                type="email"
                value={editData.email}
                onChange={(e) => handleEditChange('email', e.target.value)}
                className="modern-input"
                placeholder="Enter new email"
              />
            </div>

            <div className="control-group">
              <label>Bio:</label>
              <input
                type="text"
                value={editData.profile.bio}
                onChange={(e) => handleEditChange('profile.bio', e.target.value)}
                className="modern-input"
                placeholder="Enter new bio"
              />
            </div>
          </div>
        )}
      </div>

      <div className="code-explanation">
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Nested objects</strong> - Complex state structures with multiple levels</li>
          <li><strong>Immutable updates</strong> - Spread operator for safe state updates</li>
          <li><strong>Deep cloning</strong> - Copying nested objects without mutations</li>
          <li><strong>Path-based updates</strong> - Dynamic property updates using string paths</li>
          <li><strong>Bulk editing</strong> - Edit multiple fields before saving</li>
        </ul>
      </div>
    </div>
  );
}
