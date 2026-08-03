import { useState } from "react";

/**
 * Uses the same fonts as Header.jsx / Body.jsx / Footer.jsx — make sure
 * this is in your index.html:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 */

const Register = () => {
  const [data, setData] = useState({
    username: "",
    number: "",
    hotelname: "",
    address: "",
    password: "",
  });
  const API_URL = process.env.API_URL;

  const changeusername = (e) => {
    setData({
      ...data,
      username: e.target.value,
    });
  };

  const changeNumber = (e) => {
    setData({
      ...data,
      number: e.target.value,
    });
  };

  const changehotelname = (e) => {
    setData({
      ...data,
      hotelname: e.target.value,
    });
  };

  const changeHotelAddress = (e) => {
    setData({
      ...data,
      address: e.target.value,
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
    const newobj = {
      username: data.username,
      number: data.number,
      hotelname: data.hotelname,
      address: data.address,
      password: data.password,
    };

    setData({
      username: "",
      number: "",
      hotelname: "",
      address: "",
      password: "",
    });

    const url = `${API_URL}/api/restaurants/register`;
    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newobj)
    }
    const response=await fetch(url,options);
    if(response.ok===true){
        alert("Registration SuccessFully")
    }else{
        alert("Something Went Wrong");
    }

  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#FAF7F1]">
      {/* Left: brand / editorial panel */}
      <div className="relative hidden lg:flex flex-col justify-between p-14 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80"
          alt="Hotel exterior at dusk"
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
            List your property and start taking bookings this week.
          </h2>
          <p className="text-[#F3EFE6]/70 text-sm max-w-sm">
            Rooms, dining, and staff — managed from one dashboard built for
            independent hotels.
          </p>
        </div>

        <div className="relative z-10 flex gap-10 font-['Inter'] text-xs text-[#F3EFE6]/55 border-t border-[#D4AF7A]/20 pt-6">
          <div>
            <p className="font-['Cormorant_Garamond',serif] text-lg text-[#F3EFE6] mb-1">
              2,400+
            </p>
            Hotels onboarded
          </div>
          <div>
            <p className="font-['Cormorant_Garamond',serif] text-lg text-[#F3EFE6] mb-1">
              24 hr
            </p>
            Support response
          </div>
        </div>
      </div>

      {/* Right: form panel */}
      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <span className="font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
            Get started
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] text-4xl text-[#0F2A22] mt-3 mb-2">
            Register your hotel
          </h1>
          <p className="text-sm text-[#0F2A22]/60 mb-9">
            Already on HotelZone?{" "}
            <a
              href="/login"
              className="text-[#B08D57] border-b border-[#B08D57]/40 hover:border-[#B08D57]"
            >
              Sign in instead
            </a>
            .
          </p>

          <form onSubmit={finalfunction} className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="username"
                className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                placeholder="How guests and staff will see you"
                id="username"
                name="username"
                required
                onChange={changeusername}
                value={data.username}
                className="w-full bg-white border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="number"
                className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
              >
                Phone number
              </label>
              <input
                type="number"
                placeholder="10-digit mobile number"
                id="number"
                name="number"
                required
                onChange={changeNumber}
                value={data.number}
                className="w-full bg-white border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="hotel"
                className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
              >
                Hotel name
              </label>
              <input
                type="text"
                placeholder="e.g. Seaside Grand"
                id="hotel"
                name="hotel"
                required
                onChange={changehotelname}
                value={data.hotelname}
                className="w-full bg-white border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
              >
                Hotel address
              </label>
              <input
                type="text"
                placeholder="Street, city, state"
                id="address"
                name="address"
                required
                onChange={changeHotelAddress}
                value={data.address}
                className="w-full bg-white border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="At least 8 characters"
                id="password"
                name="password"
                required
                minLength={8}
                onChange={changePassword}
                value={data.password}
                className="w-full bg-white border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-[#0F2A22] text-[#F3EFE6] text-sm font-semibold tracking-wide px-6 py-3.5 rounded-sm hover:bg-[#0F2A22]/90 transition-colors"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
