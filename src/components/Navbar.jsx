import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  const links = [
    ["Home", "/"],
    ["Rooms", "/rooms"],
    ["Booking", "/booking"],
    ["Dashboard", "/dashboard"],
    ["Guests", "/guests"],
    ["Payments", "/payments"],
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-yellow-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-bold gradient">
          Aurelian Stay
        </Link>

        <div className="hidden lg:flex gap-8">
          {links.map(([name, path]) => (
            <Link
              key={name}
              to={path}
              className="hover:text-yellow-400 transition"
            >
              {name}
            </Link>
          ))}
        </div>

        <button
          className="lg:hidden text-yellow-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl"
          >
            {links.map(([name, path]) => (
              <Link
                key={name}
                to={path}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 border-b border-yellow-500/10 hover:bg-yellow-500/10"
              >
                {name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}