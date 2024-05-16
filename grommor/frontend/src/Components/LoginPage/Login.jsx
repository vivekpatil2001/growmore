import axios from 'axios';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import Payment from '../../Razorpay/Payment';
import Admin from '../Admin/Admin';
import PaymentSuccess from '../../Razorpay/PaymentSuccess';

const Home = ({ phoneNumber, referralCode, setPhoneNumber, sendData, setReferralCode, otp, handleVerifyOtp, setOtp }) => {
  return (

    <div className="bg-blue-100 py-6 h-full w-full ">
      {/* <main className="m-auto w-full max-w-md py-24 px-12 text-center text-2xl"> */}

      <div className='w-1/3 h-full bg-[#f5f5f5] p-20 m-auto '>
        <div className='w-full flex flex-col'>
          <div className='w-full flex flex-col mb-3'>
            <h3 className='text-3xl font-semibold mb-5'>Registration</h3>
            <p className='text-sm md-2'>Welcome! Please enter your details.</p>
          </div>
          <div className='w-full flex flex-col'>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter email"
              className="w-full text-black my-4 bg-transparent py-4 border-b border-black outline-none focus:outline"
              required
            />

            <input
              type="text"
              id="referral"
              name="referral"
              placeholder="Referral (optional)"
              className="w-full text-black my-4 bg-transparent py-4 border-b border-black outline-none focus:outline"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
            />
          </div>

          <div className='w-full flex items-center'>
            <div className='w-full flex items-center'>
              <input type="checkbox" id="remember" name="remember" className="text-black text-sm" required />
              <label htmlFor="remember" className="text-black text-sm">
                &nbsp; I accept the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
              </label>

            </div>


          </div>


          <div className='w-full flex flex-col my-4'>
            <button className='w-full my-2 text-white bg-[#060606] rounded-md p-4 text-center flex itmes-center justify-center'>Get OTP</button>

          </div>

          <p className="text-sm font-normal text-[#060606]">
            By creating an account you agree to our <br />
            <a className="font-semibold underline underline-offset-2 cursor-pointer" href="#">
              Terms of Service
            </a>{" "}
            and
            <a className="font-semibold underline underline-offset-2 cursor-pointer" href="#">
              {" "}
              Privacy Policy
            </a>
          </p>
        </div>


      </div>


      <div className="mt-8">
        <h1>Verify OTP</h1>
        <label>
          OTP:
          <input type="number" value={otp} name="otp" onChange={(e) => setOtp(e.target.value)} className="border border-black rounded-lg px-4 py-2 text-xl mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </label>
        <button
          onClick={handleVerifyOtp}
          className="border border-black bg-orange-400 hover:bg-orange-600 rounded-xl py-2 px-6 w-full mt-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Verify OTP
        </button>
      </div>
      {/* </main> */}
    </div>
  );
};

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [otp, setOtp] = useState('');

  const sendData = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({
      phoneNumber,
      referralCode
    });
    try {
      const response = await axios.post('http://localhost:5000/user/register', body, config);
      const data = response.data;
      alert(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    if (!otp || !phoneNumber) {
      alert('Mobile number or OTP are missing');
    }
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({
      mobileNumber: phoneNumber,
      otp: otp
    });
    try {
      const response = await axios.post('http://localhost:5000/user/verify', body, config);
      const data = response.data;
      alert(data.message);
      if (data.success === true) {
        window.location.href = 'http://localhost:5173/dashboard';
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home phoneNumber={phoneNumber} referralCode={referralCode} setPhoneNumber={setPhoneNumber} setReferralCode={setReferralCode} sendData={sendData} otp={otp} handleVerifyOtp={handleVerifyOtp} setOtp={setOtp} />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/history" element={<Admin />} />
      <Route path="/paymentSuccess" element={<PaymentSuccess />} />
    </Routes>
  );
}

export default Login;
