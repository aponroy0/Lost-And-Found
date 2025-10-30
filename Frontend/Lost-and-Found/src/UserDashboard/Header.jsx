import { AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

function Header({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();
  const Token = Cookies.get("token");

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("userID");
    navigate("/"); // redirect to home after logout
  };

  const handleSignup = () => {
    navigate("/register"); // go to signup page
  };

  return (
    <header
      style={{ backgroundColor: 'oklch(37.3% 0.034 259.733)' }}
      className="text-white shadow-lg sticky top-0 z-50"
    >
      <div className="flex items-center justify-between px-6 py-2">
        {/* Left - Logo */}
        <div className="flex items-center gap-3 w-64">
          <AlertCircle size={24} />
          <h1 className="text-xl font-bold">Lost & Found</h1>
        </div>

        {/* Center - Navigation Links */}
        <nav className="flex gap-8 text-sm items-center justify-center flex-1">
          <Link to="/" className="hover:text-blue-300 transition">Home</Link>
          <Link to="/lost" className="hover:text-blue-300 transition">Lost</Link>
          <Link to="/found" className="hover:text-blue-300 transition">Found</Link>
          <Link to="/about" className="hover:text-blue-300 transition">About</Link>
        </nav>

        {/* Right - Report + Auth Buttons */}
        <div className="flex items-center gap-4 w-64 justify-end">
          {Token && (
            <Link
              to="/report"
              className="inline-flex items-center justify-center border border-white bg-slate-800 hover:bg-gray-900 px-4 py-1.5 rounded-lg transition font-medium whitespace-nowrap"
            >
              Report
            </Link>
          )}

          {Token ? (
            <button
              onClick={handleLogout}
              className="inline-flex items-center justify-center border border-white bg-slate-800 hover:bg-gray-900 px-4 py-1.5 rounded-lg transition font-medium whitespace-nowrap"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={handleSignup}
              className="inline-flex items-center justify-center border border-white bg-slate-800 hover:bg-gray-900 px-4 py-1.5 rounded-lg transition font-medium whitespace-nowrap"
            >
              Sign Up
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
