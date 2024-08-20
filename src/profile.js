import React, { useState } from 'react';
import './profile.css'; 
import { useNavigate } from 'react-router-dom';

function ProfileForm() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [currentJobRole, setCurrentJobRole] = useState('');
  const [location, setLocation] = useState('');
  const [briefBio, setBriefBio] = useState('');
  const [description, setDescription] = useState('');
  const [proficiencyLevel, setProficiencyLevel] = useState('');
  const [howAcquired, setHowAcquired] = useState('');
  const [education, setEducation] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        currentJobRole,
        location,
        briefBio,
        description,
        proficiencyLevel,
        howAcquired,
        education
      }),
    });

   
    
    const result = await response.json();

    if (response.ok) {
        setMessage(result.message);
        navigate('/login'); 
      } else {
        setMessage(result || "failed");
      }
    }
   

  

  return (
    <div className="profile-container">
      <h2 className="h2-cp">
        Create Profile
      </h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <input
          className="profile-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="profile-input"
          type="text"
          placeholder="Current Job/Role"
          value={currentJobRole}
          onChange={(e) => setCurrentJobRole(e.target.value)}
        />
        <input
          className="profile-input"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <textarea
          className="profile-input"
          placeholder="Brief Bio"
          value={briefBio}
          onChange={(e) => setBriefBio(e.target.value)}
        />
        <textarea
          className="profile-input"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="profile-input"
          type="text"
          placeholder="Proficiency Level"
          value={proficiencyLevel}
          onChange={(e) => setProficiencyLevel(e.target.value)}
        />
        <input
          className="profile-input"
          type="text"
          placeholder="How Acquired"
          value={howAcquired}
          onChange={(e) => setHowAcquired(e.target.value)}
        />
        <input
          className="profile-input"
          type="text"
          placeholder="Education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
        <button className="profile-button" type="submit">Submit</button>
      </form>
      <p className="profile-message">{message}</p>
    </div>
  );
}

export default ProfileForm;
