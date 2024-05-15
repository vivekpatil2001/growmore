
import { useState } from "react";
import Navbar from '../Navbar/Navbar.jsx';

function Admin() {
  // Dummy data for testing

  const initialUsers = [
    { handle: 1, name: "John Doe", email: "john@example.com", access: "Admin", status: "Active" },
    { handle: 2, name: "Jane Doe", email: "jane@example.com", access: "User", status: "Inactive" },
    { handle: 3, name: "Bob Smith", email: "bob@example.com", access: "User", status: "Active" },
    { handle: 4, name: "Alice Johnson", email: "alice@example.com", access: "Admin", status: "Inactive" },
  ];

  // State to store users
  const [users, setUsers] = useState(initialUsers);

  // State to track the current mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle between dark and light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Function to filter users by status
  const filterUsersByStatus = (status) => {
    const filteredUsers = initialUsers.filter(user => user.status === status);
    setUsers(filteredUsers);
  };

  // Function to reset user list
  const resetUserList = () => {
    setUsers(initialUsers);
  };

  return (
    <>
      <Navbar />
      <div className={`container mx-auto h-screen px-4 py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div className='flex justify-end'>
          <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}></h1>
          <button
            className={`px-4 py-2 rounded-md m-0 p-0 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
            onClick={toggleDarkMode}
          >
            {darkMode ? ' Light Mode' : ' Dark Mode'}
          </button>
        </div>
        <h1 className="text-center text-3xl font-bold">Admin Panel</h1>
        <div className="container mx-auto px-4 py-8 mt-12">

          <div className="flex justify-around mb-8">
            <div className="w-1/3">
              <h2 className="text-2xl font-semibold mb-2 text-center">Users</h2>
              <div className={`bg-${darkMode ? 'gray-800' : 'gray-100'} shadow-md rounded-md p-6 hover:shadow-lg`}>
                <p className="text-xl font-semibold  text-center">Total Users</p>
                <p className="text-4xl font-bold text-center mt-4">{users.length}</p>
              </div>
            </div>

            <div className="w-1/3">
              <h2 className="text-2xl font-semibold mb-2 text-center">Company Profit</h2>
              <div className={`bg-${darkMode ? 'gray-800' : 'gray-100'} shadow-md rounded-md p-6 hover:shadow-lg`}>
                <p className="text-xl font-semibold text-center">Total Profit</p>
                <p className="text-4xl font-bold text-center mt-4">$10,000</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="black">
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Role</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                {/* Map through users and render table rows */}
                {users.map((user) => (
                  <tr key={user.handle} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-2 font-medium border shadow-md">{user.name}</td>
                    <td className="px-4 py-2 border shadow-md">{user.email}</td>
                    <td className="px-4 py-2 text-zinc-500 border shadow-md">{user.access}</td>
                    <td className="px-4 py-2 border shadow-md">{user.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
