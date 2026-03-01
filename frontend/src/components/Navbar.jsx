import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/zyntrix-logo.png";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  /* close menu on route change */
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  /* scroll shadow */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navLink =
    "relative hover:text-green-600 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-600 after:transition-all hover:after:w-full";

  const activeLink = "text-green-600 font-semibold";

  return (
    <header
      className={`sticky top-0 z-50 transition ${scrolled
          ? "bg-white/80 backdrop-blur shadow-md"
          : "bg-white/60 backdrop-blur"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center">
          <span
            className="
      text-[30px] font-extrabold tracking-wide
      bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300
      bg-clip-text text-transparent
      drop-shadow-[0_4px_12px_rgba(0,255,255,0.4)]
      hover:scale-105 transition duration-300
    "
          >
            Zyntrix
          </span>
        </NavLink>
        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? activeLink : navLink}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeLink : navLink}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? activeLink : navLink}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeLink : navLink}>Contact</NavLink>
        </nav>

        {/* HAMBURGER */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-gray-800 block mb-1"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-[2px] bg-gray-800 block mb-1"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-gray-800 block"
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* DRAWER */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 w-72 h-screen bg-white shadow-xl z-50 md:hidden flex flex-col"
            >
              {/* CLOSE BUTTON */}
              <div className="flex justify-end p-6">
                <button
                  onClick={closeMenu}
                  className="text-3xl leading-none"
                >
                  ✕
                </button>
              </div>

              {/* LINKS */}
              <nav className="flex flex-col gap-6 px-8 text-lg font-medium text-gray-800">
                <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                <NavLink to="/about" onClick={closeMenu}>About</NavLink>
                <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
                <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}