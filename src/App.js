
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Nav';
import Body from './feed';
import Home from './home';
import Signup from './signup';
import Login from './login';
import ProfileForm from './profile';
import UserProfile from './user';

function App() {
  return (
    <Router>
      <div>
        
        <main>
       
          <Routes>
            <Route path="/" element={<Home />} />
          
            <Route path="/about" element={<div>
              <Navbar />
              <Body />
 
              </div>} />
            
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<ProfileForm/>}/>
            
            <Route path="/user/:name" element={<div>

              <Navbar />
              <UserProfile />
            </div>
              } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}



export default App;
