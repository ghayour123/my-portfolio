import { Link } from "react-scroll";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useMotion } from "../lib/motion";

const quickLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Journey", to: "journey" },
  { name: "Services", to: "services" },
  { name: "Contact", to: "contact" },
  { name: "FAQ", to: "faq" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/ghayour123", icon: <FaGithub /> },
  { name: "LinkedIn", href: "https://linkedin.com/in/ghayour-mehdi", icon: <FaLinkedin /> },
  { name: "Facebook", href: "https://www.facebook.com/ghayour.khan.5817", icon: <FaFacebook /> },
  { name: "YouTube", href: "https://youtube.com/@ghayour123", icon: <FaYoutube /> },
  { name: "Twitter", href: "https://twitter.com/ghayour123", icon: <FaTwitter /> },
  { name: "Instagram", href: "https://instagram.com/ghayour_baloch", icon: <FaInstagram /> },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { duration } = useMotion();

  return (
    <footer id="footer" className="border-t border-line bg-ink">
      <div className="shell py-16 lg:py-20">
        <div className="border-b border-line pb-10">
          <Link
            to="home"
            href="#home"
            smooth
            duration={duration}
            className="inline-block font-display text-[clamp(3.5rem,12vw,8rem)] font-medium leading-[0.84] tracking-[-0.04em] text-paper"
          >
            Ghayour
            <span className="block italic">Khan</span>
          </Link>
          <p className="mt-6 max-w-md leading-relaxed text-fog">
            Full-Stack Developer crafting modern, efficient digital products across frontend,
            backend, databases, APIs, and real-time applications.
          </p>
        </div>

        <div className="grid gap-12 py-12 md:grid-cols-3">
          <div>
            <p className="kicker">Navigation</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    href={`#${link.to}`}
                    smooth
                    duration={duration}
                    offset={link.to === "home" ? 0 : -72}
                    className="text-sm text-fog transition-colors duration-300 hover:text-paper"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-fog">
              <li>
                <a
                  href="mailto:ghayourbaloch12@gmail.com"
                  className="break-all transition-colors duration-300 hover:text-paper sm:break-normal"
                >
                  ghayourbaloch12@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923057147879" className="transition-colors duration-300 hover:text-paper">
                  +92 3057147879
                </a>
              </li>
              <li>Rawalpindi, Pakistan</li>
            </ul>
          </div>

          <div>
            <p className="kicker">Connect</p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="icon-btn flex h-11 w-11 items-center justify-center border border-line text-mist transition-colors duration-300 hover:border-gold hover:text-gold"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-3 py-6 text-sm text-fog md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Ghayour Khan. All rights reserved.</p>
          <Link
            to="home"
            href="#home"
            smooth
            duration={duration}
            className="meta-label transition-colors duration-300 hover:text-gold"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
