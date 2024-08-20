import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css';

function UserProfile() {
  const { name } = useParams(); 
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    fetch(`/user/${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>{error}</p>;
  if (!profile) return <p>User profile not found.</p>;

  return (
    <div className="profile-container">
    <h2>{profile.name}'s Profile</h2>
    <div className="profile-info">
      <p><strong>Current Job/Role:</strong> {profile.currentJobRole}</p>
      <p><strong>Location:</strong> {profile.location}</p>
      <p><strong>Brief Bio:</strong> {profile.briefBio}</p>
      <p><strong>Description:</strong> {profile.description}</p>
      <p><strong>Proficiency Level:</strong> {profile.proficiencyLevel}</p>
      <p><strong>How Acquired:</strong> {profile.howAcquired}</p>
      <p><strong>Education:</strong> {profile.education}</p>
    </div>
  </div>
  );
}

export default UserProfile;
