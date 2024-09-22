import React, { useState } from 'react';
import { signInWithPopup, provider, auth } from '../firebase/firebaseConfig';

const GoogleSignIn = ({ setUser }) => {
  const [error, setError] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user.email); // Send email to parent component
    } catch (error) {
      setError('Failed to sign in with Google');
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default GoogleSignIn;
