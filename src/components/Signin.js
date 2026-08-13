import { useState } from "react";
import Cookie from "js-cookie"
import { Link, useNavigate } from "react-router-dom";

/**
 * Uses the same fonts as Header.jsx / Body.jsx / Footer.jsx / Register.jsx —
 * make sure this is in your index.html:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 */

const Signin = () => {
  const [data, setData] = useState({
    number: "",
    password: "",
  });

  const navigate=useNavigate();
  const API_URL = process.env.API_URL;
  const changenumber = (e) => {
    setData({
      ...data,
      number: e.target.value,
    });
  };

  const changePassword = (e) => {
    setData({
      ...data,
      password: e.target.value,
    });
  };

  const finalfunction = async(e) => {
    e.preventDefault();
    const newObj = {
      number: data.number,
      password: data.password,
    };

    setData({
      number: "",
      password: "",
    });


    const url = `${API_URL}/api/restaurants/signin`;
    const options={
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newObj)
    }
    const response= await fetch(url,options);
    if(response.ok===true){
      alert("User Logged In SuccessFully");
    
        const token = await response.text();
      
       Cookie.set("jwttoken", token, { expires: 7 });
       navigate("/admin");
    
    }else{
      alert("User Crendentials MisMatch Please Try Again....");
      navigate("/")
     
    }

   
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#FAF7F1]">
      {/* Left: brand / editorial panel */}
      <div className="relative hidden lg:flex flex-col justify-between p-14 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
          alt="Elegant hotel room with warm lighting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A22]/60 via-[#0F2A22]/75 to-[#0F2A22]" />

        <a href="/" className="relative z-10 flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/djcslopvv/image/upload/v1784878155/hotel-removebg-preview_pcerl8.png"
            alt="HotelZone logo"
            className="h-9 w-9 object-contain"
          />
          <span className="font-['Cormorant_Garamond',serif] text-2xl tracking-wide text-[#F3EFE6]">
            Hotel<span className="text-[#D4AF7A]">Zone</span>
          </span>
        </a>

        <div className="relative z-10">
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl leading-tight text-[#F3EFE6] max-w-md mb-4">
            Welcome back.
          </h2>
          <p className="text-[#F3EFE6]/70 text-sm max-w-sm">
            Sign back in to manage rooms, dining, and staff from where you left
            off.
          </p>
        </div>

        <blockquote className="relative z-10 border-l-2 border-[#D4AF7A] pl-5">
          <p className="font-['Cormorant_Garamond',serif] italic text-lg text-[#F3EFE6] leading-snug mb-2">
            “Onboarding took an afternoon, not a month.”
          </p>
          <cite className="not-italic font-['Inter'] text-xs text-[#F3EFE6]/55">
            Priya Nair, Seaside Grand
          </cite>
        </blockquote>
      </div>

      {/* Right: form panel */}
      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <span className="font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
            Welcome back
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] text-4xl text-[#0F2A22] mt-3 mb-2">
            Sign in to continue
          </h1>
          <p className="text-sm text-[#0F2A22]/60 mb-9">
            New to HotelZone?{" "}
            <Link
              to="/register"
              className="text-[#B08D57] border-b border-[#B08D57]/40 hover:border-[#B08D57] transition-colors duration-200"
            >
              Register your hotel
            </Link>
          </p>

          <form onSubmit={finalfunction} className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="number"
                className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
              >
                Phone number
              </label>
              <input
                type="number"
                placeholder="Please enter the mobile number"
                id="number"
                name="number"
                onChange={changenumber}
                value={data.number}
                required
                className="w-full bg-white border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50"
                >
                  Password
                </label>
                <a
                  href="/forgot-password"
                  className="font-['Inter'] text-xs text-[#0F2A22]/45 hover:text-[#B08D57]"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                placeholder="Please enter the password"
                name="password"
                id="password"
                onChange={changePassword}
                value={data.password}
                required
                className="w-full bg-white border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-[#0F2A22] text-[#F3EFE6] text-sm font-semibold tracking-wide px-6 py-3.5 rounded-sm hover:bg-[#0F2A22]/90 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
