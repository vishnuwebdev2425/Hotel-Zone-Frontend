import { useMemo, useState } from "react";
import ReviewCard from "./ReviewCard";

/**
 * Uses the same fonts as the rest of the app — make sure this is in your
 * index.html:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 *
 * NOTE ON DATA: `initialReviews` below is placeholder content so the page
 * has something to render. Replace it with a real fetch to your reviews
 * endpoint (e.g. GET /api/reviews) once it exists — the layout, filters,
 * and stats all work off whatever array is in `reviews` state.
 *
 * NOTE ON THE ENDPOINT: the "write a review" form posts to a placeholder
 * `http://localhost:8080/api/reviews`. Swap it for your real route.
 */

const initialReviews = [
  {
    id: 1,
    name: "Priya Nair",
    hotelname: "Seaside Grand",
    rating: 5,
    date: "Jun 2026",
    quote:
      "Onboarding took an afternoon, not a month. Our front desk stopped juggling three spreadsheets on day one.",
  },
  {
    id: 2,
    name: "Marcus Webb",
    hotelname: "The Aldridge Hotel",
    rating: 5,
    date: "May 2026",
    quote:
      "Table and room management finally live in one place. Fewer double-bookings, fewer angry phone calls.",
  },
  {
    id: 3,
    name: "Fatima Rahman",
    hotelname: "Palm Court Inn",
    rating: 4,
    date: "May 2026",
    quote:
      "Support actually replies. Small thing, but it's the reason we stayed after the trial ended.",
  },
  {
    id: 4,
    name: "Vishnu Teja",
    hotelname: "Sri Srinivasa",
    rating: 5,
    date: "Apr 2026",
    quote:
      "Switched our dining floor over in a weekend. Staff picked it up faster than I expected.",
  },
  {
    id: 5,
    name: "Anjali Menon",
    hotelname: "Coastline Residency",
    rating: 4,
    date: "Mar 2026",
    quote:
      "Does exactly what we need without fifty features we'll never touch. Refreshing.",
  },
  {
    id: 6,
    name: "Daniel Cruz",
    hotelname: "Harborview Suites",
    rating: 3,
    date: "Feb 2026",
    quote:
      "Solid core product. Reporting could go deeper, but the day-to-day operations side is dependable.",
  },
  {
    id: 7,
    name: "Kavya Reddy",
    hotelname: "Lotus Heritage",
    rating: 5,
    date: "Jan 2026",
    quote:
      "Our night audit used to take an hour. Now it's closer to ten minutes.",
  },
  {
    id: 8,
    name: "Thomas Abraham",
    hotelname: "Malabar Court",
    rating: 4,
    date: "Jan 2026",
    quote:
      "Clean, fast, and the team actually ships fixes when you report something.",
  },
];

