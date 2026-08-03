import { useState } from "react";

import Cookies from "js-cookie";

/**
 * Uses the same fonts as the rest of the app — make sure this is in your
 * index.html:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 */

const floorLabels = {
  ground: "Ground Floor",
  first: "First Floor",
  second: "Second Floor",
  third: "Third Floor",
};

const statusMeta = {
  avaliable: {
    label: "Available",
    dot: "bg-emerald-400",
    text: "text-emerald-400",
    pulse: true,
  },
  occupied: {
    label: "Occupied",
    dot: "bg-red-400",
    text: "text-red-400",
    pulse: false,
  },
  progress: {
    label: "In Progress",
    dot: "bg-amber-400",
    text: "text-amber-400",
    pulse: true,
  },
};

const Dinning = () => {
  const [data, setData] = useState({
    dinningid: "",
    capacity: "",
    floor: "",
    ac: "",
    status: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message }

  const jwt = Cookies.get("jwttoken");
  const API_URL = process.env.API_URL;

  const chnagedinningId = (e) => {
    setData({
      ...data,
      dinningid: e.target.value,
    });
  };

  const changecapacity = (e) => {
    setData({
      ...data,
      capacity: e.target.value,
    });
  };

  const chnageFloor = (e) => {
    setData({
      ...data,
      floor: e.target.value,
    });
  };

  const changeac = (e) => {
    setData({
      ...data,
      ac: e.target.value,
    });
  };

  const changestatus = (e) => {
    setData({
      ...data,
      status: e.target.value,
    });
  };

  const callfinalfunction = async (e) => {
    e.preventDefault();
    console.log(data);

    const newObj = {
      dinningid: data.dinningid,
      capacity: data.capacity,
      floor: data.floor,
      ac: data.ac,
      status: data.status,
    };

    const url = `${API_URL}/api/restaurants/adddinning`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(newObj),
    };

    try {
      setSubmitting(true);
      const response = await fetch(url, options);

      if (response.ok === true) {
        setToast({ type: "success", message: "Dining added successfully" });
        setData({
          dinningid: "",
          capacity: "",
          floor: "",
          ac: "",
          status: "",
        });
      } else {
        setToast({ type: "error", message: "Something went wrong" });
      }
    } catch (err) {
      setToast({ type: "error", message: "Something went wrong" });
    } finally {
      setSubmitting(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  const isAc = data.ac === "ac";
  const status = statusMeta[data.status];

  return (
    <div className="min-h-screen bg-[#0F2A22] relative overflow-hidden">
      {/* Decorative table-grid pattern, top layer */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #F3EFE6 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-sm border px-5 py-3 text-sm font-medium backdrop-blur-md shadow-xl ${
            toast.type === "success"
              ? "bg-emerald-400/10 border-emerald-400/40 text-emerald-300"
              : "bg-red-400/10 border-red-400/40 text-red-300"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-16">
        <div className="text-center mb-14">
          <span className="font-['Inter'] text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF7A]">
            Dining setup
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] text-4xl lg:text-5xl text-[#F3EFE6] mt-4">
            Add a table, fill the room.
          </h1>
          <p className="text-[#F3EFE6]/55 text-sm mt-3 max-w-md mx-auto">
            Every table you add here becomes bookable in your customer workspace
            immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_0.9fr] gap-10 items-start">
          {/* Form */}
          <form
            onSubmit={callfinalfunction}
            className="bg-[#F3EFE6] rounded-lg p-8 flex flex-col gap-5"
          >
            <div>
              <label
                htmlFor="id"
                className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
              >
                Dining ID
              </label>
              <input
                type="text"
                placeholder="e.g. D-104"
                id="id"
                name="id"
                required
                onChange={chnagedinningId}
                value={data.dinningid}
                className="w-full bg-white border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="capacity"
                  className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
                >
                  Seat capacity
                </label>
                <input
                  type="number"
                  placeholder="e.g. 4"
                  id="capacity"
                  name="capacity"
                  required
                  value={data.capacity}
                  onChange={changecapacity}
                  className="w-full bg-white border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="floor"
                  className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
                >
                  Floor
                </label>
                <select
                  id="floor"
                  value={data.floor}
                  required
                  onChange={chnageFloor}
                  className="w-full bg-white border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="ground">Ground Floor</option>
                  <option value="first">First Floor</option>
                  <option value="second">Second Floor</option>
                  <option value="third">Third Floor</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="status"
                className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
              >
                Dining status
              </label>
              <select
                id="status"
                value={data.status}
                required
                onChange={changestatus}
                className="w-full bg-white border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
              >
                <option value="" disabled>
                  Select status
                </option>
                <option value="avaliable">Available</option>
                <option value="occupied">Occupied</option>
                <option value="progress">In Progress</option>
              </select>
            </div>

            <div>
              <span className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2">
                Ac / Non-ac
              </span>
              <div className="flex gap-3">
                <label
                  className={`flex-1 cursor-pointer text-center text-sm font-medium rounded-sm border px-4 py-3 transition-colors ${
                    data.ac === "ac"
                      ? "bg-[#0F2A22] text-[#F3EFE6] border-[#0F2A22]"
                      : "bg-white text-[#0F2A22]/70 border-[#0F2A22]/15 hover:border-[#0F2A22]/30"
                  }`}
                >
                  <input
                    type="radio"
                    id="checkac"
                    name="ac"
                    value="ac"
                    checked={data.ac === "ac"}
                    required
                    onChange={changeac}
                    className="sr-only"
                  />
                  Ac
                </label>
                <label
                  className={`flex-1 cursor-pointer text-center text-sm font-medium rounded-sm border px-4 py-3 transition-colors ${
                    data.ac === "nonac"
                      ? "bg-[#0F2A22] text-[#F3EFE6] border-[#0F2A22]"
                      : "bg-white text-[#0F2A22]/70 border-[#0F2A22]/15 hover:border-[#0F2A22]/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="ac"
                    value="nonac"
                    checked={data.ac === "nonac"}
                    onChange={changeac}
                    className="sr-only"
                  />
                  Non-Ac
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 w-full bg-[#D4AF7A] text-[#0F2A22] text-sm font-semibold tracking-wide px-6 py-3.5 rounded-sm hover:bg-[#e2c393] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Adding…" : "Add Dining"}
            </button>
          </form>

          {/* Vertical divider, desktop only */}
          <div className="hidden lg:block w-px bg-[#D4AF7A]/15 self-stretch" />

          {/* Live table preview */}
          <div>
            <p className="font-['Inter'] text-xs font-semibold tracking-[0.15em] uppercase text-[#F3EFE6]/40 mb-4">
              Table preview
            </p>

            <div className="relative rounded-lg border border-[#D4AF7A]/25 bg-[#0F2A22] p-8 flex flex-col items-center">
              {/* Status indicator, top-right corner of the card */}
              <div className="absolute top-5 right-5 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  {status?.pulse && (
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full ${status.dot} opacity-60`}
                    />
                  )}
                  <span
                    className={`relative inline-flex h-2.5 w-2.5 rounded-full ${status ? status.dot : "bg-[#F3EFE6]/20"}`}
                  />
                </span>
                <span
                  className={`font-['Inter'] text-[11px] font-medium tracking-wide ${status ? status.text : "text-[#F3EFE6]/35"}`}
                >
                  {status ? status.label : "No status"}
                </span>
              </div>

              {/* Table illustration */}
              <div className="relative w-40 h-40 mb-6 mt-4">
                <div
                  className={`absolute inset-0 rounded-full border-4 ${
                    isAc ? "border-[#6FB7C9]" : "border-[#D4AF7A]"
                  } bg-[#F3EFE6]/5`}
                />
                <div
                  className={`absolute inset-6 rounded-full ${
                    isAc ? "bg-[#6FB7C9]/15" : "bg-[#D4AF7A]/15"
                  } flex items-center justify-center`}
                >
                  <span className="font-['Cormorant_Garamond',serif] text-2xl text-[#F3EFE6]">
                    {data.capacity || "–"}
                  </span>
                </div>
                {/* Seat marks */}
                {Array.from({
                  length: Math.min(Number(data.capacity) || 0, 8),
                }).map((_, i, arr) => {
                  const angle = (360 / arr.length) * i;
                  return (
                    <span
                      key={i}
                      className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-[#F3EFE6]/70"
                      style={{
                        transform: `rotate(${angle}deg) translate(0, -76px) rotate(-${angle}deg)`,
                      }}
                    />
                  );
                })}
              </div>

              <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[#F3EFE6] mb-1">
                {data.dinningid || "Table ID"}
              </h3>
              <p className="text-[#F3EFE6]/50 text-xs mb-6">
                {data.floor ? floorLabels[data.floor] : "Floor not selected"}
              </p>

              <div className="flex gap-2">
                <span
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
                    data.capacity
                      ? "border-[#D4AF7A]/40 text-[#D4AF7A]"
                      : "border-[#F3EFE6]/15 text-[#F3EFE6]/35"
                  }`}
                >
                  {data.capacity ? `${data.capacity} seats` : "Seats —"}
                </span>
                <span
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
                    data.ac
                      ? isAc
                        ? "border-[#6FB7C9]/50 text-[#6FB7C9]"
                        : "border-[#D4AF7A]/40 text-[#D4AF7A]"
                      : "border-[#F3EFE6]/15 text-[#F3EFE6]/35"
                  }`}
                >
                  {data.ac ? (isAc ? "Ac" : "Non-Ac") : "Ac status —"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dinning;
