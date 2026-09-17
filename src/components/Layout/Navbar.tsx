import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { CloseOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png";
import { siteInfo } from "../../data/site";

const navLinks = [
  { name: "الرئيسية", path: "/" },
  { name: "المدونة", path: "/blog" },
  { name: "من نحن", path: "/about" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-xl transition-all duration-500 ${
        isScrolled ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-105">
              <img
                src={logo}
                alt="Photography Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="bg-linear-to-r from-white to-neutral-300 bg-clip-text text-xl font-bold text-transparent">
                {siteInfo.name}
              </span>
              <span className="hidden text-xs tracking-wide text-primary-light/80 sm:block">
                {siteInfo.tagline}
              </span>
            </div>
          </Link>

          <div className="hidden items-center md:flex">
            <div className="flex items-center rounded-full border border-border bg-dark-card p-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-linear-to-r from-primary to-primary-dark text-white"
                        : "text-neutral-400 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="بحث"
              className="rounded-xl border border-transparent p-3 text-neutral-500 transition-all duration-300 hover:border-border hover:bg-dark-card hover:text-primary"
            >
              <SearchOutlined className="flex text-xl" />
            </button>
            <Link to="/blog" className="btn-primary text-sm">
              ابدأ القراءة
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="rounded-xl border border-transparent p-3 text-neutral-400 transition-all duration-300 hover:border-border hover:bg-dark-card hover:text-white md:hidden"
          >
            {isOpen ? (
              <CloseOutlined className="flex text-2xl" />
            ) : (
              <MenuOutlined className="flex text-2xl" />
            )}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-80 pb-6" : "max-h-0"
          }`}
        >
          <div className="rounded-2xl border border-border bg-dark-card p-4 backdrop-blur-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "border border-primary/30 bg-primary/10 text-primary"
                        : "text-neutral-400 hover:bg-dark-tertiary hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-2 text-center text-sm"
              >
                ابدأ القراءة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