const ratingFilters = [5, 4, 3, 2, 1];

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [activeFilter, setActiveFilter] = useState("all");
  const API_URL = process.env.API_URL;

  const [form, setForm] = useState({ name: "", hotelname: "", quote: "" });
  const [formRating, setFormRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const total = reviews.length;
  const average = total
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / total).toFixed(1)
    : "0.0";

  const breakdown = useMemo(() => {
    return ratingFilters.map((star) => {
      const count = reviews.filter((r) => r.rating === star).length;
      return {
        star,
        count,
        pct: total ? Math.round((count / total) * 100) : 0,
      };
    });
  }, [reviews, total]);

  const filteredReviews =
    activeFilter === "all"
      ? reviews
      : reviews.filter((r) => r.rating === activeFilter);

  const handleFormChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (formRating === 0) return;
    setStatus("sending");

    const newReview = {
      name: form.name,
      hotelname: form.hotelname,
      rating: formRating,
      quote: form.quote,
      date: "Just now",
    };

    try {
      const response = await fetch(`${API_URL}/api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });

      if (response.ok) {
        setReviews((prev) => [{ id: Date.now(), ...newReview }, ...prev]);
        setForm({ name: "", hotelname: "", quote: "" });
        setFormRating(0);
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#FAF7F1] text-[#0F2A22]">
      {/* Intro + aggregate rating */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 pt-24 pb-16">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-['Inter'] text-xs font-semibold tracking-[0.25em] uppercase text-[#B08D57]">
            Reviews
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] text-4xl lg:text-5xl leading-tight mt-5 mb-6">
            What hoteliers say about running on HotelZone.
          </h1>
          <p className="text-[#0F2A22]/65 text-base">
            Real feedback from the front desks and kitchens actually using it
            every day.
          </p>
        </div>

        <div className="bg-white border border-[#0F2A22]/10 rounded-lg p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-center">
          <div className="text-center lg:border-r lg:border-[#0F2A22]/10 lg:pr-10">
            <p className="font-['Cormorant_Garamond',serif] text-6xl leading-none mb-2">
              {average}
            </p>
            <div className="flex justify-center mb-2">
              <span className="flex gap-0.5 text-[#D4AF7A] text-lg">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < Math.round(average) ? "opacity-100" : "opacity-20"
                    }
                  >
                    ★
                  </span>
                ))}
              </span>
            </div>
            <p className="font-['Inter'] text-xs text-[#0F2A22]/45">
              Based on {total} reviews
            </p>
          </div>

          <div className="flex flex-col gap-2.5 w-full">
            {breakdown.map(({ star, count, pct }) => (
              <div key={star} className="flex items-center gap-3">
                <span className="font-['Inter'] text-xs text-[#0F2A22]/60 w-10 shrink-0">
                  {star} star
                </span>
                <div className="flex-1 h-2 rounded-full bg-[#0F2A22]/8 overflow-hidden">
                  <div
                    className="h-full bg-[#D4AF7A] rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="font-['Inter'] text-xs text-[#0F2A22]/40 w-8 text-right shrink-0">
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="border-t border-[#0F2A22]/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveFilter("all")}
              className={`font-['Inter'] text-xs font-medium px-4 py-2 rounded-full border transition-colors ${
                activeFilter === "all"
                  ? "bg-[#0F2A22] text-[#F3EFE6] border-[#0F2A22]"
                  : "bg-white text-[#0F2A22]/60 border-[#0F2A22]/15 hover:border-[#0F2A22]/30"
              }`}
            >
              All ({total})
            </button>
            {ratingFilters.map((star) => {
              const count = reviews.filter((r) => r.rating === star).length;
              return (
                <button
                  key={star}
                  onClick={() => setActiveFilter(star)}
                  className={`font-['Inter'] text-xs font-medium px-4 py-2 rounded-full border transition-colors ${
                    activeFilter === star
                      ? "bg-[#0F2A22] text-[#F3EFE6] border-[#0F2A22]"
                      : "bg-white text-[#0F2A22]/60 border-[#0F2A22]/15 hover:border-[#0F2A22]/30"
                  }`}
                >
                  {star} star ({count})
                </button>
              );
            })}
          </div>

          {filteredReviews.length === 0 ? (
            <p className="text-center text-[#0F2A22]/45 text-sm py-16">
              No reviews at this rating yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Write a review */}
      <section className="bg-[#0F2A22]">
        <div className="max-w-2xl mx-auto px-6 lg:px-10 py-20">
          <div className="text-center mb-10">
            <span className="font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF7A]">
              Share your experience
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl text-[#F3EFE6] mt-4">
              Leave a review
            </h2>
          </div>

          <div className="bg-[#F3EFE6] rounded-lg p-8">
            {status === "sent" ? (
              <div className="flex flex-col items-center text-center py-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-2xl mb-5">
                  ✓
                </span>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[#0F2A22] mb-3">
                  Thanks for the review
                </h3>
                <p className="text-[#0F2A22]/60 text-sm mb-7 max-w-xs">
                  It's live above — appreciate you taking the time.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm font-medium text-[#B08D57] hover:underline"
                >
                  Write another review
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmitReview}
                className="flex flex-col gap-5"
              >
                <div>
                  <label className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2">
                    Your rating
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFormRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="text-2xl leading-none transition-transform hover:scale-110"
                      >
                        <span
                          className={
                            star <= (hoverRating || formRating)
                              ? "text-[#D4AF7A]"
                              : "text-[#0F2A22]/15"
                          }
                        >
                          ★
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="revname"
                      className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="revname"
                      required
                      placeholder="Full name"
                      value={form.name}
                      onChange={handleFormChange("name")}
                      className="w-full bg-white border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="revhotel"
                      className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
                    >
                      Hotel name
                    </label>
                    <input
                      type="text"
                      id="revhotel"
                      placeholder="e.g. Seaside Grand"
                      value={form.hotelname}
                      onChange={handleFormChange("hotelname")}
                      className="w-full bg-white border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="revquote"
                    className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
                  >
                    Your review
                  </label>
                  <textarea
                    id="revquote"
                    required
                    rows={4}
                    placeholder="What's it been like running on HotelZone?"
                    value={form.quote}
                    onChange={handleFormChange("quote")}
                    className="w-full bg-white border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors resize-none"
                  />
                </div>

                {formRating === 0 && (
                  <p className="text-xs text-[#0F2A22]/45">
                    Select a star rating to submit.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong submitting your review. Please try
                    again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending" || formRating === 0}
                  className="mt-1 w-full bg-[#0F2A22] text-[#F3EFE6] text-sm font-semibold tracking-wide px-6 py-3.5 rounded-sm hover:bg-[#0F2A22]/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Submitting…" : "Submit review"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
