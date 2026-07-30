/**
 * Uses the same fonts as the rest of the app — make sure this is in your
 * index.html:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 */

const steps = [
  {
    number: "01",
    tag: "Get set up",
    title: "Register your hotel",
    copy: "Create an account with your username, phone number, hotel name, address, and a password. Takes about two minutes — no sales call required.",
  },
  {
    number: "02",
    tag: "Sign in",
    title: "Log in to your dashboard",
    copy: "Use the credentials you just created to sign in. That drops you straight into your Admin Dashboard, built specifically around your hotel.",
  },
  {
    number: "03",
    tag: "Set up your floor",
    title: "Add your menu and dining tables",
    copy: "Add dishes to your menu, then lay out your dining tables by floor, capacity, and Ac/Non-Ac. The moment a table fills up, mark it Occupied — the change reflects everywhere instantly.",
  },
  {
    number: "04",
    tag: "Go live",
    title: "Your customer workspace is ready",
    copy: "HotelZone creates a dedicated workspace just for your property. Anyone walking in can log in and immediately see your live menu and which tables are actually free — no asking around.",
  },
];

/* ---- tiny mock UI illustrations, built from the same design tokens as the real app ---- */

const RegisterMock = () => (
  <div className="bg-white rounded-lg border border-[#0F2A22]/10 p-5 w-full max-w-[300px] shadow-sm">
    <p className="font-['Cormorant_Garamond',serif] text-lg text-[#0F2A22] mb-4">
      Register your hotel
    </p>
    {["Username", "Hotel name", "Password"].map((label) => (
      <div key={label} className="mb-3">
        <span className="block font-['Inter'] text-[9px] font-semibold tracking-wide uppercase text-[#0F2A22]/40 mb-1">
          {label}
        </span>
        <div className="h-8 rounded-sm bg-[#FAF7F1] border border-[#0F2A22]/10" />
      </div>
    ))}
    <div className="h-9 rounded-sm bg-[#0F2A22] flex items-center justify-center mt-4">
      <span className="font-['Inter'] text-xs font-semibold text-[#F3EFE6]">
        Register
      </span>
    </div>
  </div>
);

const LoginMock = () => (
  <div className="bg-[#0F2A22] rounded-lg p-5 w-full max-w-[300px] shadow-sm">
    <p className="font-['Cormorant_Garamond',serif] text-lg text-[#F3EFE6] mb-4">
      Sign in
    </p>
    {["Phone number", "Password"].map((label) => (
      <div key={label} className="mb-3">
        <span className="block font-['Inter'] text-[9px] font-semibold tracking-wide uppercase text-[#F3EFE6]/40 mb-1">
          {label}
        </span>
        <div className="h-8 rounded-sm bg-white/5 border border-white/15" />
      </div>
    ))}
    <div className="h-9 rounded-sm bg-[#D4AF7A] flex items-center justify-center mt-4">
      <span className="font-['Inter'] text-xs font-semibold text-[#0F2A22]">
        Log in
      </span>
    </div>
  </div>
);

const DashboardMock = () => (
  <div className="bg-white rounded-lg border border-[#0F2A22]/10 p-5 w-full max-w-[320px] shadow-sm">
    <p className="font-['Cormorant_Garamond',serif] text-lg text-[#0F2A22] mb-4">
      Admin dashboard
    </p>
    <div className="grid grid-cols-2 gap-2 mb-3">
      {[
        { label: "D-14", status: "bg-emerald-100 text-emerald-700" },
        { label: "D-15", status: "bg-red-100 text-red-700" },
      ].map((t) => (
        <div
          key={t.label}
          className="border border-[#0F2A22]/10 rounded-sm p-2.5"
        >
          <p className="font-['Inter'] text-xs font-semibold text-[#0F2A22] mb-1">
            {t.label}
          </p>
          <span
            className={`inline-block text-[9px] font-medium px-2 py-0.5 rounded-full ${t.status}`}
          >
            {t.label === "D-14" ? "Available" : "Occupied"}
          </span>
        </div>
      ))}
    </div>
    <div className="h-8 rounded-sm bg-[#D4AF7A] flex items-center justify-center">
      <span className="font-['Inter'] text-[10px] font-semibold text-[#0F2A22]">
        + Add menu item
      </span>
    </div>
  </div>
);

