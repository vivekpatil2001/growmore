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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSackDollar, faIdCard, faRecycle, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const getUserDashboard = async () => {
  try {
    const response = await axios.get("http://localhost:5000/user/dashboard");
    console.log(response);
  } catch (error) {
    alert(error.message);
  }
};

function Dashboard() {
  const [user, setUser] = useState([
    {
      "name": "Adeel Solangi",
      "language": "Sindhi",
      "id": "V59OF92YF627HFY0",
      "bio": "Donec",
      "version": 6.1
    },
    {
      "name": "Afzal Ghaffar",
      "language": "Sindhi",
      "id": "ENTOCR13RSCLZ6KU",
      "bio": "Aliquam",
      "version": 1.88
    },
    {
      "name": "Aamir Solangi",
      "language": "Sindhi",
      "id": "IAKPO3R4761JDRVG",
      "bio": "Vestibulum ",
      "version": 7.27
    },
    {
      "name": "Abla Dilmurat",
      "language": "Uyghur",
      "id": "5ZVOEPMJUI4MB4EN",
      "bio": "Donec ",
      "version": 2.53
    },
    {
      "name": "Adil Eli",
      "language": "Uyghur",
      "id": "6VTI8X6LL0MMPJCC",
      "bio": "Vivamus",
      "version": 6.49
    }
  ]);

  return (
    <div className="bg-white text-black">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20 gap-6 mr-8 mb-8">
          <Cards icon={faSackDollar} name="Total Rpin Balance" money="$1000" />
          <Cards icon={faIdCard} name="ID Created" money="20" />
          <Cards icon={faRecycle} name="Total Referrals" money="50" />
          <Cards icon={faDollarSign} name="Total Income" money="$5000" />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Language</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bio</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Version</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {user.map((user, i) => (
                <tr key={i}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.language}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.bio}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.version}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
