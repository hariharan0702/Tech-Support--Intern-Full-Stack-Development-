import React, { useState } from "react";
import "./profile.css";
import * as yup from "yup";

const profileSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup
    .number()
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .required("Age is required"),
  gender: yup.string().required("Gender is required"),
  dob: yup.string().required("Date of Birth is required"),
  mobile: yup.string().required("Mobile is required"),
});

const Profile = (props) => {
  const [profile, setProfile] = useState({});
  const [isEditing, setIsEditing] = useState(true);
  const [validationErrors, setValidationErrors] = useState({});

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    profileSchema
      .validate(profile, { abortEarly: false })
      .then(() => {
        setIsEditing(false);
        setValidationErrors({});
      })
      .catch((err) => {
        const errors = {};
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setValidationErrors(errors);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleLogout = () => {
    props?.setUser(false);
  };

  return (
    <div className="profile-container">
      <div className="card">
        <h1>Profile Page</h1>
        <div className="profile-content">
          {isEditing ? (
            <div className="profile-form">
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                />
                {validationErrors.name && (
                  <span className="error">{validationErrors.name}</span>
                )}
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                />
                {validationErrors.email && (
                  <span className="error">{validationErrors.email}</span>
                )}
              </div>
              <div>
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={profile.age}
                  onChange={handleInputChange}
                />
                {validationErrors.age && (
                  <span className="error">{validationErrors.age}</span>
                )}
              </div>
              <div>
                <label htmlFor="gender">Gender:</label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={profile.gender}
                  onChange={handleInputChange}
                />
                {validationErrors.gender && (
                  <span className="error">{validationErrors.gender}</span>
                )}
              </div>
              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  value={profile.dob}
                  onChange={handleInputChange}
                />
                {validationErrors.dob && (
                  <span className="error">{validationErrors.dob}</span>
                )}
              </div>
              <div>
                <label htmlFor="mobile">Mobile:</label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={profile.mobile}
                  onChange={handleInputChange}
                />
                {validationErrors.mobile && (
                  <span className="error">{validationErrors.mobile}</span>
                )}
              </div>
            </div>
          ) : (
            <div className="profile-info">
              <div>
                <strong>Name:</strong> {profile.name}
              </div>
              <div>
                <strong>Email:</strong> {profile.email}
              </div>
              <div>
                <strong>Age:</strong> {profile.age}
              </div>
              <div>
                <strong>Gender:</strong> {profile.gender}
              </div>
              <div>
                <strong>Date of Birth:</strong> {profile.dob}
              </div>
              <div>
                <strong>Mobile:</strong> {profile.mobile}
              </div>
            </div>
          )}
          <div className="profile-actions">
            {isEditing ? (
              <button onClick={handleSaveClick}>Save</button>
            ) : (
              <button onClick={handleEditClick}>Edit</button>
            )}{" "}
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
