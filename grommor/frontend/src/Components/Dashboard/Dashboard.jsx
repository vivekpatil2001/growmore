import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

import { useEffect, useState } from "react";
import Payment from "../../Razorpay/Payment";
import reffer from "./Images/reffer.png";
import reffer2 from "./Images/reffer2.webm";
import { FaUserCheck } from "react-icons/fa6";
import { TbArrowsRightLeft } from "react-icons/tb";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaInstagram, FaTelegram } from "react-icons/fa";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const getUserDashboard = async () => {
  try {
    const response = await axios.get("http://localhost:5000/user/dashboard");
    console.log(response);
  } catch (error) {
    alert(error.message);
  }
};

console.log(user);
function Dashboard() {
  // useEffect(() => {
  //   getUserDashboard();
  // }, [])

  // State to track the current mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle between dark and light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <Navbar />

      <section className="container flex flex-col md:flex-row items-center justify-around">
        <div className="w-full md:w-1/2 p-4 md:m-auto">
          <div className="m-2 w-full">
            <h1 className="text-red-500 mb-4 text-3xl">🎉 Exciting News! 🎉</h1>
            <p className="text-black">
              Stay updated with the latest announcements, exclusive offers, and
              insider insights by joining our Telegram channel{" "}
              <a href="https://t.me/big_bull_refer_and_earn" target="/blank">
                Join
              </a>
              . It's your passport to staying ahead of the curve and maximizing
              your earning potential. Don't miss out – join us on Telegram today
              and let the referral rewards begin! ✨
            </p>
          </div>
          <div>
            <img src={reffer} className="w-96 ml-36" alt="" />
          </div>
        </div>
        <div className="container m-3 flex justify-center items-center flex-col w-full md:w-1/2">
          <div>
            <h2 className="text-red-500">Join Announcement Channel</h2>
            <a
              href="https://t.me/big_bull_refer_and_earn"
              className="text-lg flex items-center"
              target="/blank"
            >
              <FaTelegram className="h-6 w-6 mr-2" />
              https://t.me/big_bull_refer_and_earn
            </a>
          </div>
          <video
            controls
            autoPlay
            loop
            width="500"
            height="300"
            className="video"
          >
            <source src={reffer2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <div
        className={`container mx-auto h-screen  px-4 py-8 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex justify-end">
          <h1
            className={`text-3xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          ></h1>
          {/* <button
            className={`px-4 py-2 rounded-md m-0 p-0 ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}
            onClick={toggleDarkMode}
          >
            {darkMode ? " Light Mode" : " Dark Mode"}
          </button> */}
        </div>

    
        <div className="min-h-full mx-auto max-w-7xl py-6 mt-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
            {/* Total Rpin Balance Card */}
            <div
              className={`bg-${
                darkMode ? "gray-800" : "gray-100"
              } rounded-lg shadow-lg p-6`}
            >
              <h2
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Total Rpin Balance
              </h2>
              <p
                className={`text-3xl ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              >
                $1000
              </p>
            </div>

            {/* ID Created today Card */}
            <div
              className={`bg-${
                darkMode ? "gray-800" : "gray-100"
              } rounded-lg shadow-lg p-6`}
            >
              <h2
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                ID Created{" "}
              </h2>
              <p
                className={`text-3xl ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              >
                20
              </p>
            </div>

            {/* Total Referrals Card */}
            <div
              className={`bg-${
                darkMode ? "gray-800" : "gray-100"
              } rounded-lg shadow-lg p-6`}
            >
              <h2
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Total Referrals
              </h2>
              <p
                className={`text-3xl ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              >
                50
              </p>
            </div>

            {/* Total Income Card */}
            <div
              className={`bg-${
                darkMode ? "gray-800" : "gray-100"
              } rounded-lg shadow-lg p-6`}
            >
              <h2
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Total Income
              </h2>
              <p
                className={`text-3xl ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              >
                $5000
              </p>
            </div>
          </div>
          <div>{/* Referrals Table */}</div>
        </div>
      </div>

      <Payment />
    </div>
  );
}

export default Dashboard;
