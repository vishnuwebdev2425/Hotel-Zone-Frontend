/**
 * Uses the same fonts as the rest of the app — make sure this is in your
 * index.html:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 */
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

import { Link } from "react-router-dom";


const stats = [
  { label: "Tables total", value: "18" },
  { label: "Occupied now", value: "11" },
  { label: "Bookings today", value: "27" },
  { label: "Menu items live", value: "42" },
];

const Adminhome = () => {

  const data=Cookies.get("jwttoken");
  
  if(data===undefined){
    return <Navigate to="/" true/>
  }
  return (
    <div className="bg-[#FAF7F1] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12">
        {/* Welcome banner */}
        <section className="relative overflow-hidden rounded-lg bg-[#0F2A22] mb-10">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
            alt="Restaurant dining table set for service"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A22] via-[#0F2A22]/95 to-[#0F2A22]/60" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 px-8 py-12 lg:py-14">
            <div>
              <span className="font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF7A]">
                Dashboard
              </span>
              <h1 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl text-[#F3EFE6] mt-3 mb-3">
                Hey, welcome back.
              </h1>
              <p className="text-[#F3EFE6]/70 text-sm max-w-md mb-7">
                Your menu, dining layout, and table status all live here. Pick
                up wherever you left off.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/admin/customerWorkspace">
                  <button className="bg-[#D4AF7A] cursor-pointer  text-[#0F2A22] text-sm font-semibold tracking-wide px-6 py-3 rounded-sm hover:bg-[#c49f68] transition-colors">
                    Go To Customer Workspace
                  </button>
                </Link>
                <Link to="/admin/addmenu">
                  <button className="border cursor-pointer border-[#F3EFE6]/30 text-[#F3EFE6] text-sm font-semibold tracking-wide px-6 py-3 rounded-sm hover:border-[#F3EFE6] transition-colors">
                    Add Menu
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick stats */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-[#0F2A22]/10 rounded-md px-5 py-5"
            >
              <p className="font-['Cormorant_Garamond',serif] text-3xl text-[#0F2A22] mb-1">
                {stat.value}
              </p>
              <p className="font-['Inter'] text-xs tracking-wide uppercase text-[#0F2A22]/50">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        {/* Action cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#0F2A22]/10 rounded-md p-8 flex flex-col">
            <span className="inline-flex items-center justify-center h-11 w-11 rounded-sm bg-[#0F2A22]/5 text-[#B08D57] text-xl mb-6">
              ＋
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl text-[#0F2A22] mb-2">
              Add dining &amp; check status
            </h2>
            <p className="text-sm text-[#0F2A22]/60 mb-8 max-w-sm">
              Set up a new table layout for the floor, or open an existing one
              to confirm it's ready for service.
            </p>
            <Link to="/admin/adddinning">
              <button className="mt-auto cursor-pointer self-start bg-[#0F2A22] text-[#F3EFE6] text-sm font-semibold tracking-wide px-6 py-3 rounded-sm hover:bg-[#0F2A22]/90 transition-colors">
                Add Dining
              </button>
            </Link>
          </div>

          <div className="bg-white border border-[#0F2A22]/10 rounded-md p-8 flex flex-col">
            <span className="inline-flex items-center justify-center h-11 w-11 rounded-sm bg-[#0F2A22]/5 text-[#B08D57] text-xl mb-6">
              ✓
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl text-[#0F2A22] mb-2">
              Check dining &amp; status
            </h2>
            <p className="text-sm text-[#0F2A22]/60 mb-8 max-w-sm">
              See which tables are occupied, reserved, or free right now across
              every dining area.
            </p>
            <Link to="/admin/modifydinning">
              <button className="mt-auto cursor-pointer self-start border border-[#0F2A22]/20 text-[#0F2A22] text-sm font-semibold tracking-wide px-6 py-3 rounded-sm hover:border-[#0F2A22] transition-colors">
                Check Status
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Adminhome;
