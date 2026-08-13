/**
 * Uses the same fonts as Header.jsx — make sure this is in your index.html:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 */

import { Link } from "react-router-dom";

const reviews = [
  {
    name: "Priya Nair",
    role: "Owner, Seaside Grand",
    rating: 5,
    quote:
      "Onboarding took an afternoon, not a month. Our front desk stopped juggling three spreadsheets on day one.",
  },
  {
    name: "Marcus Webb",
    role: "GM, The Aldridge Hotel",
    rating: 5,
    quote:
      "Table and room management finally live in one place. Fewer double-bookings, fewer angry phone calls.",
  },
  {
    name: "Fatima Rahman",
    role: "Owner, Palm Court Inn",
    rating: 4,
    quote:
      "Support actually replies. Small thing, but it's the reason we stayed after the trial ended.",
  },
];

const Stars = ({ count }) => (
  <div
    className="flex gap-0.5 text-[#D4AF7A]"
    aria-label={`${count} out of 5 stars`}
  >
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? "opacity-100" : "opacity-25"}>
        ★
      </span>
    ))}
  </div>
);

const Body = () => {
  return (
    <div className="bg-[#FAF7F1] text-[#0F2A22]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-14">
        <div className="flex-1">
          <span className="font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
            Built for independent hotels
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] text-4xl lg:text-6xl leading-tight mt-4 mb-6">
            Run your hotel like the guests are always about to walk in.
          </h1>
          <p className="text-[#0F2A22]/70 text-base lg:text-lg max-w-lg mb-8">
            One dashboard for rooms, dining, and staff — so your team spends
            less time coordinating and more time on the floor.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/register">
              <button className="bg-[#0F2A22] text-[#F3EFE6] text-sm font-semibold tracking-wide px-7 py-3 rounded-sm hover:bg-[#0F2A22]/90 transition-colors">
                Register Now
              </button>
            </Link>
            <Link to="/">
              <button className="border border-[#0F2A22]/25 text-[#0F2A22] text-sm font-semibold tracking-wide px-7 py-3 rounded-sm hover:border-[#0F2A22] transition-colors">
                See how it works
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80"
            alt="Elegant hotel room with warm lighting"
            className="w-full h-[420px] object-cover rounded-t-[200px] rounded-b-md shadow-lg"
          />
        </div>
      </section>

      {/* Dining / feature section */}
      <section className="border-t border-[#0F2A22]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 flex flex-col lg:flex-row-reverse items-center gap-14">
          <div className="flex-1">
            <span className="font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
              Dining &amp; events
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-5xl leading-tight mt-4 mb-6">
              Table layouts and bookings, arranged the way you'd set them by
              hand.
            </h2>
            <p className="text-[#0F2A22]/70 text-base lg:text-lg max-w-lg mb-8">
              Adjust seating for a quiet Tuesday or a full banquet hall in
              minutes, and keep every reservation synced with the front desk.
            </p>
            <Link to="/register">
              <button className="bg-[#D4AF7A] text-[#0F2A22] text-sm font-semibold tracking-wide px-7 py-3 rounded-sm hover:bg-[#c49f68] transition-colors">
                Register Now
              </button>
            </Link>
          </div>
          <div className="flex-1 w-full">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80"
              alt="Restaurant dining table set for service"
              className="w-full h-[380px] object-cover rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Solutions CTA banner */}
      <section className="bg-[#0F2A22]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 text-center">
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-5xl leading-tight text-[#F3EFE6] mb-5">
            Your problems, our solutions.
          </h2>
          <p className="text-[#F3EFE6]/70 text-base lg:text-lg max-w-xl mx-auto mb-9">
            Already running a property with us? Sign back in and pick up where
            your team left off.
          </p>
          <Link to="/login">
            <button className="border border-[#D4AF7A] text-[#D4AF7A] text-sm font-semibold tracking-wide px-8 py-3 rounded-sm hover:bg-[#D4AF7A] hover:text-[#0F2A22] transition-colors">
              Login Now
            </button>
          </Link>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-t border-[#0F2A22]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
              What hoteliers say
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-5xl leading-tight mt-4">
              Reviews from the front desk
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white border border-[#0F2A22]/10 rounded-md p-7 flex flex-col gap-4 shadow-sm"
              >
                <Stars count={review.rating} />
                <p className="font-['Cormorant_Garamond',serif] text-lg leading-snug text-[#0F2A22]">
                  “{review.quote}”
                </p>
                <div className="mt-auto pt-2 border-t border-[#0F2A22]/10">
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-[#0F2A22]/55">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
