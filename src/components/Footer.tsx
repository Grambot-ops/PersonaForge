import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Maximus</h3>
            <p className="text-gray-600">Cloud & Cybersecurity Student</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-[var(--primary-color)]"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-600 hover:text-[var(--primary-color)]"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-[var(--primary-color)]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Grambot-ops"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[var(--primary-color)] transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <span aria-hidden="true" className="block w-6 h-6">
                  {FaGithub({ size: 24 })}
                </span>
              </a>
              <a
                href="https://linkedin.com/in/maximus-mukiza-1523a5297" // Updated with link from CV
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[var(--primary-color)] transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <span aria-hidden="true" className="block w-6 h-6">
                  {FaLinkedin({ size: 24 })}
                </span>
              </a>
              {/* Removed Twitter link and icon */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Maximus Mukiza. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
