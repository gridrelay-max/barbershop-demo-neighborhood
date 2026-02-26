'use client';
import { useState, useEffect } from "react";

// ═══════════════════════════════════════════════════════════════
// 💈 TEMPLATE 05 — NEIGHBORHOOD
// Warm, friendly, earthy tones, community-focused
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
  SHOP_NAME: "Oak Street Barbers",
  SHOP_TAGLINE: "Your neighborhood barbershop since day one",
  SHOP_ADDRESS: "811 S Tryon St",
  SHOP_CITY: "Charlotte",
  SHOP_STATE: "NC",
  SHOP_ZIP: "28202",
  SHOP_PHONE: "(704) 555-0267",
  SHOP_RATING: "4.8",
  SHOP_REVIEW_COUNT: "94",
  SHOP_GOOGLE_MAPS_URL: "https://maps.google.com",
  SHOP_HOURS: {
    Monday: "9:00 AM – 6:00 PM", Tuesday: "9:00 AM – 6:00 PM",
    Wednesday: "9:00 AM – 6:00 PM", Thursday: "9:00 AM – 7:00 PM",
    Friday: "9:00 AM – 7:00 PM", Saturday: "8:00 AM – 5:00 PM",
    Sunday: "Closed",
  },
  SHOP_SERVICES: [
    { name: "Men's Haircut", price: "$22" },
    { name: "Buzz Cut", price: "$15" },
    { name: "Beard Trim", price: "$12" },
    { name: "Haircut + Beard", price: "$30" },
    { name: "Kids Cut (12 & under)", price: "$15" },
    { name: "Senior Cut (65+)", price: "$18" },
  ],
  SHOP_TOP_REVIEWS: [
    { author: "Brian C.", rating: 5, text: "Feels like going to a friend's place. Great cuts, fair prices, and they remember your name.", time: "1 week ago" },
    { author: "Kevin M.", rating: 5, text: "Brought my son for his first haircut. They were so patient and kind. We'll be back every month.", time: "2 weeks ago" },
    { author: "Robert L.", rating: 5, text: "No frills, just great haircuts. Been going for over a year now. Wouldn't go anywhere else.", time: "1 month ago" },
  ],
};

