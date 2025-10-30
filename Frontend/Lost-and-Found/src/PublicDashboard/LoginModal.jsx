import { X } from "lucide-react";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function LoginModal({ onClose }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://localhost:44335/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      Cookies.set("token", res.TokenKey, { expires: 1 / 1440, secure: true });
      Cookies.set("userID", JSON.stringify(res.UserId), { expires: 1 / 1440});

      if (res) navigate("/");
    } catch (error) {
      console.log("Error Fetching error: ", error);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  // onClose to redirect to home page
  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 flex items-start justify-center bg-black/60 backdrop-blur-sm z-50">
      {/* Added margin-top for spacing */}
      <div
        className="rounded-3xl shadow-2xl w-[450px] overflow-hidden flex flex-col mt-20"
        style={{ backgroundColor: "oklch(37.3% 0.034 259.733)" }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Login</h2>
          <button
            onClick={handleClose}
            className="text-gray-300 hover:text-white transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="EmailID"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Email:
              </label>
              <input
                type="email"
                id="EmailID"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="e.g., apon123@gmail.com"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="PasswordID"
                className="block text-sm font-medium text-gray-200 mb-1"
              >
                Password:
              </label>
              <input
                type="password"
                id="PasswordID"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full border border-white bg-slate-800 hover:bg-gray-900 text-white font-medium py-2.5 rounded-lg transition-colors duration-200"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-gray-500"></div>
              <span className="px-3 text-gray-400 text-sm">OR</span>
              <div className="flex-1 border-t border-gray-500"></div>
            </div>

            {/* Google Login Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full bg-white hover:bg-gray-300 text-gray-800 font-medium py-2.5 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 p-3 flex justify-end"></div>
      </div>
    </div>
  );
}

export default LoginModal;
