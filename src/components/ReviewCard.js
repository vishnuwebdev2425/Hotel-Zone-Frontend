/**
 * Uses the same fonts as the rest of the app — make sure this is in your
 * index.html:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 */

const Stars = ({ count, size = "text-sm" }) => (
  <div
    className={`flex gap-0.5 text-[#D4AF7A] ${size}`}
    aria-label={`${count} out of 5 stars`}
  >
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? "opacity-100" : "opacity-20"}>
        ★
      </span>
    ))}
  </div>
);

const ReviewCard = ({ review }) => {
  const { name, hotelname, rating, quote, date } = review;

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="bg-white border border-[#0F2A22]/10 rounded-md p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <Stars count={rating} />
        {date && (
          <span className="font-['Inter'] text-[11px] text-[#0F2A22]/35">
            {date}
          </span>
        )}
      </div>

      <p className="font-['Cormorant_Garamond',serif] text-lg leading-snug text-[#0F2A22]">
        "{quote}"
      </p>

      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#0F2A22]/10">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0F2A22]/5 font-['Inter'] text-xs font-semibold text-[#0F2A22]/60">
          {initials}
        </span>
        <div>
          <p className="text-sm font-semibold text-[#0F2A22]">{name}</p>
          {hotelname && (
            <p className="text-xs text-[#0F2A22]/45">{hotelname}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
