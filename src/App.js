import { useState, useEffect } from "react";
import {
  MapPin, Phone, Mail, ArrowRight, Menu, X, Star, Facebook,
  Instagram, Linkedin, Youtube, Home, Zap, Shield, Award,
  Users, Sparkles, TrendingUp, Clock, MessageCircle, Building2, ChevronRight, Eye
} from "lucide-react";

/* ─── GLOBAL STYLES ─── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: #F8FAFC;
      color: #0F172A;
      overflow-x: hidden;
    }

    :root {
      --blue: #2563EB;
      --blue-light: #3B82F6;
      --blue-dim: #1D4ED8;
      --blue-glow: rgba(37,99,235,0.18);
      --blue-subtle: rgba(37,99,235,0.08);
      --white: #F8FAFC;
      --gray: #E5E7EB;
      --mint: #DDF5E8;
      --navy: #0F172A;
      --navy-2: #1E293B;
      --navy-3: #334155;
      --text-muted: #64748B;
      --glass: rgba(255,255,255,0.7);
      --glass-border: rgba(255,255,255,0.9);
      --glass-dark: rgba(15,23,42,0.6);
      --border: rgba(37,99,235,0.12);
      --shadow: 0 8px 32px rgba(37,99,235,0.10);
      --shadow-lg: 0 24px 64px rgba(37,99,235,0.16);
    }

    .display { font-family: 'Plus Jakarta Sans', sans-serif; }
    .body-font { font-family: 'DM Sans', sans-serif; }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--white); }
    ::-webkit-scrollbar-thumb { background: var(--blue); border-radius: 4px; }

    /* ── Glass card ── */
    .glass-card {
      background: var(--glass);
      border: 1px solid var(--glass-border);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
    }

    .glass-card-dark {
      background: var(--glass-dark);
      border: 1px solid rgba(255,255,255,0.1);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
    }

    /* ── Blue gradient text ── */
    .blue-text {
      background: linear-gradient(135deg, #2563EB 0%, #60A5FA 60%, #2563EB 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .mint-text {
      background: linear-gradient(135deg, #059669, #10B981);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ── Accent line ── */
    .blue-line {
      display: block;
      width: 48px;
      height: 3px;
      background: linear-gradient(90deg, var(--blue), var(--blue-light), transparent);
      border-radius: 2px;
    }

    /* ── Hover lift ── */
    .lift {
      transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                  box-shadow 0.4s ease;
    }
    .lift:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
    }

    /* ── Nav link ── */
    .nav-link {
      position: relative;
      padding-bottom: 4px;
      font-size: 0.82rem;
      font-weight: 500;
      letter-spacing: 0.06em;
      color: var(--navy-3);
      transition: color 0.25s;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0;
      width: 0; height: 2px;
      background: var(--blue);
      border-radius: 2px;
      transition: width 0.3s ease;
    }
    .nav-link:hover, .nav-link.active { color: var(--blue); }
    .nav-link:hover::after, .nav-link.active::after { width: 100%; }

    /* ── Buttons ── */
    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 32px;
      background: var(--blue);
      color: #fff;
      font-weight: 600;
      font-size: 0.84rem;
      letter-spacing: 0.04em;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(37,99,235,0.3);
    }
    .btn-primary::before {
      content: '';
      position: absolute;
      top: 0; left: -100%;
      width: 100%; height: 100%;
      background: linear-gradient(135deg, #3B82F6, #2563EB);
      transition: left 0.3s ease;
    }
    .btn-primary:hover::before { left: 0; }
    .btn-primary:hover { box-shadow: 0 8px 32px rgba(37,99,235,0.4); transform: translateY(-1px); }
    .btn-primary > * { position: relative; z-index: 1; }

    .btn-outline {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 13px 32px;
      background: transparent;
      color: var(--blue);
      font-weight: 600;
      font-size: 0.84rem;
      letter-spacing: 0.04em;
      border: 1.5px solid var(--blue);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .btn-outline:hover {
      background: var(--blue-subtle);
      box-shadow: 0 4px 20px rgba(37,99,235,0.15);
      transform: translateY(-1px);
    }

    .btn-ghost {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      background: var(--glass);
      color: var(--navy);
      font-weight: 600;
      font-size: 0.82rem;
      border: 1px solid var(--gray);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s;
      backdrop-filter: blur(10px);
    }
    .btn-ghost:hover {
      background: white;
      border-color: var(--blue);
      color: var(--blue);
    }

    /* ── Input ── */
    .input-field {
      width: 100%;
      padding: 14px 18px;
      background: white;
      border: 1.5px solid var(--gray);
      border-radius: 8px;
      color: var(--navy);
      font-family: 'Outfit', sans-serif;
      font-size: 0.9rem;
      outline: none;
      transition: all 0.3s;
    }
    .input-field::placeholder { color: #94A3B8; }
    .input-field:focus {
      border-color: var(--blue);
      box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
    }

    /* ── Tag badge ── */
    .tag {
      display: inline-block;
      padding: 5px 14px;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      border-radius: 100px;
      background: var(--blue-subtle);
      color: var(--blue);
      border: 1px solid rgba(37,99,235,0.2);
    }

    .tag-mint {
      background: rgba(5,150,105,0.08);
      color: #059669;
      border-color: rgba(5,150,105,0.2);
    }

    /* ── Animations ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
    .fade-up-2 { animation: fadeUp 0.8s 0.12s cubic-bezier(0.16,1,0.3,1) both; }
    .fade-up-3 { animation: fadeUp 0.8s 0.24s cubic-bezier(0.16,1,0.3,1) both; }
    .fade-up-4 { animation: fadeUp 0.8s 0.36s cubic-bezier(0.16,1,0.3,1) both; }

    @keyframes slowPan {
      0%   { transform: scale(1.06) translateX(0); }
      100% { transform: scale(1.12) translateX(-1.5%); }
    }
    .hero-img { animation: slowPan 20s ease-in-out alternate infinite; }

    @keyframes pulse-blue {
      0%, 100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.3); }
      50%       { box-shadow: 0 0 0 16px rgba(37,99,235,0); }
    }
    .pulse-blue { animation: pulse-blue 2.5s ease-in-out infinite; }

    @keyframes floatY {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-10px); }
    }
    .float { animation: floatY 5s ease-in-out infinite; }
    .float-2 { animation: floatY 5s 1.5s ease-in-out infinite; }
    .float-3 { animation: floatY 5s 3s ease-in-out infinite; }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50%       { background-position: 100% 50%; }
    }

    @keyframes marquee {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .marquee-inner { animation: marquee 24s linear infinite; display: flex; }

    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .menu-open { animation: slideDown 0.3s cubic-bezier(0.16,1,0.3,1) forwards; }

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

    /* ── Table ── */
    .pricing-table th {
      background: linear-gradient(135deg, rgba(37,99,235,0.1), rgba(37,99,235,0.05));
      color: var(--blue);
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 16px 14px;
      text-align: left;
      border-bottom: 2px solid rgba(37,99,235,0.1);
      white-space: nowrap;
      font-family: 'Syne', sans-serif;
    }
    .pricing-table td {
      padding: 14px;
      font-size: 0.86rem;
      border-bottom: 1px solid var(--gray);
      color: var(--text-muted);
    }
    .pricing-table tr:hover td { background: rgba(37,99,235,0.03); }
    .pricing-table td:first-child { color: var(--navy); font-weight: 500; }
    .pricing-table td.highlight { color: var(--blue); font-weight: 600; }

    /* ── Hex grid ── */
    .hex-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
    }
    .hex-item {
      padding: 10px 20px;
      background: var(--blue-subtle);
      border: 1px solid rgba(37,99,235,0.2);
      color: var(--blue);
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.04em;
      transition: all 0.25s;
      clip-path: polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%);
      text-align: center;
      min-width: 140px;
    }
    .hex-item:hover {
      background: rgba(37,99,235,0.15);
      color: var(--blue-dim);
      transform: scale(1.04);
    }

    /* ── Card variants ── */
    .card-blue-glow {
      background: white;
      border: 1px solid var(--gray);
      border-radius: 16px;
      box-shadow: 0 4px 24px rgba(37,99,235,0.06);
      transition: all 0.35s;
    }
    .card-blue-glow:hover {
      border-color: rgba(37,99,235,0.3);
      box-shadow: 0 12px 48px rgba(37,99,235,0.14);
      transform: translateY(-4px);
    }

    /* ── Bento grid ── */
    .bento-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: auto;
      gap: 16px;
    }
    .bento-wide { grid-column: span 4; }
    .bento-slim { grid-column: span 2; }
    .bento-full { grid-column: span 6; }
    .bento-half { grid-column: span 3; }

    /* ── Stat glow ── */
    @keyframes countGlow {
      from { text-shadow: 0 0 0 rgba(37,99,235,0); }
      to   { text-shadow: 0 0 40px rgba(37,99,235,0.3); }
    }
    .stat-number { animation: countGlow 2s ease-in-out infinite alternate; }

    /* ── Responsive ── */
    @media (max-width: 1024px) {
      .hide-mobile { display: none !important; }
      .show-mobile { display: flex !important; }
    }
    @media (min-width: 1025px) {
      .show-mobile { display: none !important; }
    }
    @media (max-width: 768px) {
      .hex-item { min-width: 100px; font-size: 0.72rem; padding: 8px 14px; }
      .pricing-table { font-size: 0.75rem; }
      .pricing-table th, .pricing-table td { padding: 10px 8px; }
      .bento-wide, .bento-slim, .bento-full, .bento-half { grid-column: span 6 !important; }
    }

    /* ── Nav bg on scroll ── */
    .nav-scrolled {
      background: rgba(248,250,252,0.96) !important;
      backdrop-filter: blur(20px) !important;
      border-bottom: 1px solid var(--gray) !important;
      box-shadow: 0 4px 24px rgba(37,99,235,0.06) !important;
    }

    /* ── Gradient mesh bg ── */
    .mesh-bg {
      background:
        radial-gradient(ellipse 80% 60% at 20% 20%, rgba(37,99,235,0.07) 0%, transparent 60%),
        radial-gradient(ellipse 60% 60% at 80% 80%, rgba(221,245,232,0.8) 0%, transparent 60%),
        #F8FAFC;
    }

    .mesh-bg-dark {
      background:
        radial-gradient(ellipse 80% 60% at 10% 30%, rgba(37,99,235,0.12) 0%, transparent 60%),
        radial-gradient(ellipse 60% 60% at 90% 70%, rgba(30,41,59,0.95) 0%, transparent 60%),
        var(--navy);
    }

    /* ── Section transition ── */
    .section-enter {
      animation: fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both;
    }

    /* ── Property filter pill ── */
    .filter-pill {
      padding: 9px 22px;
      border-radius: 100px;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.25s;
      border: 1.5px solid var(--gray);
      background: white;
      color: var(--text-muted);
    }
    .filter-pill:hover {
      border-color: var(--blue);
      color: var(--blue);
    }
    .filter-pill.active {
      background: var(--blue);
      border-color: var(--blue);
      color: white;
      box-shadow: 0 4px 16px rgba(37,99,235,0.25);
    }

    /* ── Ornament ── */
    .ornament {
      display: flex;
      align-items: center;
      gap: 16px;
      color: var(--text-muted);
    }
    .ornament::before, .ornament::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--gray), transparent);
    }

    /* ── Gradient border ── */
    .gradient-border {
      background: linear-gradient(white, white) padding-box,
                  linear-gradient(135deg, var(--blue), #60A5FA, var(--blue)) border-box;
      border: 1.5px solid transparent;
      border-radius: 16px;
    }

    /* ── Glowing input focus ring ── */
    .input-glow:focus {
      border-color: var(--blue) !important;
      box-shadow: 0 0 0 4px rgba(37,99,235,0.12) !important;
    }

    /* ── Submit button neon ── */
    .btn-neon {
      background: linear-gradient(135deg, var(--blue), #60A5FA);
      color: white;
      border: none;
      border-radius: 8px;
      padding: 16px 36px;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: all 0.3s;
      box-shadow: 0 4px 24px rgba(37,99,235,0.35);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-top: 8px;
    }
    .btn-neon:hover {
      box-shadow: 0 8px 40px rgba(37,99,235,0.5);
      transform: translateY(-2px);
    }
    .btn-neon::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
    }
  `}</style>
);

/* ─── NAV ─── */
// const Nav = ({ lang, setLang, currentPage, navClick, isScrolled }) => {
//   const [open, setOpen] = useState(false);
//   const t = lang === 'en';

//   const links = [
//     { key: 'home',     en: 'Home',     bn: 'হোম' },
//     { key: 'about',    en: 'About',    bn: 'সম্পর্কে' },
//     { key: 'projects', en: 'Projects', bn: 'প্রকল্প' },
//     { key: 'services', en: 'Services', bn: 'সেবা' },
//     { key: 'pricing',  en: 'Pricing',  bn: 'মূল্য' },
//     { key: 'gallery',  en: 'Gallery',  bn: 'গ্যালারি' },
//     { key: 'contact',  en: 'Contact',  bn: 'যোগাযোগ' },
//   ];

//   const go = (key) => { navClick(key); setOpen(false); };

//   return (
//     <nav style={{
//       position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
//       padding: '0 5%',
//       transition: 'all 0.4s ease',
//       background: isScrolled ? 'rgba(248,250,252,0.96)' : 'transparent',
//       backdropFilter: isScrolled ? 'blur(20px)' : 'none',
//       borderBottom: isScrolled ? '1px solid var(--gray)' : 'none',
//       boxShadow: isScrolled ? '0 4px 24px rgba(37,99,235,0.06)' : 'none',
//     }}>
//       <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 74 }}>

//         {/* Logo */}
//         <button onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'none', border: 'none', cursor: 'pointer' }}>
//           <div style={{
//             width: 44, height: 44, borderRadius: 10,
//             background: 'linear-gradient(135deg, #b5cbfa, #dfecff)',
//             display: 'flex', alignItems: 'center', justifyContent: 'center',
//             boxShadow: '0 4px 16px rgba(37,99,235,0.3)',
//           }}>
//              <img
//     src="images/logo.png"
//     alt="Company Logo"
//     style={{
//       width: "100%",
//       height: "100%",
//       objectFit: "cover",
//     }}
//   />
//           </div>
//           <div style={{ textAlign: 'left' }}>
//             <div className="display" style={{ fontSize: '1.15rem', color: 'var(--navy)', fontWeight: 700, lineHeight: 1.1 }}>
//               {t ? 'Idol Builders' : 'আইডল বিল্ডার্স'}
//             </div>
//             <div style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
//               Est. 1985
//             </div>
//           </div>
//         </button>

//         {/* Desktop links */}
//         <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
//           {links.map(l => (
//             <button key={l.key} onClick={() => go(l.key)} className={`nav-link${currentPage === l.key ? ' active' : ''}`} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
//               {t ? l.en : l.bn}
//             </button>
//           ))}
//         </div>

//         <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//           <button onClick={() => setLang(lang === 'en' ? 'bn' : 'en')} className="btn-ghost" style={{ padding: '8px 16px', fontSize: '0.72rem' }}>
//             {t ? 'বাংলা' : 'EN'}
//           </button>
//           <button onClick={() => go('contact')} className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.8rem' }}>
//             <Sparkles size={14} /> {t ? 'Book Plot' : 'বুক করুন'}
//           </button>
//         </div>

//         {/* Hamburger */}
//         <button onClick={() => setOpen(!open)} className="show-mobile" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--navy)', padding: 8, display: 'none' }}>
//           {open ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <div className="menu-open" style={{ padding: '20px 5%', borderTop: '1px solid var(--gray)', background: 'rgba(248,250,252,0.98)', backdropFilter: 'blur(20px)' }}>
//           {links.map(l => (
//             <button key={l.key} onClick={() => go(l.key)} style={{
//               display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none',
//               color: currentPage === l.key ? 'var(--blue)' : 'var(--navy-2)',
//               padding: '13px 0', fontSize: '0.92rem',
//               fontWeight: 500, cursor: 'pointer', borderBottom: '1px solid var(--gray)'
//             }}>
//               {t ? l.en : l.bn}
//             </button>
//           ))}
//           <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
//             <button onClick={() => setLang(lang === 'en' ? 'bn' : 'en')} className="btn-ghost" style={{ flex: 1, justifyContent: 'center' }}>
//               {t ? 'বাংলা' : 'EN'}
//             </button>
//             <button onClick={() => go('contact')} className="btn-primary" style={{ flex: 2, justifyContent: 'center' }}>
//               {t ? 'Book Plot' : 'বুক করুন'}
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

const Nav = ({ lang, setLang, currentPage, navClick, isScrolled }) => {
  const [open, setOpen] = useState(false);
  const t = lang === "en";

  // ONLY HOME PAGE HAS TRANSPARENT NAVBAR
  const isHome = currentPage === "home";

  const links = [
    { key: "home", en: "Home", bn: "হোম" },
    { key: "about", en: "About", bn: "সম্পর্কে" },
    { key: "projects", en: "Projects", bn: "প্রকল্প" },
    { key: "services", en: "Services", bn: "সেবা" },
    { key: "pricing", en: "Pricing", bn: "মূল্য" },
    { key: "gallery", en: "Gallery", bn: "গ্যালারি" },
    { key: "contact", en: "Contact", bn: "যোগাযোগ" },
  ];

  const go = (key) => {
    navClick(key);
    setOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0 5%",
        transition: "all 0.4s ease",

        // ONLY TRANSPARENT ON HOME BEFORE SCROLL
        background:
          isScrolled || !isHome
            ? "rgba(248,250,252,0.96)"
            : "transparent",

        backdropFilter:
          isScrolled || !isHome
            ? "blur(20px)"
            : "none",

        borderBottom:
          isScrolled || !isHome
            ? "1px solid var(--gray)"
            : "none",

        boxShadow:
          isScrolled || !isHome
            ? "0 4px 24px rgba(37,99,235,0.06)"
            : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 74,
        }}
      >
        {/* LOGO */}
        <button
          onClick={() => go("home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {/* LOGO IMAGE */}
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background:
                "linear-gradient(135deg, #b5cbfa, #dfecff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:
                "0 4px 16px rgba(37,99,235,0.3)",
              overflow: "hidden",
            }}
          >
            <img
              src="images/logo.png"
              alt="Company Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* TEXT */}
          <div style={{ textAlign: "left" }}>
            <div
              className="display"
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                lineHeight: 1.1,
                transition: "0.3s ease",

                // WHITE ONLY ON HOME HERO
                color:
                  isScrolled || !isHome
                    ? "var(--navy)"
                    : "#ffffff",
              }}
            >
              {t ? "Idol Builders" : "আইডল বিল্ডার্স"}
            </div>

            <div
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                transition: "0.3s ease",

                color:
                  isScrolled || !isHome
                    ? "var(--text-muted)"
                    : "rgba(255,255,255,0.7)",
              }}
            >
              Est. 1985
            </div>
          </div>
        </button>

        {/* DESKTOP LINKS */}
        <div
          className="hide-mobile"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
          }}
        >
          {links.map((l) => (
            <button
              key={l.key}
              onClick={() => go(l.key)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "0.95rem",
                fontWeight: 500,
                transition: "0.3s ease",

                color:
                  currentPage === l.key
                    ? "var(--blue)"
                    : isScrolled || !isHome
                    ? "var(--navy-2)"
                    : "rgba(255,255,255,0.88)",
              }}
            >
              {t ? l.en : l.bn}
            </button>
          ))}
        </div>

        {/* RIGHT BUTTONS */}
        <div
          className="hide-mobile"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          {/* LANGUAGE */}
          <button
            onClick={() =>
              setLang(lang === "en" ? "bn" : "en")
            }
            className="btn-ghost"
            style={{
              padding: "8px 16px",
              fontSize: "0.72rem",
              transition: "0.3s ease",

              color:
                isScrolled || !isHome
                  ? "var(--navy)"
                  : "#fff",

              border:
                isScrolled || !isHome
                  ? "1px solid var(--gray)"
                  : "1px solid rgba(255,255,255,0.2)",
            }}
          >
            {t ? "বাংলা" : "EN"}
          </button>

          {/* CTA */}
          <button
            onClick={() => go("contact")}
            className="btn-primary"
            style={{
              padding: "10px 22px",
              fontSize: "0.8rem",
            }}
          >
            <Sparkles size={14} />{" "}
            {t ? "Book Plot" : "বুক করুন"}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "none",
            transition: "0.3s ease",

            color:
              isScrolled || !isHome
                ? "var(--navy)"
                : "#fff",
          }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="menu-open"
          style={{
            padding: "20px 5%",
            borderTop: "1px solid var(--gray)",
            background: "rgba(248,250,252,0.98)",
            backdropFilter: "blur(20px)",
          }}
        >
          {links.map((l) => (
            <button
              key={l.key}
              onClick={() => go(l.key)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",

                color:
                  currentPage === l.key
                    ? "var(--blue)"
                    : "var(--navy-2)",

                padding: "13px 0",
                fontSize: "0.92rem",
                fontWeight: 500,
                cursor: "pointer",
                borderBottom:
                  "1px solid var(--gray)",
              }}
            >
              {t ? l.en : l.bn}
            </button>
          ))}

          {/* MOBILE BUTTONS */}
          <div
            style={{
              marginTop: 20,
              display: "flex",
              gap: 12,
            }}
          >
            <button
              onClick={() =>
                setLang(lang === "en" ? "bn" : "en")
              }
              className="btn-ghost"
              style={{
                flex: 1,
                justifyContent: "center",
              }}
            >
              {t ? "বাংলা" : "EN"}
            </button>

            <button
              onClick={() => go("contact")}
              className="btn-primary"
              style={{
                flex: 2,
                justifyContent: "center",
              }}
            >
              {t ? "Book Plot" : "বুক করুন"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};


/* ─── TICKER ─── */
const Ticker = ({ lang }) => {
  const items = lang === 'en'
    ? ['Idol Green City — Your Dream Housing Project', 'RAJUK Megacity Master Plan NOC Approved', 'Clear Title Land at Affordable Price', 'The Best Investment Guarantee', 'Safe, Modern & Planned Housing for All', 'Idol Builders Ltd — Trusted Real Estate']
    : ['আইডল গ্রীন সিটি — আপনার স্বপ্নের আবাসন প্রকল্প', 'রাজউক মেগাসিটি মাস্টার প্ল্যানের NOC প্রাপ্ত', 'সাশ্রয়ী মূল্যে নিষ্কণ্টক ভূমি', 'দ্য বেস্ট ইনভেস্টমেন্ট গ্যারান্টি', 'সবার জন্য নিরাপদ, আধুনিক ও পরিকল্পিত আবাসন', 'আইডল বিল্ডার্স লিঃ — বিশ্বস্ত রিয়েল এস্টেট'];
  const doubled = [...items, ...items];

  return (
    <div style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)', padding: '11px 0', overflow: 'hidden' }}>
      <div className="marquee-inner" style={{ whiteSpace: 'nowrap', display: 'flex' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ padding: '0 40px', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', gap: 18 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.6)', display: 'inline-block', flexShrink: 0 }}></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ─── HERO ─── */
// const Hero = ({ lang, navClick }) => {
//   const t = lang === 'en';

//   return (
//     <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#0F172A' }}>
//       {/* BG Image */}
//       <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
//         <img
//           src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
//           alt=""
//           className="hero-img"
//           style={{ width: '100%', height: '100%', objectFit: 'cover', transformOrigin: 'center center', opacity: 0.35 }}
//         />
//         <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, rgba(15,23,42,0.97) 45%, rgba(15,23,42,0.6) 100%)' }}></div>
//         <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.95) 0%, transparent 55%)' }}></div>
//       </div>

//       {/* Grid overlay */}
//       <div style={{
//         position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
//         backgroundImage: 'linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)',
//         backgroundSize: '72px 72px', pointerEvents: 'none'
//       }}></div>

//       {/* Glow orbs */}
//       <div style={{ position: 'absolute', top: '20%', right: '8%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
//       <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(221,245,232,0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>

//       <div style={{ position: 'relative', zIndex: 10, padding: '110px 5% 80px', maxWidth: 1320, margin: '0 auto', width: '100%' }}>
//         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>

//           {/* Left content */}
//           <div>
//             <div className="fade-up" style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
//               <span className="tag" style={{ background: 'rgba(37,99,235,0.2)', borderColor: 'rgba(37,99,235,0.4)', color: '#93C5FD' }}>The Best Investment Guarantee</span>
//               <span style={{ width: 36, height: 1, background: 'rgba(255,255,255,0.2)' }}></span>
//               <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', color: '#93C5FD', textTransform: 'uppercase' }}>
//                 {t ? "RAJUK Megacity NOC Approved" : 'রাজউক মেগাসিটি NOC প্রাপ্ত'}
//               </span>
//             </div>

//             <h1 className="display fade-up-2" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.2rem)', lineHeight: 1.08, fontWeight: 800, color: 'white', marginBottom: 28 }}>
//               {t ? <>Your Dream<br /><span className="blue-text">Idol Green</span><br />City Awaits</> : <>আপনার স্বপ্নের<br /><span className="blue-text">আইডল গ্রীন</span><br />সিটি</>}
//             </h1>

//             <p className="fade-up-3" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 40, maxWidth: 500 }}>
//               {t
//                 ? 'Idol Builders Ltd is committed to ensuring safe, beautiful, and modern housing for everyone. We advance on the path shown by Almighty Allah — with sincerity, transparency and responsibility.'
//                 : 'সবার জন্য সুন্দর, নিরাপদ ও আধুনিক আবাসন নিশ্চিত করাই আমাদের মূল অঙ্গীকার। সততা, স্বচ্ছতা ও দায়িত্বশীলতার মাধ্যমে আমরা এগিয়ে যাচ্ছি।'}
//             </p>

//             <div className="fade-up-4" style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
//               <button onClick={() => navClick('projects')} className="btn-primary">
//                 {t ? 'Explore Projects' : 'প্রকল্প দেখুন'} <ArrowRight size={16} />
//               </button>
//               <button onClick={() => navClick('contact')} className="btn-outline" style={{ color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.06)' }}>
//                 <Play size={14} /> {t ? 'Book Consultation' : 'পরামর্শ করুন'}
//               </button>
//             </div>
//           </div>

//           {/* Right: Floating stat cards */}
//           <div className="hide-mobile" style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'relative', paddingLeft: 24 }}>
//             {[
//               { num: '3,5,10,20', label: t ? 'Plot Sizes (Katha)' : 'প্লটের আকার (কাঠা)', icon: Building2, color: '#2563EB' },
//               { num: '25-60ft', label: t ? 'Wide Roads in Project' : 'প্রকল্পে প্রশস্ত রাস্তা', icon: Home, color: '#059669' },
//               { num: 'RAJUK', label: t ? 'NOC & DAPP Approved' : 'NOC ও ড্যাপ অনুমোদিত', icon: Shield, color: '#7C3AED' },
//               { num: 'CCTV', label: t ? 'Full Security System' : 'সার্বক্ষণিক নিরাপত্তা', icon: Award, color: '#D97706' },
//             ].map((s, i) => (
//               <div key={i}
//                 className={`glass-card-dark float${i > 0 ? `-${i}` : ''}`}
//                 style={{
//                   display: 'flex', alignItems: 'center', gap: 18,
//                   padding: '18px 24px', borderRadius: 14,
//                   transform: i % 2 === 1 ? 'translateX(32px)' : 'none',
//                   animationDelay: `${i * 0.8}s`
//                 }}>
//                 <div style={{ width: 44, height: 44, borderRadius: 10, background: `${s.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//                   <s.icon size={20} color={s.color} />
//                 </div>
//                 <div>
//                   <div className="display stat-number" style={{ fontSize: '1.7rem', fontWeight: 800, color: 'white', lineHeight: 1 }}>{s.num}</div>
//                   <div style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.5)', marginTop: 3 }}>{s.label}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile stats row */}
//         <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0, marginTop: 60, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 40 }}>
//           {[
//             { num: '3-20', label: t ? 'Katha Plots' : 'কাঠা প্লট' },
//             { num: 'NOC', label: t ? 'RAJUK Approved' : 'রাজউক অনুমোদিত' },
//             { num: '25ft+', label: t ? 'Wide Roads' : 'প্রশস্ত রাস্তা' },
//             { num: '100%', label: t ? 'Clear Title' : 'নিষ্কণ্টক দলিল' },
//           ].map((s, i) => (
//             <div key={i} style={{ padding: '0 36px 0 0', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingRight: 36, marginRight: 36 }}>
//               <div className="display" style={{ fontSize: '2.2rem', fontWeight: 800, color: '#60A5FA', lineHeight: 1 }}>{s.num}</div>
//               <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginTop: 6 }}>{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Scroll cue */}
//       <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
//         <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(37,99,235,0.5), transparent)' }}></div>
//         <ChevronDown size={16} color="rgba(255,255,255,0.3)" />
//       </div>

//       <style>{`@media(max-width:900px){section>div>div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;}}`}</style>
//     </section>
//   );
// };


const Hero = ({ lang, navClick }) => {
  const t = lang === "en";

  const slides = [
    {
      image: "images/mosque idol.png",
      title: "Idol Grand Mosque",
      subtitle: "Spiritual Landmark",
    },
    {
      image: "images/convention.png",
      title: "Convention Center",
      subtitle: "Modern Event Infrastructure",
    },
    {
      image: "images/hitech.png",
      title: "Hi-Tech Smart Zone",
      subtitle: "Future Ready Ecosystem",
    },
    {
      image: "images/hospital.png",
      title: "Advanced Medical Hub",
      subtitle: "24/7 Healthcare Facilities",
    },
    {
      image: "images/idol central park.png",
      title: "Idol Central Park",
      subtitle: "Green Living Experience",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="future-hero">
      {/* BACKGROUND SLIDER */}
      <div className="hero-bg">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`bg-slide ${active === i ? "active" : ""}`}
          >
            <img src={slide.image} alt="" />
          </div>
        ))}

        <div className="hero-overlay" />
        <div className="hero-overlay-2" />
        <div className="hero-noise" />
      </div>

      {/* GRID */}
      <div className="hero-grid-overlay" />

      {/* GLOW */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      {/* MAIN CONTENT */}
      <div className="hero-container">
        <div className="hero-layout">
          {/* LEFT */}
          <div className="hero-content">
            <div className="hero-tag">
              <span className="live-dot" />
              {t
                ? "Future Smart Community"
                : "ভবিষ্যৎ স্মার্ট কমিউনিটি"}
            </div>

            <h1 className="hero-title">
              {t ? (
                <>
                  Build Your
                  <br />
                  <span>Future Lifestyle</span>
                  <br />
                  With Confidence
                </>
              ) : (
                <>
                  গড়ুন আপনার
                  <br />
                  <span>ভবিষ্যতের</span>
                  <br />
                  আধুনিক আবাসন
                </>
              )}
            </h1>

            <p className="hero-desc">
              {t
                ? "Idol Builders creates futuristic residential ecosystems blending premium infrastructure, smart planning, green living and secure investment opportunities."
                : "আইডল বিল্ডার্স আধুনিক অবকাঠামো, স্মার্ট পরিকল্পনা, নিরাপদ বিনিয়োগ এবং সবুজ পরিবেশের সমন্বয়ে ভবিষ্যতের আবাসন তৈরি করে।"}
            </p>

            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => navClick("projects")}
              >
                {t ? "Explore Projects" : "প্রকল্প দেখুন"}
              </button>

              <button
                className="btn-secondary"
                onClick={() => navClick("contact")}
              >
                {t ? "Book Consultation" : "যোগাযোগ করুন"}
              </button>
            </div>

            {/* BOTTOM STATS */}
            <div className="hero-stats">
              {[
                { num: "3-20", label: "Katha Plots" },
                { num: "25-60ft", label: "Wide Roads" },
                { num: "RAJUK", label: "Approved" },
              ].map((s, i) => (
                <div key={i} className="stat-card">
                  <h3>{s.num}</h3>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-visual">
            {/* MAIN GLASS PANEL */}
            <div className="visual-panel">
              <div className="visual-image">
                <img src={slides[active].image} alt="" />
              </div>

              {/* TOP HUD */}
              <div className="hud-top">
                <div className="hud-pill">
                  <span />
                  LIVE PROJECT
                </div>

                <div className="hud-pill blue">
                  1985 — 2026
                </div>
              </div>

              {/* BOTTOM */}
              <div className="visual-bottom">
                <div>
                  <h2>{slides[active].title}</h2>
                  <p>{slides[active].subtitle}</p>
                </div>

                <div className="slider-dots">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      className={active === i ? "active" : ""}
                      onClick={() => setActive(i)}
                    />
                  ))}
                </div>
              </div>

              {/* SCAN */}
              <div className="scan-line" />
            </div>

            {/* FLOATING CARDS */}
            <div className="floating-card card-1">
              <h4>Smart Security</h4>
              <p>CCTV + Gated Access</p>
            </div>

            <div className="floating-card card-2">
              <h4>Green Living</h4>
              <p>Central Eco Park</p>
            </div>

            <div className="floating-card card-3">
              <h4>Premium Roads</h4>
              <p>25ft - 60ft Wide</p>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
      </div>

      <style>{`
        .future-hero{
          position:relative;
          min-height:100vh;
          overflow:hidden;
          background:#040816;
          display:flex;
          align-items:center;
        }

        .hero-bg{
          position:absolute;
          inset:0;
        }

        .bg-slide{
          position:absolute;
          inset:0;
          opacity:0;
          transition:opacity 1.8s ease;
        }

        .bg-slide.active{
          opacity:1;
        }

        .bg-slide img{
          width:100%;
          height:100%;
          object-fit:cover;
          transform:scale(1.08);
          animation:zoom 9s linear infinite;
          filter:brightness(.4) saturate(1.1);
        }

        .hero-overlay{
          position:absolute;
          inset:0;
          background:
            linear-gradient(
              110deg,
              rgba(4,8,22,.96) 35%,
              rgba(4,8,22,.55) 100%
            );
        }

        .hero-overlay-2{
          position:absolute;
          inset:0;
          background:
            linear-gradient(
              to top,
              rgba(4,8,22,.98),
              transparent 45%
            );
        }

        .hero-noise{
          position:absolute;
          inset:0;
          opacity:.05;
          background-image:
            radial-gradient(circle at 20% 20%,white 1px,transparent 1px);
          background-size:4px 4px;
        }

        .hero-grid-overlay{
          position:absolute;
          inset:0;
          background-image:
            linear-gradient(rgba(59,130,246,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,.06) 1px, transparent 1px);
          background-size:70px 70px;
          mask-image:
            radial-gradient(circle at center, black 40%, transparent 95%);
        }

        .hero-glow{
          position:absolute;
          border-radius:50%;
          filter:blur(120px);
        }

        .hero-glow-1{
          width:500px;
          height:500px;
          background:rgba(37,99,235,.18);
          top:-10%;
          right:-5%;
        }

        .hero-glow-2{
          width:350px;
          height:350px;
          background:rgba(124,58,237,.12);
          bottom:-10%;
          left:-5%;
        }

        .hero-container{
          position:relative;
          z-index:5;
          width:100%;
          max-width:1450px;
          margin:auto;
          padding:120px 5% 90px;
        }

        .hero-layout{
          display:grid;
          grid-template-columns:1.05fr .95fr;
          gap:70px;
          align-items:center;
        }

        .hero-tag{
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding:10px 18px;
          border-radius:999px;
          background:rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.08);
          color:#93C5FD;
          backdrop-filter:blur(14px);
          margin-bottom:30px;
          font-size:.78rem;
          letter-spacing:.14em;
          text-transform:uppercase;
        }

        .live-dot{
          width:8px;
          height:8px;
          border-radius:50%;
          background:#3B82F6;
          box-shadow:0 0 12px #3B82F6;
          animation:pulse 1.8s infinite;
        }

        .hero-title{
          font-size:clamp(3.2rem,8vw,6.6rem);
          line-height:.95;
          color:white;
          font-weight:800;
          margin-bottom:28px;
        }

        .hero-title span{
          background:linear-gradient(135deg,#60A5FA,#A78BFA);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .hero-desc{
          max-width:650px;
          color:rgba(255,255,255,.62);
          line-height:1.9;
          font-size:1.05rem;
          margin-bottom:40px;
        }

        .hero-buttons{
          display:flex;
          gap:16px;
          flex-wrap:wrap;
        }

        .btn-primary{
          padding:16px 28px;
          border:none;
          border-radius:16px;
          background:linear-gradient(135deg,#2563EB,#3B82F6);
          color:white;
          font-weight:600;
          cursor:pointer;
          box-shadow:0 10px 40px rgba(37,99,235,.35);
        }

        .btn-secondary{
          padding:16px 28px;
          border-radius:16px;
          border:1px solid rgba(255,255,255,.12);
          background:rgba(255,255,255,.05);
          color:white;
          backdrop-filter:blur(14px);
          cursor:pointer;
        }

        .hero-stats{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:16px;
          margin-top:55px;
        }

        .stat-card{
          padding:22px;
          border-radius:22px;
          background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.08);
          backdrop-filter:blur(18px);
        }

        .stat-card h3{
          color:#60A5FA;
          font-size:2rem;
          margin-bottom:8px;
        }

        .stat-card p{
          color:rgba(255,255,255,.5);
          font-size:.78rem;
          letter-spacing:.12em;
          text-transform:uppercase;
        }

        .hero-visual{
          position:relative;
          height:700px;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .visual-panel{
          position:relative;
          width:100%;
          height:100%;
          border-radius:34px;
          overflow:hidden;
          background:rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.08);
          backdrop-filter:blur(22px);
          box-shadow:
            0 40px 120px rgba(0,0,0,.45),
            inset 0 1px 0 rgba(255,255,255,.08);
        }

        .visual-image{
          position:absolute;
          inset:0;
        }

        .visual-image img{
          width:100%;
          height:100%;
          object-fit:cover;
        }

        .visual-panel::before{
          content:"";
          position:absolute;
          inset:0;
          background:
            linear-gradient(to top,
            rgba(4,8,22,.96),
            transparent 60%);
          z-index:1;
        }

        .hud-top{
          position:absolute;
          top:24px;
          left:24px;
          right:24px;
          display:flex;
          justify-content:space-between;
          z-index:5;
        }

        .hud-pill{
          padding:10px 16px;
          border-radius:999px;
          background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.08);
          color:white;
          font-size:.72rem;
          display:flex;
          align-items:center;
          gap:10px;
          backdrop-filter:blur(14px);
        }

        .hud-pill span{
          width:8px;
          height:8px;
          border-radius:50%;
          background:#00ff9d;
          box-shadow:0 0 10px #00ff9d;
        }

        .hud-pill.blue{
          color:#93C5FD;
          background:rgba(37,99,235,.14);
        }

        .visual-bottom{
          position:absolute;
          left:28px;
          right:28px;
          bottom:28px;
          z-index:5;
          display:flex;
          justify-content:space-between;
          align-items:flex-end;
          gap:20px;
        }

        .visual-bottom h2{
          color:white;
          font-size:2rem;
          margin-bottom:6px;
        }

        .visual-bottom p{
          color:rgba(255,255,255,.58);
        }

        .slider-dots{
          display:flex;
          gap:10px;
        }

        .slider-dots button{
          width:12px;
          height:12px;
          border:none;
          border-radius:999px;
          background:rgba(255,255,255,.25);
          cursor:pointer;
          transition:.4s;
        }

        .slider-dots button.active{
          width:38px;
          background:#3B82F6;
        }

        .scan-line{
          position:absolute;
          inset:0;
          background:
            linear-gradient(
              to bottom,
              transparent,
              rgba(59,130,246,.18),
              transparent
            );
          animation:scan 6s linear infinite;
          z-index:3;
        }

        .floating-card{
          position:absolute;
          padding:18px 22px;
          border-radius:20px;
          background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.08);
          backdrop-filter:blur(16px);
          box-shadow:0 20px 50px rgba(0,0,0,.25);
        }

        .floating-card h4{
          color:white;
          margin-bottom:5px;
          font-size:.95rem;
        }

        .floating-card p{
          color:rgba(255,255,255,.5);
          font-size:.8rem;
        }

        .card-1{
          top:8%;
          left:-40px;
          animation:float 5s ease-in-out infinite;
        }

        .card-2{
          bottom:16%;
          left:-30px;
          animation:float 6s ease-in-out infinite;
        }

        .card-3{
          top:18%;
          right:-35px;
          animation:float 4.5s ease-in-out infinite;
        }

        .scroll-indicator{
          position:absolute;
          left:50%;
          bottom:28px;
          transform:translateX(-50%);
          z-index:10;
        }

        .scroll-line{
          width:1px;
          height:55px;
          background:
            linear-gradient(to bottom,#3B82F6,transparent);
        }

        @keyframes zoom{
          0%{
            transform:scale(1.05);
          }
          100%{
            transform:scale(1.12);
          }
        }

        @keyframes pulse{
          0%,100%{
            opacity:1;
            transform:scale(1);
          }
          50%{
            opacity:.4;
            transform:scale(1.5);
          }
        }

        @keyframes float{
          0%,100%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-12px);
          }
        }

        @keyframes scan{
          0%{
            transform:translateY(-100%);
          }
          100%{
            transform:translateY(200%);
          }
        }

        @media(max-width:1200px){
          .hero-layout{
            grid-template-columns:1fr;
          }

          .hero-visual{
            height:580px;
          }

          .floating-card{
            display:none;
          }
        }

        @media(max-width:768px){
          .future-hero{
            min-height:auto;
          }

          .hero-container{
            padding:110px 5% 70px;
          }

          .hero-visual{
            height:400px;
          }

          .hero-title{
            line-height:1.02;
          }

          .hero-stats{
            grid-template-columns:1fr;
          }

          .visual-bottom{
            flex-direction:column;
            align-items:flex-start;
          }

          .visual-bottom h2{
            font-size:1.5rem;
          }

          .hud-top{
            flex-direction:column;
            gap:10px;
            align-items:flex-start;
          }
        }

        @media(max-width:520px){
          .hero-visual{
            height:320px;
          }

          .btn-primary,
          .btn-secondary{
            width:100%;
          }

          .hero-title{
            font-size:2.8rem;
          }

          .hero-desc{
            font-size:.95rem;
          }
        }
      `}</style>
    </section>
  );
};


