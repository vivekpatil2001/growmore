import Navbar from "../Navbar/Navbar";
import Cards from "../Cards/Cards.jsx";
import { useState } from "react";
import { FaClipboard } from "react-icons/fa";

function Dashboard() {
  const [user] = useState([
    {
      name: "Adeel Solangi",
      language: "Sindhi",
      id: "V59OF92YF627HFY0",
      bio: "Donec",
      version: 6.1,
    },
    {
      name: "Afzal Ghaffar",
      language: "Sindhi",
      id: "ENTOCR13RSCLZ6KU",
      bio: "Aliquam",
      version: 1.88,
    },
    {
      name: "Aamir Solangi",
      language: "Sindhi",
      id: "IAKPO3R4761JDRVG",
      bio: "Vestibulum ",
      version: 7.27,
    },
    {
      name: "Abla Dilmurat",
      language: "Uyghur",
      id: "5ZVOEPMJUI4MB4EN",
      bio: "Donec ",
      version: 2.53,
    },
    {
      name: "Adil Eli",
      language: "Uyghur",
      id: "6VTI8X6LL0MMPJCC",
      bio: "Vivamus",
      version: 6.49,
    },
  ]);

  const referralCode = "ABC123XYZ";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode).then(
      () => {
        alert("Referral code copied to clipboard!");
      },
      (err) => {
        alert("Failed to copy the referral code!");
      }
    );
  };

  return (
    <div className="bg-white text-black">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <Cards icon="faSackDollar" name="Total Rpin Balance" money="$1000" />
            <br/>
            <Cards icon="faIdCard" name="ID Created" money="20" />
          </div>
          <div>
            <Cards icon="faRecycle" name="Total Referrals" money="50" /><br/>
            <Cards icon="faDollarSign" name="Total Income" money="$5000" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:ml-96 lg:grid-cols-4 gap-6">
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
            <h2 className="font-bold text-2xl mb-4">My Referral Code</h2>
            <div className="bg-white px-4 py-2 rounded-md shadow-md text-xl font-semibold flex items-center justify-center sm:justify-start">
              <span>{referralCode}</span>
              <FaClipboard
                className="ml-2 cursor-pointer"
                onClick={copyToClipboard}
                title="Copy to clipboard"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
