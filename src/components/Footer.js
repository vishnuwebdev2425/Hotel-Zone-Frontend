/**
 * Uses the same fonts as Header.jsx / Body.jsx — make sure this is in your index.html:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 */

const footerLinks = {
  Product: [
    { label: "Rooms & bookings", href: "#" },
    { label: "Dining & events", href: "#" },
    { label: "Staff scheduling", href: "#" },
    { label: "Pricing", href: "#" },
  ],
  Company: [
    { label: "About us", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Careers", href: "#" },
    { label: "Contact us", href: "#contact" },
  ],
  Support: [
    { label: "Help centre", href: "#" },
    { label: "Onboarding guide", href: "#" },
    { label: "System status", href: "#" },
  ],
};

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0F2A22] text-[#F3EFE6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-[#D4AF7A]/15">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://res.cloudinary.com/djcslopvv/image/upload/v1784878155/hotel-removebg-preview_pcerl8.png"
                alt="HotelZone logo"
                className="h-9 w-9 object-contain"
              />
              <span className="font-['Cormorant_Garamond',serif] text-2xl tracking-wide">
                Hotel<span className="text-[#D4AF7A]">Zone</span>
              </span>
            </div>
            <p className="text-sm text-[#F3EFE6]/60 max-w-xs mb-6">
              One dashboard for rooms, dining, and staff — built for independent
              hotels that want fewer spreadsheets and fewer double-bookings.
            </p>
            <div className="flex gap-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs tracking-wide text-[#F3EFE6]/60 hover:text-[#D4AF7A] transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-['Inter'] text-xs font-semibold tracking-[0.15em] uppercase text-[#D4AF7A] mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#F3EFE6]/70 hover:text-[#F3EFE6] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 text-xs text-[#F3EFE6]/50">
          <p>
            &copy; {new Date().getFullYear()} HotelZone. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D4AF7A] transition-colors">
              Privacy policy
            </a>
            <a href="#" className="hover:text-[#D4AF7A] transition-colors">
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
