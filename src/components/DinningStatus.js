import { useEffect, useState } from "react";
import CustomerSkeleton from "./CustomerSkeleton";
import AdminDinning from "./AdminDinning";

import Cookies from "js-cookie";

/**
 * Uses the same fonts as the rest of the app — make sure this is in your
 * index.html:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 */

const statusFilters = [
  { value: "all", label: "All" },
  { value: "avaliable", label: "Available" },
  { value: "occupied", label: "Occupied" },
  { value: "progress", label: "In Progress" },
];

const DinningStatus = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const jwt = Cookies.get("jwttoken");
  const API_URL = process.env.API_URL;

  useEffect(() => {
    gettingDinningDetails();
  }, []);

  const gettingDinningDetails = async () => {
    const url = `${API_URL}/api/restaurants/getalldinningadmin`;

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    };

    try {
      const response = await fetch(url, options);
      if (response.ok === true) {
        const extractData = await response.json();
        
        setData(extractData);
      } else {
        alert("Something Went Wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Optimistically update a row's status after AdminDinning confirms the API call succeeded
  const handleStatusChanged = (id, newStatus) => {
    setData((prev) =>
      prev.map((d) => (d.id === id ? { ...d, status: newStatus } : d)),
    );
  };

  // Remove a row after AdminDinning confirms the delete succeeded
  const handleDeleted = (id) => {
    setData((prev) => prev.filter((d) => d.id !== id));
  };

  const filtered = data.filter((d) => {
    const matchesStatus = statusFilter === "all" || d.status === statusFilter;
    const matchesSearch =
      search.trim() === "" ||
      d.dinningid?.toLowerCase().includes(search.toLowerCase()) ||
      d.register?.hotalname?.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const countByStatus = (key) => data.filter((d) => d.status === key).length;

  return (
    <div className="min-h-screen bg-[#F3EFE6]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <span className="font-['Inter'] text-xs font-semibold tracking-[0.25em] uppercase text-[#B08D57]">
              Admin
            </span>
            <h1 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl text-[#0F2A22] mt-2">
              Dining status control
            </h1>
          </div>

          {!isLoading && data.length > 0 && (
            <div className="flex gap-6 font-['Inter'] text-xs text-[#0F2A22]/50">
              <div>
                <span className="block text-lg font-semibold text-[#0F2A22]">
                  {data.length}
                </span>
                Total
              </div>
              <div>
                <span className="block text-lg font-semibold text-emerald-600">
                  {countByStatus("avaliable")}
                </span>
                Available
              </div>
              <div>
                <span className="block text-lg font-semibold text-red-600">
                  {countByStatus("occupied")}
                </span>
                Occupied
              </div>
              <div>
                <span className="block text-lg font-semibold text-amber-600">
                  {countByStatus("progress")}
                </span>
                In progress
              </div>
            </div>
          )}
        </div>

        {isLoading ? (
          <CustomerSkeleton />
        ) : data.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-lg border border-[#0F2A22]/10">
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[#0F2A22] mb-2">
              No dining tables yet
            </h3>
            <p className="text-[#0F2A22]/50 text-sm">
              Tables added from the Dining setup page will appear here.
            </p>
          </div>
        ) : (
          <>
            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by table ID or hotel…"
                className="w-full sm:w-72 bg-white border border-[#0F2A22]/15 rounded-sm px-4 py-2.5 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
              />
              <div className="flex gap-2 flex-wrap">
                {statusFilters.map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setStatusFilter(f.value)}
                    className={`font-['Inter'] text-xs font-medium px-4 py-2 rounded-full border transition-colors ${
                      statusFilter === f.value
                        ? "bg-[#0F2A22] text-[#F3EFE6] border-[#0F2A22]"
                        : "bg-white text-[#0F2A22]/60 border-[#0F2A22]/15 hover:border-[#0F2A22]/30"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg border border-[#0F2A22]/10 overflow-hidden">
              <div className="grid grid-cols-[1.6fr_1fr_0.7fr_0.8fr_1fr_1.8fr] gap-4 px-6 py-3 bg-[#0F2A22]/[0.03] border-b border-[#0F2A22]/10 font-['Inter'] text-[11px] font-semibold tracking-wide uppercase text-[#0F2A22]/45">
                <span>Table</span>
                <span>Floor</span>
                <span>Capacity</span>
                <span>Ac</span>
                <span>Status</span>
                <span>Actions</span>
              </div>

              {filtered.length === 0 ? (
                <p className="px-6 py-10 text-center text-sm text-[#0F2A22]/45">
                  No tables match your search or filter.
                </p>
              ) : (
                filtered.map((dinning) => (
                  <AdminDinning
                    key={dinning.id}
                    dinning={dinning}
                    onStatusChanged={handleStatusChanged}
                    onDeleted={handleDeleted}
                  />
                ))
              )}
            </div>
          </>
        )}
      </div>
      
    </div>
  );
};

export default DinningStatus;
