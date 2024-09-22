import React, { useState, useEffect } from 'react';

const generateOtp = (length) => {
  const characters = '0123456789';
  let otp = '';
  const randomValues = new Uint32Array(length);
  window.crypto.getRandomValues(randomValues); // Browser native crypto API
  for (let i = 0; i < length; i++) {
    otp += characters[randomValues[i] % characters.length];
  }
  return otp;
};

const OtpDisplay = ({ email }) => {
  const [otp, setOtp] = useState('');
  const [expiry, setExpiry] = useState(30); // 30 seconds expiry

  useEffect(() => {
    if (email) {
      // Generate OTP when email is available
      const generatedOtp = generateOtp(6); // Generate a 6-digit OTP
      setOtp(generatedOtp);

      // Countdown timer for OTP expiration
      const interval = setInterval(() => {
        setExpiry((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      // Cleanup
      return () => clearInterval(interval);
    }
  }, [email]);

  return (
    <div>
      {email && (
        <div>
          <h3>OTP for {email}</h3>
          <p>OTP: {otp}</p>
          {expiry > 0 ? <p>Expires in: {expiry} seconds</p> : <p>OTP expired</p>}
        </div>
      )}
    </div>
  );
};

export default OtpDisplay;
