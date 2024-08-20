
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCoins, faMessage, faBlog } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="navbar-item">
         
          <h1>SkillHub</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="navbar-item">
          <FontAwesomeIcon icon={faMessage} size="2x" />
          <span>Answer</span>
        </div>
        <div className="navbar-item">
          <FontAwesomeIcon icon={faMessage} size="2x" />
          <span>Question</span>
        </div>
        <div className="navbar-item">
          <FontAwesomeIcon icon={faBlog} size="2x" />
          <span>Blogs</span>
        </div>
        <div className="navbar-item">
          <FontAwesomeIcon icon={faUser} size="2x" />
          <span>Profile</span>
        </div>

        <div className="navbar-item">
          <FontAwesomeIcon icon={faCoins} size="2x" />
          <span>Score</span>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
