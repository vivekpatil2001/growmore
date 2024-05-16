import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import Cards from "../Cards/Cards.jsx";
import { useEffect, useState } from "react";
import Payment from "../../Razorpay/Payment";
import reffer from "./Images/reffer.png";
import reffer2 from "./Images/reffer2.webm";
import { FaUserCheck } from "react-icons/fa6";
import { TbArrowsRightLeft } from "react-icons/tb";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faRecycle } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
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

  const [user, setUser] = useState([
    {
      "name": "Adeel Solangi",
      "mobile": "Sindhi",
      "id": "V59OF92YF627HFY0",
      "email": "Donec",
      "totalAmount": 6.1
    },
    {
      "name": "Afzal Ghaffar",
      "mobile": "Sindhi",
      "id": "ENTOCR13RSCLZ6KU",
      "email": "Aliquam",
      "totalAmount": 1.88
    },
    {
      "name": "Aamir Solangi",
      "mobile": "Sindhi",
      "id": "IAKPO3R4761JDRVG",
      "email": "Vestibulum ",
      "totalAmount": 7.27
    },
    {
      "name": "Abla Dilmurat",
      "mobile": "Uyghur",
      "id": "5ZVOEPMJUI4MB4EN",
      "email": "Donec ",
      "totalAmount": 2.53
    },
    {
      "name": "Adil Eli",
      "mobile": "Uyghur",
      "id": "6VTI8X6LL0MMPJCC",
      "email": "Vivamus",
      "totalAmount": 6.49
    }
  ])
  return (
    <div>
      <Navbar />

      {/* <section className="container flex flex-col md:flex-row items-center justify-around">
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
      </section> */}
      {/* 
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
          <button
            className={`px-4 py-2 rounded-md m-0 p-0 ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}
            onClick={toggleDarkMode}
          >
            {darkMode ? " Light Mode" : " Dark Mode"}
          </button>
        </div>

    
        <div className="min-h-full mx-auto max-w-7xl py-6 mt-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
            Total Rpin Balance Card
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

            ID Created today Card
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

            Total Referrals Card
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

            Total Income Card
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
          <div>Referrals Table</div>
        </div>
      </div> */}


      {/* <Payment /> */}

      <div className="bg-blue-100  ">
        <div className="bg-[#f5f5f5] py-10 mx-5 flex ">
          <Cards icon={faSackDollar} name={`Total Rpin Balance`} money={`  $1000`} />
          <Cards icon={faIdCard} name={`ID Created`} money={` 20`} />
          <Cards icon={faRecycle} name={` Total Referrals`} money={` 50`} />
          <Cards icon={faDollarSign} name={` Total Income`} money={`  $5000`} />
        </div>

      </div>

      <div className="bg-blue-100 py-5">
        <div className="table-data bg-[#f5f5f5]  mx-5 py-6">



          <table>
            <thead>
              <tr>

                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                user.map((users, i) => {
                  const { name, id, mobile, email, totalAmount } = users
                  return (
                    <>
                      <tr>

                        <td>{name}</td>
                        <td>{mobile}</td>
                        <td>{email}</td>
                        <td>{totalAmount}</td>
                      </tr>
                    </>
                  )
                })

              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
