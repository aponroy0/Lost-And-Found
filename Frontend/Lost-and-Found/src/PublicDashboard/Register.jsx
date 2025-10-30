import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



function Register() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    HashPassword: '',
    Phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const navigate = useNavigate();
     
    try{

        const response = await fetch("https://localhost:44335/api/user/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(formData),
        })
        
        if(!response.ok){
            throw new Error(`Http Error Status: ${response.status}`)
        }
        const data = await response.json();
        console.log("Registration Successful! ", data);
        alert("Registration Successful! ");
        navigate("/");
    }
    catch(error)
    {
        console.log("Error submitting the registration :", error)
        alert("Registration Failed! ")
    } 
  };

  const handleGoogleRegister = () => {
    console.log('Google register clicked');
    // Add your Google register logic here later
  };

  return (
    <div style={{ backgroundColor: "oklch(27.8% 0.033 256.848)" }}
      className="min-h-screen flex items-center justify-center px-6 py-12">
      <main className="w-full max-w-lg">
        <form 
          onSubmit={handleSubmit}
          style={{ backgroundColor: "oklch(37.3% 0.034 259.733)" }}
          className="rounded-2xl p-6 shadow-2xl">

          <h2 className="text-2xl font-bold text-white mb-6 text-center">Create Account</h2>

          {/* This is for Name */}
          <div className="mb-4">
            <label 
              htmlFor="NameID"
              className="block text-sm font-medium text-gray-200 mb-2">
              Name:
            </label>
            <input
              type="text"
              id="NameID"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="e.g., Apon Ahmed"
            />
          </div>

          {/* This is for Email */}
          <div className="mb-4">
            <label 
              htmlFor="EmailID"
              className="block text-sm font-medium text-gray-200 mb-2">
              Email:
            </label>
            <input
              type="email"
              id="EmailID"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="e.g., apon123@gmail.com"
            />
          </div>

          {/* This is for Password */}
          <div className="mb-4">
            <label 
              htmlFor="PasswordID"
              className="block text-sm font-medium text-gray-200 mb-2">
              Password:
            </label>
            <input
              type="password"
              id="PasswordID"
              name="HashPassword"
              value={formData.HashPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          {/* This is for Phone */}
          <div className="mb-4">
            <label 
              htmlFor="PhoneID"
              className="block text-sm font-medium text-gray-200 mb-2">
              Phone:
            </label>
            <input
              type="tel"
              id="PhoneID"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="e.g., +880 1234-567890"
            />
          </div>

          <button
            type="submit"
            className="w-full border border-white bg-slate-800 hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
            Register
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-500"></div>
            <span className="px-4 text-gray-400 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-500"></div>
          </div>

          {/* Google Register Button */}
          <button
            type="button"
            onClick={handleGoogleRegister}
            className="w-full bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          {/* Link to Login */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium">
              Login here
            </Link>
          </p>
        </form>
      </main>
    </div>
  )
}

export default Register