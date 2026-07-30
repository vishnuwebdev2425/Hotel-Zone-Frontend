import { useState } from "react";

/**
 * Uses the same fonts as Header.jsx / Body.jsx / Footer.jsx — make sure
 * this is in your index.html:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 *
 * NOTE ON THE ENDPOINT: no contact-form API was specified, so this posts to
 * a placeholder `http://localhost:8080/api/contact`. Swap it for your real
 * endpoint once it exists.
 */

const contactDetails = [
  {
    label: "Email",
    value: "hello@hotelzone.com",
    href: "mailto:hello@hotelzone.com",
  },
  { label: "Phone", value: "+91 70109 84223", href: "tel:+917010984223" },
  { label: "Office", value: "Tirupati, Andhra Pradesh, India", href: null },
];

const ContactUs = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    hotelname: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (field) => (e) => {
    setData({ ...data, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    alert("Message Delivered SuccessFully....!");
    setData({
        name:"",
        email:"",
        hotelname:"",
        message:""
    })
  };

  return (
    <div className="bg-[#FAF7F1] text-[#0F2A22]">
      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 lg:px-10 pt-24 pb-14 text-center">
        <span className="font-['Inter'] text-xs font-semibold tracking-[0.25em] uppercase text-[#B08D57]">
          Get in touch
        </span>
        <h1 className="font-['Cormorant_Garamond',serif] text-4xl lg:text-5xl leading-tight mt-5 mb-6">
          Let's talk about your hotel.
        </h1>
        <p className="text-[#0F2A22]/65 text-base lg:text-lg max-w-xl mx-auto">
          Questions about pricing, onboarding, or whether HotelZone fits your
          property — send us a note and a real person will get back to you.
        </p>
      </section>

      {/* Form + details */}
      <section className="border-t border-[#0F2A22]/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14">
          {/* Contact details */}
          <div>
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl mb-8">
              Reach us directly
            </h2>

            <div className="flex flex-col gap-7 mb-12">
              {contactDetails.map((c) => (
                <div key={c.label}>
                  <p className="font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/40 mb-1.5">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="font-['Cormorant_Garamond',serif] text-xl text-[#0F2A22] hover:text-[#B08D57] transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-['Cormorant_Garamond',serif] text-xl text-[#0F2A22]">
                      {c.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-[#0F2A22]/10 pt-7">
              <p className="font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/40 mb-2">
                Response time
              </p>
              <p className="text-[#0F2A22]/65 text-sm max-w-xs">
                We reply within 24 hours, most days sooner.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-[#0F2A22]/10 rounded-md p-8">
            {status === "sent" ? (
              <div className="flex flex-col items-center text-center py-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-2xl mb-5">
                  ✓
                </span>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl mb-3">
                  Message sent
                </h3>
                <p className="text-[#0F2A22]/60 text-sm max-w-xs mb-7">
                  Thanks for reaching out — we'll get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm font-medium text-[#B08D57] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Full name"
                      value={data.name}
                      onChange={handleChange("name")}
                      className="w-full bg-[#FAF7F1] border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      value={data.email}
                      onChange={handleChange("email")}
                      className="w-full bg-[#FAF7F1] border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="hotelname"
                    className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
                  >
                    Hotel name{" "}
                    <span className="normal-case text-[#0F2A22]/35">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    id="hotelname"
                    name="hotelname"
                    placeholder="e.g. Seaside Grand"
                    value={data.hotelname}
                    onChange={handleChange("hotelname")}
                    className="w-full bg-[#FAF7F1] border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us a bit about your property, or what you'd like to know."
                    value={data.message}
                    onChange={handleChange("message")}
                    className="w-full bg-[#FAF7F1] border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong sending your message. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-1 w-full bg-[#0F2A22] text-[#F3EFE6] text-sm font-semibold tracking-wide px-6 py-3.5 rounded-sm hover:bg-[#0F2A22]/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
