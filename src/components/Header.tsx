import React from "react";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState("home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const navItems = [
    { id: "home", label: "[01] Home" },
    { id: "about", label: "[02] About" },
    { id: "projects", label: "[03] Projects" },
    { id: "contact", label: "[04] Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-primary/20 bg-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="w-8 h-8 bg-primary/10 border border-primary text-primary rounded-sm flex items-center justify-center font-bold font-mono text-sm group-hover:bg-primary group-hover:text-black transition-all">
              &gt;_
            </div>
            <span className="font-mono font-bold text-lg tracking-tight text-white group-hover:text-primary transition-colors">
              MAXIMUS.SH
              <span className="animate-cursor-blink text-primary">_</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-mono font-medium tracking-widest uppercase">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-slate-400 hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:block bg-primary/10 border border-primary text-primary px-4 py-2 rounded-sm font-bold text-xs hover:bg-primary hover:text-black transition-all font-mono uppercase tracking-wider"
            >
              ./exec_contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