/* ─── SECTION HEADER ─── */
const SectionHeader = ({ tag, title, sub, centered = true, light = false }) => (
  <div style={{ textAlign: centered ? 'center' : 'left', marginBottom: 64 }}>
    {tag && <div className={`tag${light ? '' : ''}`} style={{ marginBottom: 18 }}>{tag}</div>}
    <h2 className="display" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 800, color: light ? 'white' : 'var(--navy)', lineHeight: 1.15, marginBottom: 16 }}>
      {title}
    </h2>
    {sub && <p style={{ fontSize: '1rem', color: light ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)', maxWidth: 560, margin: centered ? '0 auto' : 0, lineHeight: 1.75 }}>{sub}</p>}
    <span className="blue-line" style={{ margin: centered ? '22px auto 0' : '22px 0 0' }}></span>
  </div>
);

/* ─── ABOUT ─── */
// const AboutSection = ({ lang }) => {
//   const t = lang === 'en';
//   const features = [
//     { icon: Award, title: t ? 'Clear Title Land' : 'নিষ্কণ্টক ভূমি', desc: t ? 'Dispute-free, clear-title plots at affordable prices.' : 'সাশ্রয়ী মূল্যে নিষ্কণ্টক প্লট।' },
//     { icon: Shield, title: t ? 'RAJUK NOC Approved' : 'রাজউক NOC প্রাপ্ত', desc: t ? 'Fully RAJUK Megacity Master Plan approved.' : 'রাজউক মেগাসিটি মাস্টার প্ল্যানের আওতাভুক্ত।' },
//     { icon: Zap, title: t ? 'All Modern Utilities' : 'সকল আধুনিক সুবিধা', desc: t ? 'Water, gas, electricity, internet and more.' : 'পানি, গ্যাস, বিদ্যুৎ, ইন্টারনেট সহ সকল সুবিধা।' },
//     { icon: TrendingUp, title: t ? 'Best Investment Value' : 'সর্বোচ্চ বিনিয়োগ মূল্য', desc: t ? 'Proven appreciation and the best investment guarantee.' : 'প্রমাণিত মূল্য বৃদ্ধি ও সর্বোত্তম বিনিয়োগ।' },
//   ];

//   return (
//     <section className="mesh-bg" style={{ padding: '120px 5%' }}>
//       <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

//         {/* Left */}
//         <div>
//           <SectionHeader
//             tag={t ? 'About Us' : 'আমাদের সম্পর্কে'}
//             title={t ? <>Ensuring Safe & <span className="blue-text">Modern Housing</span> for All</> : <>সবার জন্য <span className="blue-text">নিরাপদ ও আধুনিক</span> আবাসন</>}
//             sub={t ? "Idol Builders Ltd advances with sincere trust and love for you — making your long-cherished dream a reality through Idol Green City, a modern, eco-friendly, and safe housing project." : "পরম করুণাময় আল্লাহর অপার রহমত ও কৃপায়, আপনাদের প্রতি অগাধ বিশ্বাস ও ভালোবাসা নিয়ে আমরা 'আইডল বিল্ডার্স লিমিটেড'-এর পথচলাকে এগিয়ে নিয়ে যাচ্ছি।"}
//             centered={false}
//           />

//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 36 }}>
//             {features.map(({ icon: Icon, title, desc }, i) => (
//               <div key={i} className="card-blue-glow" style={{ padding: '22px 20px' }}>
//                 <div style={{ width: 40, height: 40, borderRadius: 9, background: 'var(--blue-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
//                   <Icon size={18} color="var(--blue)" />
//                 </div>
//                 <div className="display" style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 5 }}>{title}</div>
//                 <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</div>
//               </div>
//             ))}
//           </div>

//           <button className="btn-primary">
//             {t ? 'Learn About Idol Green City' : 'আইডল গ্রীন সিটি সম্পর্কে জানুন'} <ArrowRight size={16} />
//           </button>
//         </div>

//         {/* Right: image collage */}
//         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '240px 240px', gap: 12 }}>
//           {[
//             'images/psetu.png',
//             'images/stadium.png',
//             'images/hitech.png',
//             'images/nimtoli.png',
//           ].map((src, i) => (
//             <div key={i} style={{ overflow: 'hidden', position: 'relative', borderRadius: 14 }}>
//               <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
//                 onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
//                 onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
//               />
//               <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.4) 0%, transparent 60%)', borderRadius: 14 }}></div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`@media(max-width:900px){section.mesh-bg>div>div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;gap:48px!important;}}`}</style>
//     </section>
//   );
// };


const AboutSection = ({ lang }) => {
  const t = lang === "en";

  const [activeImage, setActiveImage] = useState(null);

  const images = [
    "images/psetu.png",
    "images/stadium.png",
    "images/hitech.png",
    "images/nimtoli.png",
  ];

  useEffect(() => {
    if (activeImage !== null) {
      const timer = setTimeout(() => {
        setActiveImage(null);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [activeImage]);

  const features = [
    {
      icon: Award,
      title: t ? "Clear Title Land" : "নিষ্কণ্টক ভূমি",
      desc: t
        ? "Dispute-free, clear-title plots at affordable prices."
        : "সাশ্রয়ী মূল্যে নিষ্কণ্টক প্লট।",
    },
    {
      icon: Shield,
      title: t ? "RAJUK NOC Approved" : "রাজউক NOC প্রাপ্ত",
      desc: t
        ? "Fully RAJUK Megacity Master Plan approved."
        : "রাজউক মেগাসিটি মাস্টার প্ল্যানের আওতাভুক্ত।",
    },
    {
      icon: Zap,
      title: t ? "All Modern Utilities" : "সকল আধুনিক সুবিধা",
      desc: t
        ? "Water, gas, electricity, internet and more."
        : "পানি, গ্যাস, বিদ্যুৎ, ইন্টারনেট সহ সকল সুবিধা।",
    },
    {
      icon: TrendingUp,
      title: t ? "Best Investment Value" : "সর্বোচ্চ বিনিয়োগ মূল্য",
      desc: t
        ? "Proven appreciation and the best investment guarantee."
        : "প্রমাণিত মূল্য বৃদ্ধি ও সর্বোত্তম বিনিয়োগ।",
    },
  ];

  return (
    <>
      <section
        className="about-modern"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "120px 5%",
        }}
      >
        {/* BG GRID */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(37,99,235,.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <div
          className="about-grid"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1320,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.05fr .95fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div>
            <SectionHeader
              tag={t ? "About Us" : "আমাদের সম্পর্কে"}
              title={
                t ? (
                  <>
                    Ensuring Safe &
                    <span className="blue-text">
                      {" "}
                      Modern Housing
                    </span>{" "}
                    for All
                  </>
                ) : (
                  <>
                    সবার জন্য
                    <span className="blue-text">
                      {" "}
                      নিরাপদ ও আধুনিক
                    </span>{" "}
                    আবাসন
                  </>
                )
              }
              sub={
                t
                  ? "Idol Builders Ltd advances with sincere trust and love for you — making your long-cherished dream a reality through Idol Green City."
                  : "আইডল বিল্ডার্স লিমিটেড আপনাদের ভালোবাসা ও আস্থার সাথে আধুনিক আবাসন নিশ্চিত করতে কাজ করে যাচ্ছে।"
              }
              centered={false}
            />

            {/* MOBILE IMAGE ROW */}
            <div className="mobile-image-row">
              {images.map((src, i) => (
                <button
                  key={i}
                  className="mobile-circle"
                  onClick={() => setActiveImage(src)}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>

            {/* FEATURES */}
            <div className="feature-grid">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="feature-card"
                >
                  <div className="feature-icon">
                    <Icon size={18} color="#2563EB" />
                  </div>

                  <div
                    className="display"
                    style={{
                      fontSize: ".92rem",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: 6,
                    }}
                  >
                    {title}
                  </div>

                  <div
                    style={{
                      fontSize: ".8rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    {desc}
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-primary">
              {t
                ? "Learn About Idol Green City"
                : "আইডল গ্রীন সিটি সম্পর্কে জানুন"}
              <ArrowRight size={16} />
            </button>
          </div>

          {/* RIGHT DESKTOP IMAGES */}
          <div className="desktop-gallery">
            {images.map((src, i) => (
              <div
                key={i}
                className={`gallery-item g${i + 1}`}
              >
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* FULL SCREEN POPUP */}
        {activeImage && (
          <div
            className="image-popup"
            onClick={() => setActiveImage(null)}
          >
            {/* BLUR BG */}
            <div className="popup-blur" />

            {/* IMAGE */}
            <div className="popup-content">
              <img src={activeImage} alt="" />
            </div>
          </div>
        )}

        <style>{`
          .feature-grid{
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:16px;
            margin-top:38px;
            margin-bottom:36px;
          }

          .feature-card{
            padding:22px;
            border-radius:24px;
            background:rgba(255,255,255,.7);
            border:1px solid rgba(255,255,255,.7);
            backdrop-filter:blur(20px);
            box-shadow:0 12px 40px rgba(15,23,42,.06);
            transition:.4s ease;
          }

          .feature-card:hover{
            transform:translateY(-6px);
            box-shadow:0 20px 50px rgba(37,99,235,.12);
          }

          .feature-icon{
            width:42px;
            height:42px;
            border-radius:12px;
            background:#EFF6FF;
            display:flex;
            align-items:center;
            justify-content:center;
            margin-bottom:14px;
          }

          /* DESKTOP GALLERY */

          .desktop-gallery{
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:16px;
            height:620px;
          }

          .gallery-item{
            position:relative;
            overflow:hidden;
            border-radius:30px;
            box-shadow:0 25px 60px rgba(15,23,42,.08);
          }

          .gallery-item img{
            width:100%;
            height:100%;
            object-fit:cover;
            transition:transform .8s ease;
          }

          .gallery-item:hover img{
            transform:scale(1.08);
          }

          .g1{
            height:250px;
            margin-top:80px;
          }

          .g2{
            height:340px;
          }

          .g3{
            height:340px;
            margin-top:-70px;
          }

          .g4{
            height:250px;
          }

          /* MOBILE IMAGE ROW */

          .mobile-image-row{
            display:none;
          }

          /* POPUP */

          .image-popup{
            position:fixed;
            inset:0;
            z-index:9999;
            display:flex;
            align-items:center;
            justify-content:center;
            animation:popupFade .35s ease;
          }

          .popup-blur{
            position:absolute;
            inset:0;
            background:rgba(15,23,42,.45);
            backdrop-filter:blur(18px);
          }

          .popup-content{
            position:relative;
            width:82vw;
            max-width:420px;
            aspect-ratio:1/1;

            border-radius:34px;
            overflow:hidden;

            transform:scale(.8);
            animation:popupScale .45s ease forwards;

            box-shadow:
              0 30px 100px rgba(0,0,0,.45);
          }

          .popup-content img{
            width:100%;
            height:100%;
            object-fit:cover;
          }

          @keyframes popupFade{
            from{
              opacity:0;
            }
            to{
              opacity:1;
            }
          }

          @keyframes popupScale{
            from{
              transform:scale(.8);
              opacity:0;
            }
            to{
              transform:scale(1);
              opacity:1;
            }
          }

          /* RESPONSIVE */

          @media(max-width:900px){

            .about-modern{
              padding:90px 5% !important;
            }

            .about-grid{
              grid-template-columns:1fr !important;
              gap:50px !important;
            }

            .desktop-gallery{
              display:none;
            }

            .mobile-image-row{
              display:flex;
              justify-content:flex-start;
              gap:14px;
              flex-wrap:wrap;
              margin-top:26px;
              margin-bottom:10px;
            }

            .mobile-circle{
              width:78px;
              height:78px;
              border-radius:50%;
              overflow:hidden;
              border:none;
              padding:0;
              background:none;
              cursor:pointer;

              box-shadow:
                0 10px 25px rgba(15,23,42,.1);

              transition:.4s ease;
            }

            .mobile-circle:active{
              transform:scale(.94);
            }

            .mobile-circle img{
              width:100%;
              height:100%;
              object-fit:cover;
            }

            .feature-grid{
              grid-template-columns:1fr !important;
            }

          }

          @media(max-width:520px){

            .popup-content{
              width:88vw;
              border-radius:28px;
            }

            .mobile-circle{
              width:72px;
              height:72px;
            }

          }
        `}</style>
      </section>
    </>
  );
};
/* ─── DIVISIONS ─── */
const DivisionsSection = ({ lang }) => {
  const t = lang === 'en';
  const divisions = [
    { icon: Building2, name: t ? 'Idol Green City' : 'আইডল গ্রীন সিটি', desc: t ? 'Modern planned residential city project with RAJUK NOC approval.' : 'রাজউক NOC প্রাপ্ত আধুনিক পরিকল্পিত আবাসিক শহর প্রকল্প।' },
    { icon: Home, name: t ? 'Residential Plots' : 'আবাসিক প্লট', desc: t ? 'Plots of 3, 5, 10 and 20 Katha with clear title documents.' : '৩, ৫, ১০ ও ২০ কাঠা নিষ্কণ্টক প্লট।' },
    { icon: Zap, name: t ? 'Modern Infrastructure' : 'আধুনিক অবকাঠামো', desc: t ? '25 to 60 ft wide roads with full civic infrastructure.' : '২৫ থেকে ৬০ ফুট প্রশস্ত রাস্তাসহ পূর্ণ নাগরিক সুবিধা।' },
    { icon: Shield, name: t ? 'Security & Safety' : 'নিরাপত্তা ব্যবস্থা', desc: t ? 'CCTV surveillance with govt. welfare foundation joint cooperation.' : 'সরকারি ওয়েলফেয়ার ফাউন্ডেনশনের যৌথ সহযোগিতায় সিসি ক্যামেরা।' },
    { icon: Users, name: t ? 'Community Welfare' : 'সামাজিক উন্নয়ন', desc: t ? 'Welfare Society and fund managed by plot owners jointly.' : 'প্লট মালিকগণের সমন্বয়ে ওয়েলফেয়ার সোসাইটি ও ফান্ড।' },
    { icon: Award, name: t ? 'Education & Health' : 'শিক্ষা ও স্বাস্থ্য', desc: t ? 'Schools, colleges, madrasa, hospital and healthcare facilities.' : 'স্কুল, কলেজ, মাদ্রাসা, হাসপাতাল ও স্বাস্থ্যসেবা।' },
    { icon: Sparkles, name: t ? 'Green & Recreation' : 'সবুজ ও বিনোদন', desc: t ? 'Lake, cinema, food court, swimming pool and walkway.' : 'লেক, সিনেপ্লেক্স, ফুডকোর্ট, সুইমিংপুল ও ওয়াকওয়ে।' },
  ];

  return (
    <section style={{ padding: '120px 5%', background: 'var(--navy)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionHeader
          tag={t ? 'Project Highlights' : 'প্রকল্পের বিশেষত্ব'}
          title={t ? 'Seven Pillars of Idol Green City' : 'আইডল গ্রীন সিটির সাত বিশেষত্ব'}
          sub={t ? 'A thoughtfully planned modern township with all civic amenities, security and a green environment for your ideal life.' : 'আধুনিক নগর পরিকল্পনাবিদের তত্ত্বাবধানে সুপরিকল্পিত নগরায়নসহ সকল নাগরিক সুবিধা।'}
          light
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {divisions.map(({ icon: Icon, name, desc }, i) => (
            <div key={i} style={{
              padding: '32px 26px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16,
              cursor: 'pointer',
              transition: 'all 0.35s',
              position: 'relative',
              overflow: 'hidden',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(37,99,235,0.12)';
                e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)`, opacity: 0, transition: 'opacity 0.3s' }}></div>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--blue-subtle)', border: '1px solid rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <Icon size={20} color="var(--blue)" />
              </div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="display" style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: 8 }}>{name}</h3>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{desc}</p>
              <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 6, color: '#60A5FA', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {t ? 'Learn more' : 'আরও জানুন'} <ChevronRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── WHY CHOOSE ─── */
const WhyChoose = ({ lang }) => {
  const t = lang === 'en';
  const items = [
    { icon: Award, title: t ? 'Clear Title & Affordable Price' : 'নিষ্কণ্টক ভূমি ও সাশ্রয়ী মূল্য', desc: t ? 'Dispute-free, green and serene surroundings with plots at affordable prices.' : 'সবুজ শ্যামলে ঘেরা নিজস্ব নিষ্কণ্টক ভূমি ও সাশ্রয়ী মূল্য।' },
    { icon: Shield, title: t ? 'RAJUK NOC & DAPP Approved' : 'রাজউক NOC ও ড্যাপ অনুমোদিত', desc: t ? 'Fully under RAJUK Megacity Master Plan with NOC approval and complete DAPP coverage.' : 'রাজউক মেগাসিটির মাস্টার প্ল্যানের আওতাভুক্ত NOC প্রাপ্ত ও সম্পূর্ণ ড্যাপের আওতামুক্ত।' },
    { icon: Zap, title: t ? 'Wide Well-Planned Roads' : 'প্রশস্ত সু-বিন্যস্ত রাস্তা', desc: t ? '25 ft to 40 ft and 60 ft wide well-planned roads throughout the project.' : 'প্রকল্পে থাকছে ২৫ ফুট থেকে ৪০ ও ৬০ ফুট প্রশস্ত সু-বিন্যস্ত রাস্তা।' },
    { icon: Users, title: t ? 'Complete Civic Amenities' : 'সম্পূর্ণ নাগরিক সুবিধা', desc: t ? 'Mosque, temple, school, college, hospital, shopping mall, graveyard, Eidgah, playground, madrasa, helipad, lake, cinema, food court, swimming pool, walkway and more.' : 'মসজিদ, মন্দির, স্কুল, কলেজ, হাসপাতাল, শপিংমল, কবরস্থান, ঈদগাহ, খেলার মাঠ, মাদ্রাসা, হেলিপ্যাড, লেক, সিনেপ্লেক্স, ফুডকোর্ট, সুইমিংপুল, ওয়াকওয়ে।' },
    { icon: TrendingUp, title: t ? 'Full Security System' : 'সার্বক্ষণিক নিরাপত্তা', desc: t ? 'CCTV surveillance system with government administration and welfare foundation joint cooperation.' : 'সরকারি প্রশাসন ও ওয়েলফেয়ার ফাউন্ডেশনের যৌথ সহযোগিতায় সি.সি ক্যামেরার মাধ্যমে সার্বিক নিরাপত্তা।' },
    { icon: Clock, title: t ? 'All Modern Utilities' : 'সকল প্রযুক্তিগত সুযোগ সুবিধা', desc: t ? 'Water, electricity, gas, telephone and internet services provided.' : 'পানি, বিদ্যুৎ, গ্যাস, টেলিফোন, ইন্টারনেটসহ সকল প্রযুক্তিগত সুযোগ সুবিধা প্রদান।' },
  ];

  return (
    <section className="mesh-bg" style={{ padding: '120px 5%', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionHeader
          tag={t ? 'Why Choose Us' : 'কেন আইডল গ্রীন সিটি পছন্দ করবেন'}
          title={t ? <>Why Choose <span className="blue-text">Idol Green City</span></> : <>কেন <span className="blue-text">আইডল গ্রীন সিটি</span> পছন্দ করবেন</>}
        />

        {/* Bento grid layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="card-blue-glow"
              style={{
                padding: '36px 30px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
                ...(i === 0 ? { gridColumn: 'span 2', background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%)', borderColor: 'transparent' } : {}),
              }}
            >
              {i === 0 && (
                <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)' }}></div>
              )}
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: i === 0 ? 'rgba(255,255,255,0.06)' : 'rgba(37,99,235,0.06)', position: 'absolute', top: 16, right: 22, fontFamily: 'Syne, sans-serif' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: i === 0 ? 'rgba(37,99,235,0.25)' : 'var(--blue-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Icon size={20} color={i === 0 ? '#93C5FD' : 'var(--blue)'} />
              </div>
              <h3 className="display" style={{ fontSize: '1.05rem', fontWeight: 700, color: i === 0 ? 'white' : 'var(--navy)', marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: '0.85rem', color: i === 0 ? 'rgba(255,255,255,0.55)' : 'var(--text-muted)', lineHeight: 1.75 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          section.mesh-bg > div > div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr 1fr !important;
          }
          section.mesh-bg > div > div > div[style*="span 2"] {
            grid-column: span 2 !important;
          }
        }
        @media(max-width:600px){
          section.mesh-bg > div > div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          section.mesh-bg > div > div > div[style*="span 2"] {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

/* ─── CEO QUOTE ─── */
const CEOSection = ({ lang }) => {
  const t = lang === 'en';
  return (
    <section style={{ padding: '120px 5%', background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=600&fit=crop" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.06 }} />
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>

      <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
        <div className="display" style={{ fontSize: '5rem', color: 'rgba(37,99,235,0.4)', lineHeight: 0.5, marginBottom: 24 }}>"</div>
        <blockquote style={{ fontSize: 'clamp(1.2rem, 2.8vw, 2rem)', fontWeight: 300, color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: 40, fontFamily: 'Outfit, sans-serif' }}>
          {t
            ? "Our vision is to build safe, beautiful and modern housing for all — not just providing land and homes, but creating a planned, eco-friendly city where every family can fulfill their dream with peace, dignity and modern civic life."
            : "সবার জন্য সুন্দর, নিরাপদ ও আধুনিক আবাসন নিশ্চিত করাই আমাদের মূল অঙ্গীকার। শুধু জমি বা ঘর নয়, আমরা একটি পরিকল্পিত, পরিবেশবান্ধব শহর গড়ে তুলছি যেখানে প্রতিটি পরিবার তাদের স্বপ্ন পূরণ করতে পারবে।"}
        </blockquote>
        <div style={{ width: 48, height: 2, background: 'var(--blue)', margin: '0 auto 24px', borderRadius: 2 }}></div>
        <div className="display" style={{ fontSize: '1rem', fontWeight: 700, color: '#60A5FA' }}>
          {t ? 'M. Haydar Ali' : 'এম. হায়দার আলী'}
        </div>
        <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 6 }}>
          {t ? 'Chairman, Idol Builders Ltd' : 'চেয়ারম্যান, আইডল বিল্ডার্স লিঃ'}
        </div>
      </div>
    </section>
  );
};

/* ─── TESTIMONIALS ─── */
const Testimonials = ({ lang }) => {
  const t = lang === 'en';
  // const [active, setActive] = useState(0);
  const testimonials = [
    { name: t ? 'Nur Mohammad' : 'নূর মোহাম্মদ', role: t ? 'Managing Director, Idol Builders Ltd' : 'ব্যবস্থাপনা পরিচালক, আইডল বিল্ডার্স লিঃ', rating: 5, text: t ? "We advance with your sincere trust and love. With sincerity, transparency and responsibility — we are committed to making your long-cherished dream a reality. Your satisfaction is our greatest success." : "আপনাদের প্রতি অগাধ বিশ্বাস ও ভালোবাসা নিয়ে আমরা এগিয়ে যাচ্ছি। সততা, স্বচ্ছতা ও দায়িত্বশীলতার মাধ্যমে আপনার দীর্ঘদিনের লালিত স্বপ্নকে বাস্তবে রূপ দিতে দৃঢ় প্রতিজ্ঞ।" },
    { name: t ? 'A Satisfied Plot Owner' : 'একজন সন্তুষ্ট গ্রাহক', role: t ? 'Plot Owner, Idol Green City' : 'প্লট মালিক, আইডল গ্রীন সিটি', rating: 5, text: t ? "Idol Green City has already become a trusted housing project for our customers. The clear title land, wide roads, RAJUK approval and modern amenities make it truly the best investment guarantee." : "আইডল গ্রীন সিটি আবাসন প্রকল্পটি ইতিমধ্যে গ্রাহকদের আস্থার পরিণত হয়েছে। নিষ্কণ্টক ভূমি, প্রশস্ত রাস্তা, রাজউক অনুমোদন ও আধুনিক সুবিধা এটিকে সত্যিকারের সেরা বিনিয়োগ করে তুলেছে।" },
    { name: t ? 'M. Haydar Ali' : 'এম. হায়দার আলী', role: t ? 'Chairman, Idol Builders Ltd' : 'চেয়ারম্যান, আইডল বিল্ডার্স লিঃ', rating: 5, text: t ? "I sincerely thank our esteemed customers for their unwavering trust in Idol Green City. We are always committed to providing all modern housing facilities with top-quality connectivity and civic life." : "আইডল গ্রীন সিটির প্রতি অবিচল আস্থা এবং সহযোগিতা বজায় রাখার জন্য আমি সম্মানিত গ্রাহক শুভানুধ্যায়ীদের আন্তরিক ধন্যবাদ জানাই।" },
  ];

  return (
    <section className="mesh-bg" style={{ padding: '120px 5%' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionHeader
          tag={t ? 'Testimonials' : 'প্রশংসাপত্র'}
          title={t ? 'What Our Clients Say' : 'আমাদের ক্লায়েন্টরা বলেন'}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          {testimonials.map((tst, i) => (
            <div key={i} className="gradient-border lift" style={{ padding: '36px 30px', position: 'relative', cursor: 'default' }}>
              <div style={{ display: 'flex', gap: 4, marginBottom: 18 }}>
                {[...Array(tst.rating)].map((_, j) => <Star key={j} size={14} fill="#2563EB" color="#2563EB" />)}
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 26, fontStyle: 'italic' }}>"{tst.text}"</p>
              <div style={{ borderTop: '1px solid var(--gray)', paddingTop: 20, display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'linear-gradient(135deg, var(--blue), #60A5FA)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="display" style={{ color: 'white', fontSize: '1rem', fontWeight: 700 }}>{tst.name[0]}</span>
                </div>
                <div>
                  <div className="display" style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '0.9rem' }}>{tst.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--blue)', marginTop: 2 }}>{tst.role}</div>
                </div>
              </div>
              <div className="display" style={{ position: 'absolute', top: 20, right: 28, fontSize: '4rem', color: 'rgba(37,99,235,0.07)', lineHeight: 1 }}>"</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:900px){section.mesh-bg>div>div[style*="grid-template-columns: 1fr 1fr 1fr"]{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
};

/* ─── CTA BANNER ─── */
const CTABanner = ({ lang, navClick }) => {
  const t = lang === 'en';
  return (
    <section style={{ padding: '100px 5%', background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #3B82F6 100%)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)', borderRadius: '50%' }}></div>
      <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <h2 className="display" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', fontWeight: 800, color: 'white', marginBottom: 16, lineHeight: 1.15 }}>
          {t ? "Book Your Plot in Idol Green City Today!" : "আজই আইডল গ্রীন সিটিতে আপনার প্লট বুক করুন!"}
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', marginBottom: 40, lineHeight: 1.7 }}>
          {t ? "First-come-first-served basis. Secure your dream plot in RAJUK Megacity NOC approved Idol Green City — your best investment guarantee." : "আগে আসলে আগে পাবেন। রাজউক মেগাসিটি NOC প্রাপ্ত আইডল গ্রীন সিটিতে আপনার স্বপ্নের প্লট বুক করুন — দ্য বেস্ট ইনভেস্টমেন্ট গ্যারান্টি।"}
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navClick('contact')} style={{
            padding: '14px 36px', background: 'white', color: 'var(--blue)',
            border: 'none', borderRadius: 8, fontSize: '0.86rem', fontWeight: 700,
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.3s',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)'; }}>
            {t ? 'Schedule Consultation' : 'পরামর্শ নিন'} <ArrowRight size={16} />
          </button>
          <button onClick={() => navClick('pricing')} style={{
            padding: '14px 36px', background: 'rgba(255,255,255,0.1)', color: 'white',
            border: '2px solid rgba(255,255,255,0.35)', borderRadius: 8, fontSize: '0.86rem', fontWeight: 700,
            cursor: 'pointer', transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            {t ? 'View Pricing' : 'মূল্য দেখুন'}
          </button>
        </div>
      </div>
    </section>
  );
};

/* ─── FOOTER ─── */
const Footer = ({ lang, navClick }) => {
  const t = lang === 'en';
  return (
    <footer style={{ background: 'var(--navy)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '80px 5% 40px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60, marginBottom: 60 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: 'linear-gradient(135deg, #2563EB, #3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(37,99,235,0.3)' }}>
                <Building2 size={20} color="white" />
              </div>
              <div>
                <div className="display" style={{ fontSize: '1.1rem', color: 'white', fontWeight: 700 }}>
                  {t ? 'Idol Builders Ltd' : 'আইডল বিল্ডার্স লিমিটেড'}
                </div>
                <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>The Best Investment Guarantee</div>
              </div>
            </div>
            <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, marginBottom: 24 }}>
              {t ? "Your dream home is our commitment. Ensuring safe, beautiful and modern housing for all — through Idol Green City, Bangladesh's best investment guarantee." : "আপনার স্বপ্নের আবাসন আমাদের অঙ্গীকার। সবার জন্য সুন্দর, নিরাপদ ও আধুনিক আবাসন নিশ্চিত করাই আমাদের লক্ষ্য।"}
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[{"icon": Facebook, "url": "https://www.facebook.com/Idol.Builders.Ltd"}, {"icon":Instagram, "url": "#"}, {"icon":Linkedin, "url": "#"}, {"icon":Youtube, "url":"#"}].map(({icon: Icon, url}, i) => (
                <a key={i} href={url} style={{
                  width: 38, height: 38, borderRadius: 8,
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.35)', transition: 'all 0.25s', textDecoration: 'none'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.25)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)'; e.currentTarget.style.color = '#93C5FD'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="display" style={{ fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 20 }}>
              {t ? 'Company' : 'কোম্পানি'}
            </h4>
            {[
              { key: 'about', en: 'About Us', bn: 'আমাদের সম্পর্কে' },
              { key: 'projects', en: 'Projects', bn: 'প্রকল্পসমূহ' },
              { key: 'gallery', en: 'Gallery', bn: 'গ্যালারি' },
            ].map(l => (
              <button key={l.key} onClick={() => navClick(l.key)} style={{ display: 'block', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: '0.84rem', padding: '7px 0', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                {t ? l.en : l.bn}
              </button>
            ))}
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="display" style={{ fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 20 }}>
              {t ? 'Resources' : 'সম্পদ'}
            </h4>
            {[
              { key: 'services', en: 'Services', bn: 'সেবা' },
              { key: 'pricing', en: 'Pricing', bn: 'মূল্য তালিকা' },
              { key: 'contact', en: 'Contact', bn: 'যোগাযোগ' },
            ].map(l => (
              <button key={l.key} onClick={() => navClick(l.key)} style={{ display: 'block', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: '0.84rem', padding: '7px 0', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                {t ? l.en : l.bn}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="display" style={{ fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#60A5FA', marginBottom: 20 }}>
              {t ? 'Contact' : 'যোগাযোগ'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { Icon: MapPin, info: 'Lilypond Center, Suit A-13\n3 R.K Mission Road, Dhaka-1203' },
                { Icon: Mail, info: 'idolbuildersbd@gmail.com' },
                { Icon: Phone, info: '+880 2-41054321' },
              ].map(({ Icon, info }, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 7, background: 'rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <Icon size={14} color="#60A5FA" />
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{info}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)' }}>
            © 2025 Idol Builders Ltd. {t ? 'All rights reserved.' : 'সর্বস্বত্ব সংরক্ষিত।'} | {t ? 'The Best Investment Guarantee' : 'দ্য বেস্ট ইনভেস্টমেন্ট গ্যারান্টি'}
          </p>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.2)' }}>
            {t ? 'Privacy Policy · Terms of Service' : 'গোপনীয়তা নীতি · সেবার শর্তাবলী'}
          </p>
        </div>
      </div>
      <style>{`@media(max-width:900px){footer>div>div[style*="grid-template-columns: 2fr"]{grid-template-columns:1fr 1fr!important;}}@media(max-width:600px){footer>div>div[style*="grid-template-columns: 2fr"]{grid-template-columns:1fr!important;}}`}</style>
    </footer>
  );
};

/* ─── HOME PAGE ─── */
const HomePage = ({ lang, navClick }) => (
  <>
    <Hero lang={lang} navClick={navClick} />
    <Ticker lang={lang} />
    <AboutSection lang={lang} />
    <DivisionsSection lang={lang} />
    <WhyChoose lang={lang} />
    <CEOSection lang={lang} />
    <Testimonials lang={lang} />
    <CTABanner lang={lang} navClick={navClick} />
  </>
);

/* ─── PAGE: ABOUT ─── */
const AboutPage = ({ lang }) => {
  const t = lang === 'en';
  return (
    <section className="mesh-bg" style={{ padding: '120px 5%', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionHeader
          tag={t ? 'Our Story' : 'আমাদের গল্প'}
          title={t ? <>Idol Builders Ltd — <span className="blue-text">Your Trusted</span> Real Estate Partner</> : <>আইডল বিল্ডার্স লিঃ — আপনার <span className="blue-text">বিশ্বস্ত</span> রিয়েল এস্টেট অংশীদার</>}
          sub={t ? "Idol Builders Ltd advances with sincere trust and love, ensuring safe, beautiful and modern housing for all. Through Idol Green City, we are turning your long-cherished dream into reality." : "পরম করুণাময় আল্লাহর উপর অগাধ বিশ্বাস ও আস্থা রেখে কৃতজ্ঞতা প্রকাশ করছি যে, আমাদের দীর্ঘ দিনের লালিত স্বপ্নের 'আইডল বিল্ডার্স লিমিটেড' মানুষের কল্যাণে ও স্বপ্ন পূরণে এগিয়ে যাচ্ছে।"}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginBottom: 80, alignItems: 'start' }}>
          <div>
            <h3 className="display" style={{ fontSize: '1.6rem', color: 'var(--navy)', marginBottom: 14, fontWeight: 700 }}>{t ? 'Our Vision' : 'ভিশন'}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: 28, fontSize: '0.96rem' }}>
              {t
                ? "To fulfill people's dreams within affordability and capability is the core principle of our organization. We aim to earn a distinguished reputation in the real estate sector through maximum transparency, sincerity and commitment in all land transactions."
                : "সাদ ও সাধ্যের মধ্যে জনমানুষের স্বপ্ন পূরণ আমাদের প্রতিষ্ঠানের মূলনীতি। ভূমি সংক্রান্ত সকল লেনদেন সর্বোচ্চ স্বচ্ছতা, সততা এবং কর্মনিষ্ঠার মাধ্যমে সুনাম অর্জন করা।"}
            </p>
            <h3 className="display" style={{ fontSize: '1.6rem', color: 'var(--navy)', marginBottom: 14, fontWeight: 700 }}>{t ? 'Our Mission' : 'মিশন'}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.96rem' }}>
              {t
                ? "To individually collect and preserve customer data efficiently. To provide smooth solutions for customers to acquire ownership matching their overall financial and social position. To ensure accountability to customers at all times. To provide professional assistance in home construction loans at the customer level. To deploy skilled manpower to provide services based on the highest priority of customers."
                : "ব্যক্তি গ্রাহক ভিত্তিতে সুচারু ভাবে তথ্যের সংগ্রহ এবং সংরক্ষণ করা। গ্রাহকের সর্বাঙ্গীন আর্থিক ও সামাজিক অবস্থানের মালিকানা অর্জনে সুচারু সমাধান প্রদান করা। গ্রাহকের কাছে সর্বময় অবস্থায় জবাবদিহতা নিশ্চিত করা। গ্রাহক পর্যায়ে বাড়ি নির্মান কাজে ঋণ গ্রহণের ক্ষেত্রে পেশাগত সহযোগিতা করা। গ্রাহকদের সর্বোচ্চ অগ্রাধিকারের ভিত্তিতে সেবা প্রদানের মানসে প্রয়োজনীয় দক্ষ জনশক্তি নিয়োজিত করা।"}
            </p>
          </div>
          <div>
            <div style={{ position: 'relative', overflow: 'hidden', height: 360, borderRadius: 16 }}>
              <img src="images/yoobabess.png" alt="About" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 55%)' }}></div>
              <div className="glass-card-dark" style={{ position: 'absolute', bottom: 24, left: 24, padding: '14px 22px', borderRadius: 12 }}>
                <div className="display" style={{ fontSize: '1.8rem', color: '#60A5FA', fontWeight: 800 }}>NOC</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t ? 'RAJUK Approved' : 'রাজউক অনুমোদিত'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core values */}
        <div style={{ borderTop: '2px solid var(--gray)', paddingTop: 60 }}>
          <h3 className="display" style={{ fontSize: '1.9rem', color: 'var(--navy)', marginBottom: 32, textAlign: 'center', fontWeight: 800 }}>
            {t ? 'Core Values' : 'মূল মূল্যবোধ'}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
            {[
              { title: t ? 'Integrity' : 'সততা', desc: t ? 'Transparent in every land transaction and dealing.' : 'প্রতিটি ভূমি লেনদেনে স্বচ্ছতা ও সততা।', color: '#2563EB' },
              { title: t ? 'Accountability' : 'জবাবদিহিতা', desc: t ? 'Always accountable to customers in all circumstances.' : 'সর্বময় অবস্থায় গ্রাহকের কাছে জবাবদিহিতা।', color: '#059669' },
              { title: t ? 'Customer First' : 'গ্রাহক প্রথম', desc: t ? 'Services based on highest priority of customers.' : 'গ্রাহকদের সর্বোচ্চ অগ্রাধিকারের ভিত্তিতে সেবা।', color: '#7C3AED' },
              { title: t ? 'Community' : 'সমাজ', desc: t ? 'Building planned communities, not just selling land.' : 'শুধু জমি নয়, পরিকল্পিত সমাজ গড়া।', color: '#D97706' },
            ].map((v, i) => (
              <div key={i} className="card-blue-glow" style={{ padding: '32px 24px', textAlign: 'center', borderRadius: 16 }}>
                <div className="display" style={{ fontSize: '2rem', color: `${v.color}22`, marginBottom: 12, fontWeight: 800 }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ width: 36, height: 3, background: v.color, borderRadius: 2, margin: '0 auto 16px', opacity: 0.8 }}></div>
                <h4 className="display" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>{v.title}</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){
          section.mesh-bg>div>div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;}
          section.mesh-bg>div>div>div[style*="grid-template-columns: repeat(4"]{grid-template-columns:repeat(2,1fr)!important;}
        }
      `}</style>
    </section>
  );
};

/* ─── PAGE: PROJECTS ─── */
const ProjectsPage = ({ lang }) => {
  const t = lang === 'en';
  const [filter, setFilter] = useState('All');
  const categories = t
    ? ['All', 'Residential', 'Commercial', 'High-Rise', 'Waterfront']
    : ['সব', 'আবাসিক', 'বাণিজ্যিক', 'উচ্চ-উত্থান', 'ওয়াটারফ্রন্ট'];

  const projects = [
    { img: 'images/main gate.png', name: t ? 'Idol Green City' : 'আইডল গ্রীন সিটি', loc: t ? 'Dhaka Megacity Area' : 'ঢাকা মেগাসিটি এলাকা', cat: t ? 'Residential' : 'আবাসিক', size: t ? '3, 5, 10 & 20 Katha' : '৩, ৫, ১০ ও ২০ কাঠা' },
    { img: 'images/idol central park.png', name: t ? 'Idol Central Park' : 'আইডল সেন্ট্রাল পার্ক', loc: t ? 'Dhaka Megacity Area' : 'ঢাকা মেগাসিটি এলাকা', cat: t ? 'Commercial' : 'বাণিজ্যিক', size: t ? 'Commercial Zone' : 'বাণিজ্যিক জোন' },
    { img: 'images/mosque idol.png', name: t ? 'Idol Central Mosque' : 'আইডল সেন্ট্রাল মসজিদ', loc: t ? 'Idol Green City' : 'আইডল গ্রীন সিটি', cat: t ? 'High-Rise' : 'উচ্চ-উত্থান', size: t ? 'Multi-storey' : 'বহুতল' },
    { img: 'images/convention.png', name: t ? 'Idol Convention Center' : 'আইডল কনভেনশন সেন্টার', loc: t ? 'Idol Green City' : 'আইডল গ্রীন সিটি', cat: t ? 'Waterfront' : 'ওয়াটারফ্রন্ট', size: t ? 'Lakeside' : 'লেকসাইড' },
];

  const filtered = filter === 'All' || filter === 'সব' ? projects : projects.filter(p => p.cat === filter);

  return (
    <section className="mesh-bg" style={{ padding: '120px 5%', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionHeader
          tag={t ? 'Portfolio' : 'পোর্টফোলিও'}
          title={t ? 'Idol Green City — Our Flagship Project' : 'আইডল গ্রীন সিটি — আমাদের প্রধান প্রকল্প'}
          sub={t ? 'A modern, eco-friendly and safe housing project with RAJUK Megacity Master Plan NOC approval — your best investment guarantee.' : 'রাজউক মেগাসিটি মাস্টার প্ল্যানের NOC প্রাপ্ত আধুনিক, পরিবেশবান্ধব ও নিরাপদ আবাসন প্রকল্প — আপনার সেরা বিনিয়োগ গ্যারান্টি।'}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 48 }}>
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)} className={`filter-pill${filter === c ? ' active' : ''}`}>{c}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {filtered.map((p, i) => (
            <div key={i} className="card-blue-glow" style={{ overflow: 'hidden', cursor: 'pointer', borderRadius: 16 }}>
              <div style={{ height: 240, overflow: 'hidden', position: 'relative' }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.5) 0%, transparent 55%)' }}></div>
                <div style={{ position: 'absolute', top: 16, left: 16 }}>
                  <span className="tag" style={{ background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(8px)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>{p.cat}</span>
                </div>
              </div>
              <div style={{ padding: '22px 24px' }}>
                <h3 className="display" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>{p.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <MapPin size={12} /> {p.loc}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--blue)', fontWeight: 500 }}>{p.size}</div>
                </div>
                {/* <button style={{ marginTop: 16, background: 'none', border: 'none', color: 'var(--blue)', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, padding: 0, transition: 'gap 0.2s', letterSpacing: '0.06em' }}
                  onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '6px'}>
                  {t ? 'View Details' : 'বিস্তারিত'} <ArrowRight size={14} />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){section.mesh-bg>div>div[style*="grid-template-columns: repeat(3, 1fr)"]{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:600px){section.mesh-bg>div>div[style*="grid-template-columns: repeat(3, 1fr)"]{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
};

/* ─── PAGE: SERVICES ─── */
const ServicesPage = ({ lang }) => {
  const t = lang === 'en';
  const services = [
    { icon: Building2, title: t ? 'Plot Booking & Registration' : 'প্লট বুকিং ও রেজিস্ট্রেশন', desc: t ? 'First-come-first-served plot booking with official company application form, NID and passport-size photos. Primary allocation letter provided after payment.' : 'গ্রাহক বা তার প্রতিনিধি প্লট বরাদ্দের জন্য কোম্পানীর নির্ধারিত ফরমে আবেদন করতে হবে। প্লট বুকিং এর পরিমাণ অর্থ পরিশোধের পর প্রাথমিক বরাদ্পত্র প্রদান করা হবে।', color: '#2563EB' },
    { icon: Sparkles, title: t ? 'Name Transfer Service' : 'নাম পরিবর্তন সেবা', desc: t ? 'If a customer wants to transfer their plot to another name, the company\'s prescribed name-change fee must be paid.' : 'কোন গ্রাহক যদি তার বরাদ্দকৃত প্লটটি অন্য নামে হস্তান্তর বা নাম পরিবর্তন করতে চান, সেক্ষেত্রে কোম্পানীর নির্ধারিত নাম পরিবর্তন ফি প্রদান করতে হবে।', color: '#7C3AED' },
    { icon: Users, title: t ? 'Home Loan Assistance' : 'হোম লোন সহযোগিতা', desc: t ? 'Professional assistance to customers for home construction loan from relevant government-approved institutions.' : 'গ্রাহক পর্যায়ে বাড়ি নির্মান কাজে ঋণ গ্রহণের ক্ষেত্রে পেশাগত সহযোগিতা করা হয়।', color: '#059669' },
    { icon: Shield, title: t ? 'Utilities & Infrastructure' : 'ইউটিলিটি ও অবকাঠামো', desc: t ? 'Electricity, water, gas and sanitation arranged through connected organizations. Plot owners bear proportional ownership costs; main connection setup is owner\'s responsibility.' : 'সংশ্লিষ্ট সংস্থাসমূহের সহযোগিতায় প্রকল্পে বিদ্যুৎ, পানি, গ্যাস ও পয়ঃনিষ্কাশন ব্যবস্থা কোম্পানীর উদ্যোগে ব্যবস্থা করা হবে।', color: '#D97706' },
    { icon: Zap, title: t ? 'Welfare Society & Fund' : 'ওয়েলফেয়ার সোসাইটি ও ফান্ড', desc: t ? 'A Welfare Society will be formed among plot owners for managing the project\'s social development. A welfare fund will be formed for associated expenses.' : 'প্রকল্পের সামাজিক উন্নয়ন কার্যক্রম পরিচালনার জন্য মালিকদের সমন্বয়ে ওয়েলফেয়ার সোসাইটি গঠন করা হবে। সোসাইটির সিদ্ধান্ত অনুযায়ী ফান্ডে টাকা জমা দিতে হবে।', color: '#0891B2' },
    { icon: TrendingUp, title: t ? 'Registration & Handover' : 'রেজিস্ট্রেশন ও হস্তান্তর', desc: t ? 'Registration and handover process completed within 15 working days after full payment. All registration fees and applicable charges are borne by the plot owner.' : 'মূল্য পরিশোধের পর ১৫ কার্যদিবসের মধ্যে প্লট রেজিস্ট্রেশন প্রক্রিয়া সম্পন্ন করা হবে। রেজিস্ট্রি এবং হস্তান্তরের জন্য রেজিস্ট্রেশন ফি ভ্যাটসহ আনুষঙ্গিক যাবতীয়খরচাদি গ্রহীতা বহন করবেন।', color: '#DC2626' },
  ];

  return (
    <section className="mesh-bg" style={{ padding: '120px 5%', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionHeader
          tag={t ? 'Services' : 'সেবাসমূহ'}
          title={t ? 'Plot Purchase Rules & Services' : 'প্লট ক্রয়ের নিয়মাবলি ও সেবা'}
          sub={t ? 'Transparent rules and professional services from plot booking to registration and handover — we are always by your side.' : 'প্লট বুকিং থেকে রেজিস্ট্রেশন ও হস্তান্তর পর্যন্ত স্বচ্ছ নিয়মাবলি ও পেশাদার সেবা — আমরা সবসময় পাশে আছি।'}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {services.map(({ icon: Icon, title, desc, color }, i) => (
            <div key={i} className="card-blue-glow" style={{ padding: '40px 32px', cursor: 'default', borderRadius: 16, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${color}, ${color}88, transparent)`, opacity: 0.7, borderRadius: '16px 16px 0 0' }}></div>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: `${color}14`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
                <Icon size={22} color={color} />
              </div>
              <h3 className="display" style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 12 }}>{title}</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 18 }}>{desc}</p>
              {/* <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: color, fontSize: '0.74rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {t ? 'Learn More' : 'আরও জানুন'} <ChevronRight size={12} />
              </div> */}
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){section.mesh-bg>div>div[style*="grid-template-columns: repeat(3, 1fr)"]{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:600px){section.mesh-bg>div>div[style*="grid-template-columns: repeat(3, 1fr)"]{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
};

/* ─── PAGE: GALLERY ─── */
const GalleryPage = ({ lang }) => {
  const t = lang === 'en';
  const images = [
    { src: 'images/pic1.png', title: t ? 'Idol Green City' : 'আইডল গ্রীন সিটি' },
    { src: 'images/pic2.png', title: t ? 'Current Situation' : 'বর্তমান অবস্থা' },
    { src: 'images/hitech.png', title: t ? 'Lake & Recreation Area' : 'লেক ও বিনোদন এলাকা' },
    { src: 'images/convention.png', title: t ? 'Convention Center' : 'কনভেনশন সেন্টার' },
    { src: 'images/mosque idol.png', title: t ? 'Idol Mosque' : 'মসজিদ' },
    { src: 'images/nimtoli.png', title: t ? 'Dhaka Nimtola, Padma Setu' : 'ঢাকা নিমতলা, পদ্মাসেতু- খুলনা রেললাইন ' },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section className="mesh-bg" style={{ padding: '120px 5%', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionHeader
          tag={t ? 'Gallery' : 'গ্যালারি'}
          title={t ? 'Idol Green City Gallery' : 'আইডল গ্রীন সিটি গ্যালারি'}
          sub={t ? 'A visual showcase of Idol Green City — modern planned roads, amenities, lake, and a green environment for your ideal life.' : 'আইডল গ্রীন সিটির ভিজ্যুয়াল শোকেস — আধুনিক পরিকল্পিত রাস্তা, সুবিধাসমূহ, লেক ও সবুজ পরিবেশ।'}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 14 }}>
          {images.map((img, i) => {
            const spans = i === 0 ? 'span 7' : i === 4 ? 'span 7' : 'span 5';
            return (
              <div key={i} style={{ gridColumn: spans, overflow: 'hidden', position: 'relative', height: 340, borderRadius: 16, cursor: 'pointer' }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}>
                <img src={img.src} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)', transform: hovered === i ? 'scale(1.07)' : 'scale(1)' }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.1) 50%, transparent 100%)',
                  borderRadius: 16,
                  opacity: hovered === i ? 1 : 0.4,
                  transition: 'opacity 0.4s'
                }}>
                  <div style={{ position: 'absolute', bottom: 24, left: 24 }}>
                    <div className="display" style={{ fontSize: '1rem', fontWeight: 700, color: 'white', transform: hovered === i ? 'translateY(0)' : 'translateY(8px)', transition: 'transform 0.4s' }}>{img.title}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.72rem', color: '#60A5FA', marginTop: 6, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: hovered === i ? 1 : 0, transition: 'opacity 0.4s 0.1s' }}>
                      <Eye size={12} /> {t ? 'View Project' : 'প্রকল্প দেখুন'}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`@media(max-width:900px){section.mesh-bg>div>div[style*="grid-template-columns: repeat(12"]{display:grid!important;grid-template-columns:1fr 1fr!important;}section.mesh-bg>div>div[style*="grid-template-columns: repeat(12"] > div{grid-column:span 1!important;height:220px!important;}}@media(max-width:600px){section.mesh-bg>div>div[style*="grid-template-columns: repeat(12"] > div{height:180px!important;}}`}</style>
    </section>
  );
};

/* ─── PAGE: CONTACT ─── */
const ContactPage = ({ lang }) => {
  const t = lang === 'en';
  // const [focused, setFocused] = useState(null);

  return (
    <section className="mesh-bg" style={{ padding: '120px 5%', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionHeader
          tag={t ? 'Contact' : 'যোগাযোগ'}
          title={t ? 'Get In Touch' : 'যোগাযোগ করুন'}
          sub={t ? "Have a project in mind or want to explore your options? Our team is ready to help you take the first step towards your dream property." : "আপনার স্বপ্নের সম্পত্তির দিকে প্রথম পদক্ষেপ নিতে আমাদের দল প্রস্তুত।"}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>

          {/* Form */}
          <div className="card-blue-glow" style={{ padding: '48px 40px', borderRadius: 20 }}>
            <h3 className="display" style={{ fontSize: '1.6rem', color: 'var(--navy)', marginBottom: 32, fontWeight: 800 }}>
              {t ? 'Send a Message' : 'বার্তা পাঠান'}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { label: t ? 'Full Name' : 'পূর্ণ নাম', type: 'text', ph: t ? 'Your name' : 'আপনার নাম' },
                { label: t ? 'Email Address' : 'ইমেইল ঠিকানা', type: 'email', ph: 'email@example.com' },
                { label: t ? 'Phone Number' : 'ফোন নম্বর', type: 'tel', ph: '+880 1X-XXXXXXXX' },
              ].map((f, i) => (
                <div key={i}>
                  <label style={{ display: 'block', fontSize: '0.76rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8, fontWeight: 600 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.ph} className="input-field input-glow" />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontSize: '0.76rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8, fontWeight: 600 }}>
                  {t ? 'Message' : 'বার্তা'}
                </label>
                <textarea rows={5} placeholder={t ? 'Tell us about your project...' : 'আপনার প্রকল্প সম্পর্কে বলুন...'} className="input-field input-glow" style={{ resize: 'none' }}></textarea>
              </div>
              <button className="btn-neon">
                {t ? 'Send Message' : 'বার্তা পাঠান'} <ArrowRight size={18} style={{ position: 'relative', zIndex: 1 }} />
              </button>
            </div>
          </div>

          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="card-blue-glow" style={{ padding: '36px 32px', borderRadius: 18 }}>
              <h3 className="display" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 24, fontWeight: 700 }}>
                {t ? 'Contact Information' : 'যোগাযোগের তথ্য'}
              </h3>
              {[
                { Icon: MapPin, title: t ? 'Address' : 'ঠিকানা', info: 'Lilypond Center, Suit No. A-13\n3 R.K Mission Road, Dhaka-1203' },
                { Icon: Mail, title: t ? 'Email' : 'ইমেইল', info: 'idolbuildersbd@gmail.com' },
                { Icon: Phone, title: t ? 'Phone' : 'ফোন', info: '+880 2-41054321' },
              ].map(({ Icon, title, info }, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, marginBottom: i < 2 ? 20 : 0, paddingBottom: i < 2 ? 20 : 0, borderBottom: i < 2 ? '1px solid var(--gray)' : 'none' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 11, background: 'var(--blue-subtle)', border: '1px solid rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={17} color="var(--blue)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 5, fontWeight: 600 }}>{title}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--navy)', lineHeight: 1.65, whiteSpace: 'pre-line' }}>{info}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-blue-glow" style={{ padding: '32px 32px', borderRadius: 18 }}>
              <h3 className="display" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 20, fontWeight: 700 }}>
                {t ? 'Office Hours' : 'অফিস সময়'}
              </h3>
              {[
                { day: t ? 'Sunday – Thursday' : 'রবিবার – বৃহস্পতিবার', time: t ? '9:00 AM – 6:00 PM' : 'সকাল ৯:০০ – সন্ধ্যা ৬:০০', open: true },
                { day: t ? 'Friday' : 'শুক্রবার', time: t ? 'Closed' : 'বন্ধ', open: false },
                { day: t ? 'Saturday' : 'শনিবার', time: t ? '10:00 AM – 4:00 PM' : 'সকাল ১০:০০ – বিকাল ৪:০০', open: true },
              ].map((h, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: i < 2 ? '1px solid var(--gray)' : 'none' }}>
                  <span style={{ fontSize: '0.86rem', color: 'var(--navy-3)' }}>{h.day}</span>
                  <span style={{ fontSize: '0.86rem', color: h.open ? 'var(--blue)' : '#DC2626', fontWeight: 600 }}>{h.time}</span>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div style={{ height: 160, borderRadius: 18, overflow: 'hidden', position: 'relative', background: 'var(--gray)' }}>
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop" alt="Map" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(15,23,42,0.3)' }}>
                <div style={{ textAlign: 'center' }}>
                  <MapPin size={28} color="var(--blue)" />
                  <div className="display" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'white', marginTop: 6 }}>Dhaka, Bangladesh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){section.mesh-bg>div>div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
};

/* ─── PAGE: PRICING ─── */
const PricingPage = ({ lang, navClick }) => {
  const t = lang === 'en';
  const [tab, setTab] = useState('5');

  const amenities = t
    ? ['Apartment Zone', 'Shopping Complex', 'Convention Center', 'Club House', 'Duplex Zone', 'Hospital', 'Super Shop', 'University', 'Central Car Parking', 'Old & Day Care', 'Playground', 'Amusement Park']
    : ['এপার্টমেন্ট জোন', 'শপিং কমপ্লেক্স', 'কনভেনশন সেন্টার', 'ক্লাব হাউজ', 'ডুপ্লেক্স জোন', 'হাসপাতাল', 'সুপার শপ', 'বিশ্ববিদ্যালয়', 'সেন্ট্রাল কার পার্কিং', 'ওল্ড এ্যান্ড ডে কেয়ার', 'খেলার মাঠ', 'এমিউজমেন্ট পার্ক'];

  const tables = {
    '5': {
      label: t ? '5 Katha Plots' : '৫ কাঠা প্লট',
      headers: [t ? 'Plot Type' : 'প্লট প্রকার', t ? 'Lumpsum' : 'একসাথে', 'Y1', 'Y2', 'Y3', 'Y4', 'Y5'],
      rows: [
        [t ? 'North Facing' : 'উত্তরমুখী', '১০,০০,০০০', '১০,৫০,০০০', '১১,০০,০০০', '১১,৫০,০০০', '১২,০০,০০০', '১৩,০০,০০০'],
        [t ? 'South Facing' : 'দক্ষিণমুখী', '১১,০০,০০০', '১১,৫০,০০০', '১২,০০,০০০', '১২,৫০,০০০', '১৩,০০,০০০', '১৪,০০,০০০'],
        [t ? 'NW Corner' : 'উত্তর-পশ্চিম কর্ণার', '১২,০০,০০০', '১২,৫০,০০০', '১৩,০০,০০০', '১৩,৫০,০০০', '১৪,০০,০০০', '১৫,০০,০০০'],
        [t ? 'SW Corner' : 'দক্ষিণ-পশ্চিম কর্ণার', '১৩,০০,০০০', '১৩,৫০,০০০', '১৪,০০,০০০', '১৪,৫০,০০০', '১৫,০০,০০০', '১৬,০০,০০০'],
        [t ? 'Commercial' : 'বাণিজ্যিক', '১৪,০০,০০০', '১৪,৫০,০০০', '১৫,০০,০০০', '১৫,৫০,০০০', '১৬,০০,০০০', '১৭,০০,০০০'],
        [t ? 'Restricted' : 'রেস্ট্রিক্টেড', '১৫,০০,০০০', '১৫,৫০,০০০', '১৬,০০,০০০', '১৬,৫০,০০০', '১৭,০০,০০০', '১৮,০০,০০০'],
      ]
    },
    '7': {
      label: t ? '7 Katha Plots' : '৭ কাঠা প্লট',
      headers: [t ? 'Plot Type' : 'প্লট প্রকার', t ? 'Lumpsum' : 'একসাথে', 'Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7'],
      rows: [
        [t ? 'North Facing' : 'উত্তরমুখী', '৮,৫০,০০০', '৯,০০,০০০', '৯,৫০,০০০', '১০,০০,০০০', '১০,৫০,০০০', '১১,০০,০০০', '১১,৫০,০০০', '১২,০০,০০০'],
        [t ? 'South Facing' : 'দক্ষিণমুখী', '৯,০০,০০০', '৯,৫০,০০০', '১০,০০,০০০', '১০,৫০,০০০', '১১,০০,০০০', '১১,৫০,০০০', '১২,০০,০০০', '১৩,০০,০০০'],
        [t ? 'NW Corner' : 'উত্তর-পশ্চিম কর্ণার', '১০,০০,০০০', '১০,৫০,০০০', '১১,০০,০০০', '১১,৫০,০০০', '১২,০০,০০০', '১২,৫০,০০০', '১৩,০০,০০০', '১৪,০০,০০০'],
        [t ? 'SW Corner' : 'দক্ষিণ-পশ্চিম কর্ণার', '১১,০০,০০০', '১১,৫০,০০০', '১২,০০,০০০', '১২,৫০,০০০', '১৩,০০,০০০', '১৩,৫০,০০০', '১৪,০০,০০০', '১৫,০০,০০০'],
        [t ? 'Commercial' : 'বাণিজ্যিক', '১২,০০,০০০', '১২,৫০,০০০', '১৩,০০,০০০', '১৩,৫০,০০০', '১৪,০০,০০০', '১৪,৫০,০০০', '১৫,০০,০০০', '১৬,০০,০০০'],
      ]
    },
    '3': {
      label: t ? '3 Katha Plots' : '৩ কাঠা প্লট',
      headers: [t ? 'Plot Type' : 'প্লট প্রকার', t ? 'Lumpsum' : 'একসাথে', 'Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7', 'Y8'],
      rows: [
        [t ? 'North Facing' : 'উত্তরমুখী', '৭,০০,০০০', '৭,৫০,০০০', '৯,০০,০০০', '৯,৫০,০০০', '১০,০০,০০০', '১০,৫০,০০০', '১১,০০,০০০', '১১,৫০,০০০', '১২,০০,০০০'],
        [t ? 'South Facing' : 'দক্ষিণমুখী', '৭,৫০,০০০', '৯,০০,০০০', '৯,৫০,০০০', '১০,০০,০০০', '১০,৫০,০০০', '১১,০০,০০০', '১১,৫০,০০০', '১২,০০,০০০', '১৩,০০,০০০'],
        [t ? 'NW Corner' : 'উত্তর-পশ্চিম কর্ণার', '৯,৫০,০০০', '১০,৫০,০০০', '১১,০০,০০০', '১১,৫০,০০০', '১২,০০,০০০', '১২,৫০,০০০', '১২,৫০,০০০', '১৪,৫০,০০০', '১৪,০০,০০০'],
        [t ? 'SW Corner' : 'দক্ষিণ-পশ্চিম কর্ণার', '১০,০০,০০০', '১১,০০,০০০', '১১,৫০,০০০', '১২,০০,০০০', '১২,৫০,০০০', '১৩,০০,০০০', '১৫,৫০,০০০', '১৪,০০,০০০', '১৫,৫০,০০০'],
        [t ? 'Commercial' : 'বাণিজ্যিক', '১১,০০,০০০', '১২,০০,০০০', '১২,৫০,০০০', '১৩,০০,০০০', '১৩,৫০,০০০', '১৪,০০,০০০', '১৫,০০,০০০', '১৫,০০,০০০', '১৬,০০,০০০'],
      ]
    }
  };

  const current = tables[tab];

  return (
    <section className="mesh-bg" style={{ padding: '120px 5%', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <SectionHeader
          tag={t ? 'Transparent Pricing' : 'স্বচ্ছ মূল্য নির্ধারণ'}
          title={t ? 'Plot Pricing Plans' : 'প্লট মূল্য পরিকল্পনা'}
          sub={t ? 'Flexible payment options for every plot size. First-come-first-served basis. Choose the plan that best fits your financial capacity.' : 'আগে আসলে আগে পাবেন এই নীতিতে প্লট বুকিং। প্রতিটি প্লট আকারের জন্য নমনীয় পেমেন্ট বিকল্প।'}
        />

        {/* Amenities */}
        <div className="card-blue-glow" style={{ padding: '48px 40px', marginBottom: 40, borderRadius: 20 }}>
          <h3 className="display" style={{ fontSize: '1.5rem', color: 'var(--navy)', textAlign: 'center', marginBottom: 8, fontWeight: 800 }}>
            {t ? 'Idol Builders City — Amenities' : 'আইডল বিল্ডার্স সিটি — সুযোগ সুবিধা'}
          </h3>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.86rem', marginBottom: 32 }}>
            {t ? 'All amenities available for Idol Green City residents' : 'আইডল গ্রীন সিটি নাগরিকদের জন্য সকল সুযোগ সুবিধা'}
          </p>
          <div className="hex-grid">
            {amenities.map((a, i) => <div key={i} className="hex-item">{a}</div>)}
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: 28, lineHeight: 1.75 }}>
            {t
              ? 'Also includes: offices & commercial spaces, raw bazaar, mosque, temple, church, graveyard, food court, school, college, madrasa, water purification & waste management with full smart city amenities.'
              : 'এছাড়াও রয়েছে অফিস, কাঁচা বাজার, মসজিদ, মন্দির, গির্জা, ফুড কোর্ট, স্কুল, কলেজ, মাদ্রাসা সহ স্মার্ট সিটির সকল সুবিধা।'}
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 0, background: 'white', border: '1.5px solid var(--gray)', borderRadius: '12px 12px 0 0', overflow: 'hidden' }}>
          {[['5', t ? '5 Katha' : '৫ কাঠা'], ['7', t ? '7 Katha' : '৭ কাঠা'], ['3', t ? '3 Katha' : '৩ কাঠা']].map(([key, label]) => (
            <button key={key} onClick={() => setTab(key)} className="display" style={{
              padding: '16px 32px',
              background: tab === key ? 'var(--blue)' : 'transparent',
              color: tab === key ? 'white' : 'var(--text-muted)',
              border: 'none',
              fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.25s',
              flex: 1,
            }}>
              {label}
            </button>
          ))}
        </div>

        <div style={{ overflowX: 'auto', border: '1.5px solid var(--gray)', borderTop: 'none', borderRadius: '0 0 12px 12px', background: 'white' }}>
          <table className="pricing-table" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
            <thead>
              <tr>{current.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {current.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className={ci === 1 ? 'highlight' : ''}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 36, textAlign: 'center' }}>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: 24 }}>
            {t
              ? '* All prices are per Katha in BDT. Special discount available for lump-sum payment. Remaining amount to be paid within 75 days. Installment plans available (36, 48, 60 months). All transactions to be made in favour of Idol Builders Ltd via cash/cheque/pay-order.'
              : '* সকল মূল্য কাঠা প্রতি বাংলাদেশি টাকায়। এককালীন মূল্য পরিশোধের ক্ষেত্রে বিশেষ ছাড় দেওয়া হবে। অবশিষ্ট টাকা ৭৫ দিনের মধ্যে পরিশোধ করতে হবে। কিস্তিতে প্লট ক্রয়ের ক্ষেত্রে প্লট মূলের অবশিষ্ট ৩৬, ৪৮, ৬০ তে মধ্যে পরিশোধ করতে পারবেন।'}
          </p>
          <button onClick={() => navClick('contact')} className="btn-primary">
            {t ? 'Request Full Price List' : 'সম্পূর্ণ মূল্য তালিকা'} <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

/* ─── FLOATING CHAT ─── */
const FloatingChat = ({ lang }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 999 }}>
      {hovered && (
        <div className="card-blue-glow" style={{ position: 'absolute', bottom: 68, right: 0, padding: '12px 20px', whiteSpace: 'nowrap', fontSize: '0.84rem', color: 'var(--navy)', borderRadius: 10, boxShadow: '0 8px 32px rgba(37,99,235,0.15)' }}>
          {lang === 'en' ? '💬 Chat with us!' : '💬 আমাদের সাথে চ্যাট করুন!'}
        </div>
      )}
      <button
        className="pulse-blue"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ width: 56, height: 56, background: 'linear-gradient(135deg, #2563EB, #3B82F6)', border: 'none', borderRadius: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 28px rgba(37,99,235,0.4)', transition: 'transform 0.2s' }}
        onMouseDown={e => e.currentTarget.style.transform = 'scale(0.94)'}
        onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}>
        <MessageCircle size={22} color="white" />
      </button>
    </div>
  );
};

/* ─── ROOT APP ─── */
export default function IdolBuildersApp() {
  const [lang, setLang] = useState('en');
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':    return <AboutPage lang={lang} />;
      case 'projects': return <ProjectsPage lang={lang} />;
      case 'services': return <ServicesPage lang={lang} />;
      case 'pricing':  return <PricingPage lang={lang} navClick={navClick} />;
      case 'gallery':  return <GalleryPage lang={lang} />;
      case 'contact':  return <ContactPage lang={lang} />;
      default:         return <HomePage lang={lang} navClick={navClick} />;
    }
  };

  return (
    <>
      <GlobalStyles />
      <div style={{ minHeight: '100vh', background: 'var(--white)' }}>
        <Nav lang={lang} setLang={setLang} currentPage={currentPage} navClick={navClick} isScrolled={isScrolled} />
        <main>{renderPage()}</main>
        <Footer lang={lang} navClick={navClick} />
        <FloatingChat lang={lang} />
      </div>
    </>
  );
}