const WorkspaceMock = () => (
  <div className="bg-[#FAF7F1] rounded-lg border border-[#0F2A22]/10 p-5 w-full max-w-[320px] shadow-sm">
    <p className="font-['Cormorant_Garamond',serif] text-lg text-[#0F2A22] mb-4">
      Your customer workspace
    </p>
    <div className="flex items-center justify-between bg-white rounded-sm border border-[#0F2A22]/10 p-2.5 mb-2">
      <span className="font-['Inter'] text-xs text-[#0F2A22]">
        Paneer Butter Masala
      </span>
      <span className="font-['Inter'] text-xs font-semibold text-[#B08D57]">
        ₹249
      </span>
    </div>
    <div className="flex items-center justify-between bg-white rounded-sm border border-[#0F2A22]/10 p-2.5 mb-3">
      <span className="font-['Inter'] text-xs text-[#0F2A22]">Table D-14</span>
      <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
        Available
      </span>
    </div>
    <div className="h-8 rounded-sm bg-[#0F2A22] flex items-center justify-center">
      <span className="font-['Inter'] text-[10px] font-semibold text-[#F3EFE6]">
        Book Dining
      </span>
    </div>
  </div>
);

const mocks = [RegisterMock, LoginMock, DashboardMock, WorkspaceMock];

const HowItWorks = () => {
  return (
    <div className="bg-[#FAF7F1] text-[#0F2A22]">
      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 lg:px-10 pt-24 pb-16 text-center">
        <span className="font-['Inter'] text-xs font-semibold tracking-[0.25em] uppercase text-[#B08D57]">
          See how it works
        </span>
        <h1 className="font-['Cormorant_Garamond',serif] text-4xl lg:text-5xl leading-tight mt-5 mb-6">
          From registration to a live workspace, in four steps.
        </h1>
        <p className="text-[#0F2A22]/65 text-base lg:text-lg max-w-xl mx-auto">
          Here's exactly what happens between creating an account and your
          guests seeing your live menu and table availability.
        </p>
      </section>

      {/* Steps timeline */}
      <section className="border-t border-[#0F2A22]/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
          <div className="relative">
            {/* Connecting line, desktop only */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#0F2A22]/10 -translate-x-1/2" />

            <div className="flex flex-col gap-16 lg:gap-24">
              {steps.map((step, i) => {
                const Mock = mocks[i];
                const reversed = i % 2 === 1;

                return (
                  <div
                    key={step.number}
                    className={`relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                      reversed ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Step marker, desktop only */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-[#0F2A22] items-center justify-center z-10 border-4 border-[#FAF7F1]">
                      <span className="font-['Cormorant_Garamond',serif] text-sm text-[#D4AF7A]">
                        {step.number}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="flex-1 max-w-md">
                      <span className="lg:hidden font-['Cormorant_Garamond',serif] text-3xl text-[#D4AF7A]">
                        {step.number}
                      </span>
                      <span className="block font-['Inter'] text-xs font-semibold tracking-[0.15em] uppercase text-[#B08D57] mt-2 mb-3">
                        {step.tag}
                      </span>
                      <h2 className="font-['Cormorant_Garamond',serif] text-2xl lg:text-3xl leading-snug mb-4">
                        {step.title}
                      </h2>
                      <p className="text-[#0F2A22]/65 text-sm lg:text-base leading-relaxed">
                        {step.copy}
                      </p>
                    </div>

                    {/* Mock UI */}
                    <div className="flex-1 flex justify-center">
                      <Mock />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F2A22]">
        <div className="max-w-2xl mx-auto px-6 lg:px-10 py-20 text-center">
          <span className="font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF7A]">
            Ready when you are
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl text-[#F3EFE6] mt-4 mb-6">
            Your workspace is four steps away.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/register"
              className="bg-[#D4AF7A] text-[#0F2A22] text-sm font-semibold tracking-wide px-8 py-3 rounded-sm hover:bg-[#c49f68] transition-colors"
            >
              Register your hotel
            </a>
            <a
              href="/login"
              className="border border-[#F3EFE6]/25 text-[#F3EFE6] text-sm font-semibold tracking-wide px-8 py-3 rounded-sm hover:border-[#F3EFE6] transition-colors"
            >
              I already have an account
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
