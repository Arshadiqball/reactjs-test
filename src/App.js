import React, { useState } from 'react';
import './App.css';
import GoogleSignIn from './components/GoogleSignIn.js';
import OtpDisplay from './components/OtpDisplay.js';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <h1>Google Sign-In with OTP</h1>
      {!user ? (
        <GoogleSignIn setUser={setUser} />
      ) : (
        <OtpDisplay email={user} />
      )}
    </div>
  );
}

export default App;
