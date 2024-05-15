import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div className="px-4 py-5 bg-gray-100 border-b">
            <nav className="navbar flex gap-3 text-center justify-between text-xl">

                <div></div>
                <ul className="flex gap-3 text-center ">
                    
                    <Link to="/dashboard">
                        <li>Dashboard</li>
                    </Link>
                    <Link to="/history">
                        <li>History</li>
                    </Link>

                    

                </ul>
                <div>
                    <button 
                    className="border-blue-400 rounded border mx-3 px-3 py-1 bg-blue-400 hover:bg-blue-600"
                    >
                    <Link to="/"> sign in </Link>
                   </button>
                    
                </div>

        
            </nav>
        </div>
    )
}

export default Navbar;