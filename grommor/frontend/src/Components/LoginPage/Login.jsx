import axios from 'axios';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import Payment from '../../Razorpay/Payment';
import Admin from '../Admin/Admin';
import PaymentSuccess from '../../Razorpay/PaymentSuccess';

const Home = ({ phoneNumber, referralCode, setPhoneNumber, sendData, setReferralCode, otp, handleVerifyOtp, setOtp }) => {
  return (
    <div className="bg-blue-100 h-full w-full">
      <main className="m-auto w-full max-w-md py-24 px-12 text-center text-2xl">
        <header className="text-center text-3xl font-bold py-4">
          <h1>Registration page</h1>
        </header>
        <form className="rounded-lg px-8 py-10 w-96 bg-white shadow-lg" id="form1">
          <img src="../../../assets/image.jpg" alt="" className="h-32 w-auto mx-auto mb-6" />
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            className="border border-black rounded-lg my-3 px-4 py-2 text-xl mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            minLength={10}
            maxLength={10}
            required
          />
          <input
            type="text"
            id="referral"
            name="referral"
            placeholder="Referral (optional)"
            className="border border-black rounded-lg px-4 py-2 text-xl mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            minLength={10}
            maxLength={15}
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
          />

          <div>
            <input type="checkbox" id="remember" name="remember" className="text-black text-sm" required />
            <label htmlFor="remember" className="text-black text-sm">
              &nbsp; I accept the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>

          <Link to="/verify">
            <button
              type="button"
              className="border border-black bg-orange-400 hover:bg-orange-600 rounded-xl py-2 px-6 w-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onClick={sendData}
            >
              Get OTP
            </button>
          </Link>

          <p className="text-sm text-gray-900 mt-4">
            By creating an account you agree to our <br />
            <a className="hover:text-green-600" href="#">
              Terms of Service
            </a>{" "}
            and
            <a className="hover:text-green-600" href="#">
              {" "}
              Privacy Policy
            </a>
          </p>
        </form>

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
      </main>
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
