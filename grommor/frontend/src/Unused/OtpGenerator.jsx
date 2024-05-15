import { useState } from 'react';
import axios from 'axios';

const OTPGenerator = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationResult, setVerificationResult] = useState('');

  const generateOTP = async () => {
    try {
      const response = await axios.post('http://localhost:3000/generateOTP', {
        phoneNumber: phoneNumber
      });
      setOtp(response.data.otp);
      console.log('OTP generated:', response.data.otp);
    } catch (error) {
      console.error('Error generating OTP:', error.message);
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await axios.post('http://localhost:3000/verifyOTP', {
        phoneNumber: phoneNumber,
        otp: verificationCode
      });
      setVerificationResult(response.data.status === 'success' ? 'Verified' : 'Not Verified');
    } catch (error) {
      console.error('Error verifying OTP:', error.message);
    }
  };

  return (
    <div className="container mx-auto max-w-lg mt-10">
      <h1 className="text-3xl font-bold mb-6">OTP Generator and Verifier</h1>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="phoneNumber">Phone Number:</label>
        <input
          id="phoneNumber"
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter Phone Number"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button onClick={generateOTP} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">Generate OTP</button>
      {otp && (
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="verificationCode">Enter OTP:</label>
          <div className="flex space-x-2">
            {otp.split('').map((digit, index) => (
              <input
                key={index}
                type="text"
                value={verificationCode[index] || ''}
                maxLength={1}
                onChange={(e) => {
                  const newVerificationCode = [...verificationCode];
                  newVerificationCode[index] = e.target.value;
                  setVerificationCode(newVerificationCode);
                }}
                className="w-1/6 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            ))}
          </div>
        </div>
      )}
      <button onClick={verifyOTP} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">Verify OTP</button>
      {verificationResult && <p>{verificationResult}</p>}
    </div>
  );
};

export default OTPGenerator;
