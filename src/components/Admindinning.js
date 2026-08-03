import { useState } from "react";
import Cookies from "js-cookie";

/**
 * Uses the same fonts as the rest of the app — make sure this is in your
 * index.html:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 *
 * NOTE ON ENDPOINTS: your backend didn't give me exact routes for updating
 * status or deleting a table, so I guessed sensible ones below
 * (PUT /api/restaurants/updatestatus/{id} and DELETE /api/restaurants/deletedinning/{id}).
 * Swap STATUS_URL / DELETE_URL for whatever your actual endpoints are.
 */

const floorLabels = {
  ground: "Ground",
  first: "First Floor",
  second: "Second Floor",
  third: "Third Floor",
};

const statusMeta = {
  avaliable: {
    label: "Available",
    dot: "bg-emerald-500",
    text: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  occupied: {
    label: "Occupied",
    dot: "bg-red-500",
    text: "text-red-700",
    bg: "bg-red-50",
  },
  progress: {
    label: "In Progress",
    dot: "bg-amber-500",
    text: "text-amber-700",
    bg: "bg-amber-50",
  },
};

const AdminDinning = ({ dinning, onStatusChanged, onDeleted }) => {
  const { id, dinningid, capacity, floor, ac, status, register } = dinning;
  const [busy, setBusy] = useState(null); 
  // 'available' | 'occupied' | 'delete' | null
  const API_URL = process.env.API_URL;

  const jwt = Cookies.get("jwttoken");
  const meta = statusMeta[status];
  const isAc = ac === "ac";

  const updateStatus = async (newStatus, key) => {
    
    if (status === newStatus || busy) return;
    setBusy(key);
    try {
  

      const STATUS_URL = `${API_URL}/api/restaurants/updatestatus/${dinningid}`;
      const response = await fetch(STATUS_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (response.ok) {
        onStatusChanged?.(id, newStatus);
      } else {
        alert("Something Went Wrong");
      }
    } catch (err) {
      alert("Something Went Wrong");
    } finally {
      setBusy(null);
    }
  };

  const handleDelete = async () => {
    if (busy) return;
    const confirmed = window.confirm(
      `Delete table ${dinningid}? This can't be undone.`,
    );
    if (!confirmed) return;

    setBusy("delete");
    try {

      
      const DELETE_URL = `${API_URL}/api/restaurants/deletedinning/${dinningid}`;
      const response = await fetch(DELETE_URL, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      
      if(response.ok==true){
        alert("Dinning Deleted SuccessFully");
      }else{
        alert("Something Went Wrong");
      }
    } catch (err) {
      alert("Something Went Wrong");
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="grid grid-cols-[1.6fr_1fr_0.7fr_0.8fr_1fr_1.8fr] items-center gap-4 px-6 py-4 border-b border-[#0F2A22]/8 hover:bg-[#0F2A22]/[0.02] transition-colors">
      {/* Table id + hotel */}
      <div>
        <p className="font-['Cormorant_Garamond',serif] text-lg text-[#0F2A22]">
          {dinningid}
        </p>
        {register?.hotalname && (
          <p className="font-['Inter'] text-[11px] text-[#0F2A22]/40">
            {register.hotalname}
          </p>
        )}
      </div>

      {/* Floor */}
      <p className="font-['Inter'] text-sm text-[#0F2A22]/70">
        {floorLabels[floor] || "—"}
      </p>

      {/* Capacity */}
      <p className="font-['Inter'] text-sm text-[#0F2A22]/70">
        {capacity} seats
      </p>

      {/* AC */}
      <span
        className={`justify-self-start font-['Inter'] text-xs font-medium px-2.5 py-1 rounded-full border ${
          isAc
            ? "border-[#4A5A6A]/30 text-[#4A5A6A]"
            : "border-[#B08D57]/40 text-[#B08D57]"
        }`}
      >
        {isAc ? "Ac" : "Non-Ac"}
      </span>

      {/* Status */}
      <span
        className={`justify-self-start flex items-center gap-1.5 font-['Inter'] text-xs font-medium px-2.5 py-1 rounded-full ${
          meta ? `${meta.bg} ${meta.text}` : "bg-gray-50 text-gray-500"
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${meta ? meta.dot : "bg-gray-400"}`}
        />
        {meta ? meta.label : "Unknown"}
      </span>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateStatus("avaliable", "available")}
          disabled={status === "avaliable" || busy}
          className="font-['Inter'] text-xs font-medium px-3 py-2 rounded-sm border border-emerald-600/30 text-emerald-700 hover:bg-emerald-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          {busy === "available" ? "…" : "Available"}
        </button>
        <button
          onClick={() => updateStatus("occupied", "occupied")}
          disabled={status === "occupied" || busy}
          className="font-['Inter'] text-xs font-medium px-3 py-2 rounded-sm border border-red-600/30 text-red-700 hover:bg-red-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          {busy === "occupied" ? "…" : "Occupied"}
        </button>
        <button
          onClick={handleDelete}
          disabled={busy}
          className="font-['Inter'] text-xs font-medium px-3 py-2 rounded-sm bg-[#0F2A22] text-[#F3EFE6] hover:bg-[#0F2A22]/85 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          {busy === "delete" ? "…" : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default AdminDinning;
