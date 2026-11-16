import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { useMotion } from "../lib/motion";

const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Work", to: "projects" },
  { label: "Journey", to: "journey" },
  { label: "Services", to: "services" },
  { label: "FAQ", to: "faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);
  const wasOpen = useRef(false);
  const { reduce, duration } = useMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (wasOpen.current && !open) {
      const button = menuButtonRef.current;
      if (button?.getClientRects().length) button.focus({ preventScroll: true });
    }
    wasOpen.current = open;
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const nav = navRef.current;
    if (!nav) return undefined;

    const visible = () =>
      [...nav.querySelectorAll("a[href], button:not([disabled])")].filter(
        (el) => el.getClientRects().length > 0
      );

    nav.querySelector("[data-menu-link]")?.focus({ preventScroll: true });

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const items = visible();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      className={`fixed inset-x-0 top-0 z-50 h-[4.5rem] ${scrolled || open ? "nav-solid" : ""}`}
    >
      <div className="shell flex h-full items-center justify-between gap-4">
        <Link
          to="home"
          href="#home"
          smooth
          duration={duration}
          className="shrink-0 whitespace-nowrap font-display text-[1.35rem] leading-none tracking-[-0.02em] text-paper min-[380px]:text-[1.55rem] sm:text-[1.7rem]"
        >
          Ghayour Khan
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                href={`#${link.to}`}
                spy
                smooth
                duration={duration}
                offset={-72}
                activeClass="is-active"
                className="nav-link"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="contact"
            href="#contact"
            smooth
            duration={duration}
            offset={-72}
            className="btn-nav hidden lg:inline-flex"
          >
            Contact
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="flex h-11 w-11 items-center justify-center text-paper lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto overscroll-contain bg-ink lg:hidden"
            onClick={(event) => {
              if (event.target === event.currentTarget) close();
            }}
          >
            <ul className="shell flex flex-col pt-4">
              {navLinks.map((link, index) => (
                <li key={link.to} className="border-b border-line">
                  <Link
                    to={link.to}
                    href={`#${link.to}`}
                    smooth
                    duration={duration}
                    offset={-72}
                    data-menu-link={index === 0 ? true : undefined}
                    onClick={close}
                    className="block py-4 font-display text-[clamp(2.2rem,8vw,3.4rem)] leading-none text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="shell pb-10 pt-8">
              <Link
                to="contact"
                href="#contact"
                smooth
                duration={duration}
                offset={-72}
                onClick={close}
                className="btn btn-fill w-full"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