const StarIcon = ({ filled }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#B5835A" : "none"} stroke="#B5835A" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export default function NeighborhoodBarbershop() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const todayHours = CONFIG.SHOP_HOURS[today] || "Closed";

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#FBF8F4", color: "#3D3428", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet" />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        :root {
          --warm: #B5835A;
          --warm-light: #D4A574;
          --brown: #3D3428;
          --brown-light: #6B5D4D;
          --cream: #FBF8F4;
          --cream-dark: #F0EBE3;
          --sage: #8B9A7B;
        }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .nb-overline {
          font-family: 'Source Code Pro', monospace;
          font-size: 11px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--warm);
          font-weight: 500;
        }
        .nb-heading {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: clamp(32px, 5vw, 52px);
          line-height: 1.15;
          color: var(--brown);
        }
        .nb-heading-sm {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: clamp(26px, 4vw, 38px);
          color: var(--brown);
        }
        .nb-btn {
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 1px;
          padding: 16px 36px;
          background: var(--warm);
          color: #FFF;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
        }
        .nb-btn:hover { background: var(--warm-light); transform: translateY(-2px); }
        .nb-btn-outline {
          background: transparent;
          color: var(--brown);
          border: 2px solid var(--brown);
        }
        .nb-btn-outline:hover { background: var(--brown); color: var(--cream); transform: translateY(-2px); }
        .nb-nav-link {
          font-family: 'Nunito', sans-serif;
          font-weight: 600; font-size: 13px;
          color: var(--brown-light);
          text-decoration: none; cursor: pointer;
          transition: color 0.3s;
        }
        .nb-nav-link:hover { color: var(--warm); }
        .nb-card {
          background: #FFF;
          border-radius: 12px;
          padding: 28px;
          box-shadow: 0 2px 12px rgba(61,52,40,0.06);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .nb-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(61,52,40,0.1); }

        @media (max-width: 768px) {
          .nb-desktop { display: none !important; }
          .nb-mobile { display: flex !important; }
        }
      `}</style>

      {/* ─── NAV ──────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "16px 32px",
        background: scrolled ? "rgba(251,248,244,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #EDE8E0" : "none",
        transition: "all 0.3s",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "20px",
          color: "var(--brown)",
          cursor: "pointer",
        }} onClick={() => scrollTo("home")}>
          {CONFIG.SHOP_NAME}
        </span>

        <div className="nb-desktop" style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          {["services", "hours", "reviews", "contact"].map(s => (
            <span key={s} className="nb-nav-link" onClick={() => scrollTo(s)}>{s.charAt(0).toUpperCase() + s.slice(1)}</span>
          ))}
          <a href={`tel:${CONFIG.SHOP_PHONE}`} className="nb-btn" style={{ padding: "10px 24px", fontSize: "12px" }}>Call Us</a>
        </div>

        <div className="nb-mobile" style={{ display: "none", cursor: "pointer" }} onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brown)" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </div>
      </nav>

      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(251,248,244,0.98)", zIndex: 1000,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "24px",
        }} onClick={() => setMenuOpen(false)}>
          {["services", "hours", "reviews", "contact"].map(s => (
            <span key={s} className="nb-nav-link" style={{ fontSize: "18px" }} onClick={() => scrollTo(s)}>{s.charAt(0).toUpperCase() + s.slice(1)}</span>
          ))}
        </div>
      )}

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section id="home" style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
        background: "linear-gradient(180deg, #FBF8F4 0%, #F5F0E8 100%)",
      }}>
        <div style={{
          background: "rgba(181,131,90,0.1)",
          borderRadius: "50%",
          width: "80px", height: "80px",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: "24px",
          animation: "fadeUp 0.6s ease forwards",
        }}>
          <span style={{ fontSize: "36px" }}>✂️</span>
        </div>

        <h1 className="nb-heading" style={{ maxWidth: "600px", animation: "fadeUp 0.6s ease 0.1s forwards", opacity: 0 }}>
          {CONFIG.SHOP_NAME}
        </h1>
        <p style={{
          fontSize: "16px", color: "var(--brown-light)",
          maxWidth: "400px", lineHeight: 1.6,
          marginTop: "12px",
          animation: "fadeUp 0.6s ease 0.2s forwards", opacity: 0,
        }}>
          {CONFIG.SHOP_TAGLINE}
        </p>

        <div style={{
          display: "flex", alignItems: "center", gap: "8px", marginTop: "20px",
          animation: "fadeUp 0.6s ease 0.25s forwards", opacity: 0,
        }}>
          <div style={{ display: "flex", gap: "2px" }}>
            {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= Math.round(parseFloat(CONFIG.SHOP_RATING))} />)}
          </div>
          <span style={{ fontSize: "14px", color: "var(--brown-light)" }}>
            {CONFIG.SHOP_RATING} ({CONFIG.SHOP_REVIEW_COUNT} reviews)
          </span>
        </div>

        <div style={{ display: "flex", gap: "12px", marginTop: "36px", flexWrap: "wrap", justifyContent: "center", animation: "fadeUp 0.6s ease 0.3s forwards", opacity: 0 }}>
          <a href={`tel:${CONFIG.SHOP_PHONE}`} className="nb-btn">Call to Book</a>
          <span className="nb-btn nb-btn-outline" onClick={() => scrollTo("services")} style={{ cursor: "pointer" }}>Our Services</span>
        </div>

        <div style={{
          marginTop: "40px",
          background: "#FFF",
          borderRadius: "8px",
          padding: "12px 24px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          fontFamily: "'Source Code Pro', monospace",
          fontSize: "12px",
          color: "var(--brown-light)",
          animation: "fadeUp 0.6s ease 0.4s forwards", opacity: 0,
        }}>
          📍 Open today: <strong style={{ color: "var(--warm)" }}>{todayHours}</strong>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────── */}
      <section id="services" style={{ padding: "80px 24px", background: "#FFF" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <p className="nb-overline">What We Do</p>
          <h2 className="nb-heading-sm" style={{ marginTop: "8px" }}>Services & Pricing</h2>

          <div style={{ marginTop: "40px" }}>
            {CONFIG.SHOP_SERVICES.map((s, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "18px 0",
                borderBottom: i < CONFIG.SHOP_SERVICES.length - 1 ? "1px solid #F0EBE3" : "none",
              }}>
                <span style={{ fontSize: "16px", fontWeight: 600 }}>{s.name}</span>
                <span style={{ fontSize: "18px", fontWeight: 700, color: "var(--warm)" }}>{s.price}</span>
              </div>
            ))}
          </div>

          <a href={`tel:${CONFIG.SHOP_PHONE}`} className="nb-btn" style={{ marginTop: "36px" }}>
            Book — {CONFIG.SHOP_PHONE}
          </a>
        </div>
      </section>

      {/* ─── HOURS ────────────────────────────────────────── */}
      <section id="hours" style={{ padding: "80px 24px", background: "var(--cream-dark)" }}>
        <div style={{ maxWidth: "450px", margin: "0 auto", textAlign: "center" }}>
          <p className="nb-overline">Come Visit</p>
          <h2 className="nb-heading-sm" style={{ marginTop: "8px", marginBottom: "36px" }}>Hours</h2>

          <div style={{ background: "#FFF", borderRadius: "12px", padding: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            {Object.entries(CONFIG.SHOP_HOURS).map(([day, hours]) => (
              <div key={day} style={{
                display: "flex", justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: "1px solid #F5F0E8",
                fontSize: "14px",
                color: day === today ? "var(--warm)" : "var(--brown-light)",
                fontWeight: day === today ? 700 : 400,
              }}>
                <span>{day}</span>
                <span>{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ──────────────────────────────────────── */}
      <section id="reviews" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p className="nb-overline">Our Community</p>
          <h2 className="nb-heading-sm" style={{ marginTop: "8px", marginBottom: "36px" }}>What Folks Say</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {CONFIG.SHOP_TOP_REVIEWS.map((r, i) => (
              <div key={i} className="nb-card">
                <div style={{ display: "flex", gap: "2px", marginBottom: "14px" }}>
                  {[1,2,3,4,5].map(s => <StarIcon key={s} filled={s <= r.rating} />)}
                </div>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--brown-light)", marginBottom: "16px" }}>
                  "{r.text}"
                </p>
                <span style={{ fontWeight: 700, fontSize: "13px", color: "var(--warm)" }}>{r.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────── */}
      <section id="contact" style={{ padding: "80px 24px", background: "var(--cream-dark)" }}>
        <div style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>
          <p className="nb-overline">Find Us</p>
          <h2 className="nb-heading-sm" style={{ marginTop: "8px", marginBottom: "36px" }}>Stop By</h2>

          <p style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--brown-light)" }}>
            {CONFIG.SHOP_ADDRESS}<br />
            {CONFIG.SHOP_CITY}, {CONFIG.SHOP_STATE} {CONFIG.SHOP_ZIP}
          </p>
          <a href={`tel:${CONFIG.SHOP_PHONE}`} style={{
            fontSize: "24px", fontFamily: "'Playfair Display', serif",
            color: "var(--warm)", textDecoration: "none",
            display: "block", marginTop: "16px",
          }}>{CONFIG.SHOP_PHONE}</a>

          <div style={{ display: "flex", gap: "12px", marginTop: "32px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${CONFIG.SHOP_PHONE}`} className="nb-btn">Call to Book</a>
            <a href={CONFIG.SHOP_GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="nb-btn nb-btn-outline">Get Directions</a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────── */}
      <footer style={{ padding: "32px 24px", textAlign: "center", background: "#FFF" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", color: "var(--brown)" }}>{CONFIG.SHOP_NAME}</span>
        <p style={{ fontSize: "11px", color: "#BBB", marginTop: "6px" }}>© {new Date().getFullYear()} {CONFIG.SHOP_NAME}</p>
      </footer>
    </div>
  );
}
