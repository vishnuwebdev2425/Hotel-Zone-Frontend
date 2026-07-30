import { useContext, useState } from "react";

import Cookies from "js-cookie";
import userContext from "../utils/userContext";
import { useNavigate } from "react-router-dom";

/**
 * Make sure your index.html or layout includes these fonts & Lucide icons (or your icon library of choice):
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">
 */

const HotelLogin = () => {
  const [data, setData] = useState({
    number: "",
    username: "",
  });

  const navigate=useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const Cookie=Cookies.get("jwttoken");
  const { user, setUser } = useContext(userContext);

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", data);

    const newObj={
        number:data.number,
        username:data.username
    }
    setData({
        number:"",
        username:"",
    });

    




    const url = "http://localhost:8080/api/restaurants/checkuser";
    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newObj)
    }

    const response=await fetch(url,options);
    if(response.ok==true){
        alert("Credentails Matched Thank You.....!");
       

        setUser({
            username:newObj.username,
            number:newObj.number
        })

     

        navigate("/admin/customerWorkspace");
        
    
    }else{
        alert("Incorrect User Crendentails");
        navigate("/")
    }


  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-12 bg-[#FAF7F1] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#D4AF7A]/30 selection:text-[#0F2A22]">
      {/* Left Panel: Visual Experience Area (7 Cols) */}
      <div className="relative hidden lg:flex lg:col-span-7 flex-col justify-between p-12 xl:p-16 overflow-hidden">
        {/* Background Image with Vignette Overlay */}
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=85"
          alt="Fine dining experience background"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A22] via-[#0F2A22]/80 to-[#0F2A22]/50" />

        {/* Brand Header */}
        <a
          href="/"
          className="relative z-10 flex items-center gap-3.5 group w-fit"
        >
          <div className="h-10 w-10 rounded-full bg-[#FAF7F1]/10 backdrop-blur-md border border-[#F3EFE6]/20 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105">
            <img
              src="https://res.cloudinary.com/djcslopvv/image/upload/v1784878155/hotel-removebg-preview_pcerl8.png"
              alt="HotelZone logo"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-['Cormorant_Garamond',serif] text-2xl font-semibold tracking-wider text-[#F3EFE6]">
            Hotel<span className="text-[#D4AF7A] font-light italic">Zone</span>
          </span>
        </a>

        {/* Hero Content & Feature Highlights */}
        <div className="relative z-10 max-w-xl my-auto py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF7A]/15 border border-[#D4AF7A]/30 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF7A] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D4AF7A]">
              Guest & Patron Access
            </span>
          </div>

          <h2 className="font-['Cormorant_Garamond',serif] text-5xl xl:text-6xl font-medium leading-[1.15] text-[#F3EFE6] tracking-tight mb-6">
            Your table awaits. <br />
            <span className="italic text-[#D4AF7A]">Seamless service</span>,
            refined.
          </h2>

          <p className="text-[#F3EFE6]/75 text-base leading-relaxed mb-10 max-w-lg font-light">
            Welcome to HotelZone. Experience live menu updates straight from the
            executive chef and real-time seating availability.
          </p>

          {/* Feature List Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#D4AF7A]/20 flex items-center justify-center text-[#D4AF7A] text-sm mb-3">
                ✦
              </div>
              <h3 className="text-[#F3EFE6] text-sm font-semibold mb-1">
                Live Menu Access
              </h3>
              <p className="text-[#F3EFE6]/60 text-xs leading-relaxed">
                Explore real-time daily specials, pairings, and kitchen updates.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#D4AF7A]/20 flex items-center justify-center text-[#D4AF7A] text-sm mb-3">
                ◈
              </div>
              <h3 className="text-[#F3EFE6] text-sm font-semibold mb-1">
                Instant Seating
              </h3>
              <p className="text-[#F3EFE6]/60 text-xs leading-relaxed">
                Check floor plan availability and reserve your ideal space live.
              </p>
            </div>
          </div>
        </div>

        {/* Footer info inside left banner */}
        <div className="relative z-10 flex items-center justify-between text-xs text-[#F3EFE6]/40 border-t border-[#F3EFE6]/10 pt-6">
          <span>
            © {new Date().getFullYear()} HotelZone Hospitality Network
          </span>
          <span>Concierge Support: 24/7</span>
        </div>
      </div>

      {/* Right Panel: Clean Form Area (5 Cols) */}
      <div className="lg:col-span-5 flex flex-col justify-between px-6 sm:px-12 py-10 lg:p-16">
        {/* Mobile Header (Shows logo on smaller screens) */}
        <div className="lg:hidden flex items-center justify-between mb-8">
          <a href="/" className="flex items-center gap-2.5">
            <img
              src="https://res.cloudinary.com/djcslopvv/image/upload/v1784878155/hotel-removebg-preview_pcerl8.png"
              alt="HotelZone logo"
              className="h-8 w-8 object-contain"
            />
            <span className="font-['Cormorant_Garamond',serif] text-xl font-semibold tracking-wide text-[#0F2A22]">
              Hotel<span className="text-[#B08D57]">Zone</span>
            </span>
          </a>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-md mx-auto my-auto">
          <div className="mb-8">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#B08D57] block mb-2">
              Workspace Sign In
            </span>
            <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-medium text-[#0F2A22] tracking-tight">
              Welcome Back
            </h1>
            <p className="text-sm text-[#0F2A22]/60 mt-2.5 leading-relaxed">
              Enter your credentials to access your personalized dining
              dashboard and live table status.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Mobile Number Field */}
            <div>
              <label
                htmlFor="number"
                className="block text-xs font-semibold tracking-wider uppercase text-[#0F2A22]/70 mb-2"
              >
                Mobile Number
              </label>
              <div className="relative flex items-center">
                <input
                  type="tel"
                  id="number"
                  name="number"
                  placeholder="+1 (555) 000-0000"
                  required
                  value={data.number}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#0F2A22]/15 rounded-lg px-4 py-3.5 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/30 focus:outline-none focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20 transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Username Field */}
            <div>
              <label
                htmlFor="username"
                className="block text-xs font-semibold tracking-wider uppercase text-[#0F2A22]/70 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="e.g. alexander_rose"
                required
                value={data.username}
                onChange={handleChange}
                className="w-full bg-white border border-[#0F2A22]/15 rounded-lg px-4 py-3.5 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/30 focus:outline-none focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20 transition-all shadow-sm"
              />
            </div>

            {/* Remember & Assistance Quick Links */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-[#0F2A22]/70 hover:text-[#0F2A22]">
                <input
                  type="checkbox"
                  className="rounded border-[#0F2A22]/20 text-[#0F2A22] focus:ring-[#B08D57] accent-[#0F2A22]"
                />
                <span>Remember session</span>
              </label>
              <a
                href="#"
                className="font-medium text-[#B08D57] hover:underline"
              >
                Need help?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-3 bg-[#0F2A22] text-[#F3EFE6] text-sm font-semibold tracking-wide py-4 px-6 rounded-lg hover:bg-[#163a30] active:scale-[0.99] transition-all shadow-lg shadow-[#0F2A22]/10 flex items-center justify-center gap-2 group"
            >
              <span>Enter Workspace</span>
              <span className="text-lg transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>
        </div>

        {/* Minimal Footer */}
        <div className="text-center lg:text-left text-xs text-[#0F2A22]/40 mt-8">
          By signing in, you agree to HotelZone's{" "}
          <a href="#" className="underline hover:text-[#0F2A22]">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-[#0F2A22]">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default HotelLogin;
