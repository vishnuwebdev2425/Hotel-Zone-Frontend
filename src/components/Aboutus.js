/**
 * Uses the same fonts as Header.jsx / Body.jsx / Footer.jsx — make sure
 * this is in your index.html:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 */

const values = [
  {
    title: "Built with hoteliers, not just for them",
    copy: "Every screen came out of a conversation with a real front desk or kitchen team, not a whiteboard guess.",
  },
  {
    title: "One system, not five subscriptions",
    copy: "Rooms, dining, and staff status live in the same dashboard instead of three different logins.",
  },
  {
    title: "Support that actually answers",
    copy: "A 24-hour response window, backed by people who've worked a front desk themselves.",
  },
];

const milestones = [
  { year: "2019", label: "First version, built for one hotel in Tirupati" },
  { year: "2021", label: "Dining & table management added" },
  { year: "2023", label: "Crossed 1,000 hotels onboarded" },
  { year: "2026", label: "2,400+ properties running on HotelZone" },
];

const AboutUs = () => {
  return (
    <div className="bg-[#FAF7F1] text-[#0F2A22]">
      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 lg:px-10 pt-24 pb-16 text-center">
        <span className="font-['Inter'] text-xs font-semibold tracking-[0.25em] uppercase text-[#B08D57]">
          About HotelZone
        </span>
        <h1 className="font-['Cormorant_Garamond',serif] text-4xl lg:text-5xl leading-tight mt-5 mb-6">
          We started this because hotel software kept getting in the way.
        </h1>
        <p className="text-[#0F2A22]/65 text-base lg:text-lg max-w-2xl mx-auto">
          HotelZone began as a single spreadsheet-replacement for one family-run
          hotel. Today it runs the rooms, dining floor, and staff schedules for
          properties across the country — still built the same way: talk to the
          people using it, then ship something simpler.
        </p>
      </section>

      {/* Story + image */}
      <section className="border-t border-[#0F2A22]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=80"
            alt="Hotel exterior at dusk"
            className="w-full h-[420px] object-cover rounded-md shadow-lg"
          />
          <div>
            <span className="font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
              Where it started
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl leading-tight mt-4 mb-6">
              A front desk in Tirupati, three spreadsheets, and one long night.
            </h2>
            <p className="text-[#0F2A22]/65 text-base leading-relaxed mb-4">
              Our founder spent a night reconciling room bookings against a
              dining reservation sheet that didn't match either of them. That
              was the whole idea: one dashboard, so the numbers agree with each
              other by default.
            </p>
            <p className="text-[#0F2A22]/65 text-base leading-relaxed">
              We're still a small team. Most of us have worked a front desk, a
              kitchen pass, or a night audit at some point — which is why the
              product looks the way it does.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0F2A22]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF7A]">
              What we care about
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl text-[#F3EFE6] mt-4">
              Three things we won't compromise on
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="border border-[#D4AF7A]/15 rounded-md p-7"
              >
                <span className="font-['Cormorant_Garamond',serif] text-3xl text-[#D4AF7A] mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-['Cormorant_Garamond',serif] text-xl text-[#F3EFE6] mb-3">
                  {v.title}
                </h3>
                <p className="text-[#F3EFE6]/60 text-sm leading-relaxed">
                  {v.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-[#0F2A22]/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
          <div className="text-center mb-14">
            <span className="font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
              How we got here
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl mt-4">
              A quiet, steady climb
            </h2>
          </div>

          <div className="flex flex-col">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`flex items-start gap-6 py-6 ${
                  i !== milestones.length - 1
                    ? "border-b border-[#0F2A22]/10"
                    : ""
                }`}
              >
                <span className="font-['Cormorant_Garamond',serif] text-2xl text-[#B08D57] w-20 shrink-0">
                  {m.year}
                </span>
                <p className="text-[#0F2A22]/75 text-base pt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F2A22]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 text-center">
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl text-[#F3EFE6] mb-5">
            Curious if HotelZone fits your property?
          </h2>
          <p className="text-[#F3EFE6]/65 text-base mb-9 max-w-lg mx-auto">
            Reach out and we'll walk you through it — no sales script, just a
            straight answer about whether it's a good fit.
          </p>
          <a
            href="/contactus"
            className="inline-block bg-[#D4AF7A] text-[#0F2A22] text-sm font-semibold tracking-wide px-8 py-3 rounded-sm hover:bg-[#c49f68] transition-colors"
          >
            Contact us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
