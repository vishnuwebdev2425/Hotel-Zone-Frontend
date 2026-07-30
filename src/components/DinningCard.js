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

const DinningCard = ({ dinning }) => {
  const { dinningid, capacity, floor, ac, status, register } = dinning;
  const isAc = ac === "ac";
  const meta = statusMeta[status];

  return (
    <div className="relative rounded-lg border border-[#D4AF7A]/20 bg-[#0F2A22] p-7 flex flex-col items-center hover:border-[#D4AF7A]/45 transition-colors">
      {/* Hotel name tag, top-left */}
      {register?.hotalname && (
        <span className="absolute top-5 left-5 font-['Inter'] text-[10px] font-semibold tracking-[0.1em] uppercase text-[#F3EFE6]/40">
          {register.hotalname}
        </span>
      )}

      {/* Status indicator, top-right */}
      <div className="absolute top-5 right-5 flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          {meta?.pulse && (
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full ${meta.dot} opacity-60`}
            />
          )}
          <span
            className={`relative inline-flex h-2.5 w-2.5 rounded-full ${meta ? meta.dot : "bg-[#F3EFE6]/20"}`}
          />
        </span>
        <span
          className={`font-['Inter'] text-[11px] font-medium tracking-wide ${meta ? meta.text : "text-[#F3EFE6]/35"}`}
        >
          {meta ? meta.label : "Unknown"}
        </span>
      </div>

      {/* Table illustration */}
      <div className="relative w-32 h-32 mb-5 mt-6">
        <div
          className={`absolute inset-0 rounded-full border-4 ${
            isAc ? "border-[#6FB7C9]" : "border-[#D4AF7A]"
          } bg-[#F3EFE6]/5`}
        />
        <div
          className={`absolute inset-5 rounded-full ${
            isAc ? "bg-[#6FB7C9]/15" : "bg-[#D4AF7A]/15"
          } flex items-center justify-center`}
        >
          <span className="font-['Cormorant_Garamond',serif] text-xl text-[#F3EFE6]">
            {capacity ?? "–"}
          </span>
        </div>
        {Array.from({ length: Math.min(Number(capacity) || 0, 8) }).map(
          (_, i, arr) => {
            const angle = (360 / arr.length) * i;
            return (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full bg-[#F3EFE6]/70"
                style={{
                  transform: `rotate(${angle}deg) translate(0, -60px) rotate(-${angle}deg)`,
                }}
              />
            );
          },
        )}
      </div>

      <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[#F3EFE6] mb-1">
        {dinningid}
      </h3>
      <p className="text-[#F3EFE6]/50 text-xs mb-5">
        {floorLabels[floor] || "Floor unknown"}
      </p>

      <div className="flex gap-2">
        <span className="text-xs font-medium px-3 py-1.5 rounded-full border border-[#D4AF7A]/40 text-[#D4AF7A]">
          {capacity} seats
        </span>
        <span
          className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
            isAc
              ? "border-[#6FB7C9]/50 text-[#6FB7C9]"
              : "border-[#D4AF7A]/40 text-[#D4AF7A]"
          }`}
        >
          {isAc ? "Ac" : "Non-Ac"}
        </span>
      </div>
    </div>
  );
};

export default DinningCard;
