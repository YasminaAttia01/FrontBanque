import "./Style/pwdmanag.css";
import React, { useState } from "react";

const SecuritySettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement password update logic
  };

  return (
    <div className="SecuritySettings-container">
      <div className="SecuritySettings-heading">
        <h4>Security Settings</h4>
      </div>

      <div className="SecuritySettings-divider"></div>

      <div className="SecuritySettings-content">
        <div className="SecuritySettings-subheading">
          <h6>Reset Password</h6>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="SecuritySettings-field">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div className="SecuritySettings-field">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="SecuritySettings-field">
            <label htmlFor="confirmNewPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="SecuritySettings-field">
            <button
              className="SecuritySettings-button"
              type="submit"
              disabled={
                !currentPassword ||
                !newPassword ||
                newPassword !== confirmNewPassword
              }
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SecuritySettings;
