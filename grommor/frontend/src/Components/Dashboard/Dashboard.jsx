import Navbar from "../Navbar/Navbar";
import { useState,useEffect } from "react";
import { FaClipboard } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";

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
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
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
            <div className="h-14 shadow rounded-xl flex border justify-between *:px-4 items-center">
              <p className="font-semibold">rPIN Balance</p>
              <div className="h-full text-white bg-green-500 rounded-r-xl"><p>Total</p><p>0</p></div>
            </div>
            <br/>
            <div className="flex flex-col gap-2">
              <p className="text-center font-medium">Create ID will start in</p>
              <p className="text-center">{seconds}</p>
            </div>
            <br/>
            <div className="h-14 shadow bg-green-200 rounded-xl flex border justify-between *:px-4 items-center">
              <p className="font-semibold">IDs Created Today</p>
              <p>0</p>
            </div>
          </div>
          <div>
          <div className="h-14 bg-green-200 rounded-xl flex border justify-between *:px-4 items-center">
              <p className="font-semibold">Total Referrals</p>
              <p>0</p>
            </div>
            <br/>
            <div className="h-14 bg-green-200 rounded-xl flex border justify-between *:px-4 items-center">
            <div className="flex gap-2 items-center">
              <p><FaWallet size="2em"/></p>
              <p className="font-semibold">Total Income</p>
            </div>
              <p>₹0</p>
            </div>
          </div>
        </div>

        <div>
          <p className="font-medium">My Refferal Code</p>
          <div className="flex justify-between border bg-green-200 rounded-xl p-1 px-3 h-14 items-center">
            <p className="ml-2">{referralCode}</p>
            <button className="bg-green-500 text-white p-1.5 rounded">Copy</button>
          </div>
        </div>


        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:ml-96 lg:grid-cols-4 gap-6">
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
            <h2 className="font-bold text-2xl mb-4">My Referral Code</h2>
            <div className="bg-white px-4 py-2 rounded-md shadow-md font-semibold flex items-center justify-center sm:justify-start">
              <span>{referralCode}</span>
              <button className="ml-2 border rounded bg-green-500 "
                onClick={copyToClipboard}
                title="Copy to clipboard"
              >Copy</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
