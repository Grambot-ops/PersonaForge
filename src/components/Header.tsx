import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "[01] Home", hash: "#services" },
    { path: "/about", label: "[02] About", hash: "#about" },
    { path: "/projects", label: "[03] Projects", hash: "#projects" },
    { path: "/contact", label: "[04] Contact", hash: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-primary/20 bg-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="w-8 h-8 bg-primary/10 border border-primary text-primary rounded-sm flex items-center justify-center font-bold font-mono text-sm group-hover:bg-primary group-hover:text-black transition-all">
              &gt;_
            </div>
            <span className="font-mono font-bold text-lg tracking-tight text-white group-hover:text-primary transition-colors">
              MAXIMUS.SH
              <span className="animate-cursor-blink text-primary">_</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-mono font-medium tracking-widest uppercase">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.hash}
                className={`transition-colors ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-slate-400 hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="hidden sm:block bg-primary/10 border border-primary text-primary px-4 py-2 rounded-sm font-bold text-xs hover:bg-primary hover:text-black transition-all font-mono uppercase tracking-wider"
            >
              ./exec_contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
