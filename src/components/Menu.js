import { useEffect, useState } from "react";
import CustomerSkeleton from "./CustomerSkeleton";
import MenuCartItem from "./MenuCartItem";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";


const Menu = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const jwt=Cookies.get("jwttoken");
  const API_URL = process.env.API_URL;
  
  useEffect(() => {
    callcheckMenu();
  }, []);

  const callcheckMenu = async () => {
    try {
      const url = `${API_URL}/api/restaurants/getallmenu`;
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${jwt}`
        },
      };

      const response = await fetch(url, options);
    
      if (!response.ok) {
        alert("Something Went Wrong Please Try Again Later");
      } else {
        const jsonData = await response.json();
        setData(jsonData);
      }
    } catch (error) {
      console.error("Error fetching menu:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FAF7F1] font-['Plus_Jakarta_Sans',sans-serif] text-[#0F2A22]">
      {/* Header Banner */}
      <header className="sticky top-0 z-40 bg-[#FAF7F1]/85 backdrop-blur-md border-b border-[#0F2A22]/10 px-6 lg:px-16 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/20 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B08D57]">
                Live Culinary Experience
              </span>
            </div>
            <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-semibold tracking-tight text-[#0F2A22]">
              Chef's Daily Selections
            </h1>
          </div>

          {!loading && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#0F2A22]/60 font-medium">
                Showing{" "}
                <strong className="text-[#0F2A22]">{data.length}</strong> items
              </span>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 lg:px-16 py-10">
        {loading || data.length === 0 ? (
          <CustomerSkeleton />
        ) : (
          <div>
            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {data.map((each, index) => (
                <MenuCartItem data={each} key={each.id || index} />
              ))}
            </div>
          </div>
        )}
      </main>
      <div className="flex flex-row justify-center">
        <Link to="/admin/showcartinfo">
          <button className="w-56 m-auto mt-1.5 cursor-pointer bg-[#B08D57] text-[#FAF7F1] text-xs font-semibold tracking-widest uppercase py-4 rounded-xl hover:bg-[#9a7947] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group/btn shadow-md">
            <span>Go to Cart</span>
            <span className="text-base transition-transform group-hover/btn:translate-x-1">
              →
            </span>
          </button>
        </Link>
      </div>
      <Link to="/admin/customerWorkspace">
        <button className="w-56 m-auto mt-1.5 cursor-pointer bg-[#B08D57] text-[#FAF7F1] text-xs font-semibold tracking-widest uppercase py-4 rounded-xl hover:bg-[#9a7947] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group/btn shadow-md">
          <span>Go to Workspace</span>
          <span className="text-base transition-transform group-hover/btn:translate-x-1">
            →
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Menu;
