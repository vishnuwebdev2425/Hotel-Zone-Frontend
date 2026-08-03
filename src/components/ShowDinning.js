import { use, useContext, useEffect, useState } from "react";
import CustomerSkeleton from "./CustomerSkeleton";
import userContext from "../utils/userContext";
import DinningCard from "./DinningCard";

import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const statusMeta = {
  avaliable: { label: "Available", text: "text-emerald-400" },
  occupied: { label: "Occupied", text: "text-red-400" },
  progress: { label: "In Progress", text: "text-amber-400" },
};

const ShowDinning = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = process.env.API_URL;

  const token = Cookies.get("jwttoken");
  if (!token) {
    alert("Something Went Wrong");
  }

  useEffect(() => {
    callingDiiningFunction();
  }, []);

  const callingDiiningFunction = async () => {
   
    const url = `${API_URL}/api/restaurants/getalldinning`;

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(url, options);
  
      if (response.ok != true) {
        alert("Something Went Wrong");
      } else {
        const coonvertedData = await response.json();
        
        setData(coonvertedData);
      
      }
    } finally {
      setIsLoading(false);
    }
  };

  const total = data.length;
  const countByStatus = (key) => data.filter((d) => d.status === key).length;

  return (
    <div className="min-h-screen bg-[#0F2A22] relative overflow-hidden">
      {/* Decorative dot-grid, same texture as the Add Dining page
          NOTE: pointer-events-none is required here — without it this
          invisible layer sits above every element after it in the DOM
          (including the button below) and silently swallows clicks. */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #F3EFE6 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-['Inter'] text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF7A]">
            Live floor view
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] text-4xl lg:text-5xl text-[#F3EFE6] mt-4">
            Welcome to the dining floor
          </h1>
          <p className="text-[#F3EFE6]/55 text-sm mt-3 max-w-lg mx-auto">
            Every table across every floor, updated the moment its status
            changes — so you always know exactly where to seat the next guest.
          </p>
        </div>

        {/* Stats bar */}
        {!isLoading && total > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            <div className="rounded-lg border border-[#D4AF7A]/20 bg-[#F3EFE6]/[0.03] px-5 py-5 text-center">
              <p className="font-['Cormorant_Garamond',serif] text-3xl text-[#F3EFE6] mb-1">
                {total}
              </p>
              <p className="font-['Inter'] text-[11px] tracking-wide uppercase text-[#F3EFE6]/45">
                Total tables
              </p>
            </div>
            <div className="rounded-lg border border-[#D4AF7A]/20 bg-[#F3EFE6]/[0.03] px-5 py-5 text-center">
              <p className="font-['Cormorant_Garamond',serif] text-3xl text-emerald-400 mb-1">
                {countByStatus("avaliable")}
              </p>
              <p className="font-['Inter'] text-[11px] tracking-wide uppercase text-[#F3EFE6]/45">
                Available
              </p>
            </div>
            <div className="rounded-lg border border-[#D4AF7A]/20 bg-[#F3EFE6]/[0.03] px-5 py-5 text-center">
              <p className="font-['Cormorant_Garamond',serif] text-3xl text-red-400 mb-1">
                {countByStatus("occupied")}
              </p>
              <p className="font-['Inter'] text-[11px] tracking-wide uppercase text-[#F3EFE6]/45">
                Occupied
              </p>
            </div>
            <div className="rounded-lg border border-[#D4AF7A]/20 bg-[#F3EFE6]/[0.03] px-5 py-5 text-center">
              <p className="font-['Cormorant_Garamond',serif] text-3xl text-amber-400 mb-1">
                {countByStatus("progress")}
              </p>
              <p className="font-['Inter'] text-[11px] tracking-wide uppercase text-[#F3EFE6]/45">
                In progress
              </p>
            </div>
          </div>
        )}

        {/* Content */}
        {isLoading ? (
          <div>
            <CustomerSkeleton />
          </div>
        ) : total === 0 ? (
          <div className="text-center py-20">
            <span className="font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF7A]">
              Nothing here yet
            </span>
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[#F3EFE6] mt-4 mb-2">
              No dining tables added
            </h3>
            <p className="text-[#F3EFE6]/50 text-sm max-w-sm mx-auto">
              Add your first table from the Dining setup page to see it show up
              here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((dinning) => (
              <DinningCard key={dinning.id} dinning={dinning} />
            ))}
          </div>
        )}

        {/* Go to workspace */}
        <div className="relative flex justify-center mt-16">
          <Link to="/admin/customerWorkspace">
            <button
              onClick={() => {
                console.log("Button Pressed");
              }}
              className="w-56 bg-[#6db057] text-[#FAF7F1] text-xs font-semibold tracking-widest uppercase py-4 rounded-xl hover:bg-[#9a7947] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group/btn shadow-md"
            >
              <span className="cursor-pointer">Go To Workspace</span>
              <span className="text-base transition-transform group-hover/btn:translate-x-1">
                →
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowDinning;
