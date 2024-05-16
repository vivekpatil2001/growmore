import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div className="px-4 py-6 bg-blue-100 border-b">
            <div className="navbar py-6 px-5 bg-[#f5f5f5] flex gap-3 text-center justify-between text-xl  ">

                
                <ul className="flex gap-3 text-center ">
                    
                    <Link to="/dashboard">
                        <li>Dashboard</li>
                    </Link>
                </ul>
               

        
            </div>
        </div>
    )
}

export default Navbar;