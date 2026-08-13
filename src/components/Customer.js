import { useContext } from "react";
import userContext from "../utils/userContext";
import { Link } from "react-router-dom";

/**
 * Fonts required in index.html:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">
 */

const Customer = () => {
  const { user } = useContext(userContext);

  // Fallback check if user object or username is missing
  const isAuthenticated =
    user && user.username && user.username.trim().length > 0;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#FAF7F1] px-6 text-center font-['Plus_Jakarta_Sans',sans-serif]">
        <div className="max-w-md p-8 rounded-2xl bg-white border border-[#0F2A22]/10 shadow-xl">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#0F2A22]/5 flex items-center justify-center text-[#B08D57] text-xl">
            🔒
          </div>
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B08D57] block mb-2">
            Access Restricted
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] text-3xl font-medium text-[#0F2A22] mb-3">
            Page Not Available
          </h1>
          <p className="text-sm text-[#0F2A22]/60 mb-6 leading-relaxed">
            Please log in with your credentials to access the HotelZone guest
            workspace.
          </p>
             <Link
      to="/hotellogin"
      className="inline-block bg-[#0F2A22] text-[#F3EFE6] text-xs font-semibold tracking-wider uppercase px-6 py-3.5 rounded-lg hover:bg-[#163a30] transition-all shadow-md"
    >
      Return to Login
    </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#FAF7F1] font-['Plus_Jakarta_Sans',sans-serif] text-[#0F2A22] selection:bg-[#D4AF7A]/30">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#FAF7F1]/80 backdrop-blur-md border-b border-[#0F2A22]/10 px-6 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/djcslopvv/image/upload/v1784878155/hotel-removebg-preview_pcerl8.png"
            alt="HotelZone logo"
            className="h-8 w-8 object-contain"
          />
          <span className="font-['Cormorant_Garamond',serif] text-2xl font-semibold tracking-wide text-[#0F2A22]">
            Hotel<span className="text-[#B08D57] italic font-light">Zone</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#B08D57] block">
              Logged in as
            </span>
            <span className="text-xs font-semibold text-[#0F2A22]">
              @{user.username}
            </span>
          </div>
          <div className="h-9 w-9 rounded-full bg-[#0F2A22] text-[#FAF7F1] flex items-center justify-center font-semibold text-sm shadow-md">
            {user.username.charAt(0).toUpperCase()}
          </div>
        </div>
      </header>

      {/* Main Workspace Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
        {/* Welcome Banner */}
        <section className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
              Guest Portal
            </span>
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0F2A22]">
            Welcome,{" "}
            <span className="italic text-[#B08D57]">{user.username}</span>
          </h1>
          <p className="text-base text-[#0F2A22]/70 mt-3 font-light leading-relaxed">
            Thank you for choosing HotelZone. Select an option below to explore
            our live culinary menu or view current table availability.
          </p>
        </section>

        {/* Feature Action Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Card 1: Check Menu */}
          <div className="group relative bg-white rounded-2xl overflow-hidden border border-[#0F2A22]/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80"
                alt="Gourmet Dining Dish"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A22]/80 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#0F2A22]">
                Kitchen Specials
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-medium text-[#0F2A22] mb-2">
                  Explore The Daily Menu
                </h2>
                <p className="text-sm text-[#0F2A22]/65 leading-relaxed mb-6">
                  Browse fresh culinary creations, live kitchen updates, and
                  curated wine pairings prepared by our executive chefs today.
                </p>
              </div>
              <Link to="/admin/checkmenu">
                <button className="w-full bg-[#0F2A22] cursor-pointer text-[#F3EFE6] text-xs font-semibold tracking-widest uppercase py-4 rounded-xl hover:bg-[#163a30] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group/btn shadow-md">
                  <span>Check Menu</span>
                  <span className="text-base transition-transform group-hover/btn:translate-x-1">
                    →
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2: Check Available Tables */}
          <div className="group relative bg-white rounded-2xl overflow-hidden border border-[#0F2A22]/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Luxury Restaurant Dining Area"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A22]/80 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#0F2A22]">
                Real-Time Seating
              </span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-medium text-[#0F2A22] mb-2">
                  Table Availability
                </h2>
                <p className="text-sm text-[#0F2A22]/65 leading-relaxed mb-6">
                  View open tables across the main dining room, private alcoves,
                  and outdoor terrace before walking in.
                </p>
              </div>
              <Link to="/admin/showDinning">
                <button className="w-full cursor-pointer bg-[#B08D57] text-[#FAF7F1] text-xs font-semibold tracking-widest uppercase py-4 rounded-xl hover:bg-[#9a7947] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group/btn shadow-md">
                  <span>Check Available Tables</span>
                  <span className="text-base transition-transform group-hover/btn:translate-x-1">
                    →
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Customer;
