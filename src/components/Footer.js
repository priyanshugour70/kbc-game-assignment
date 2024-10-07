import React from "react";
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-200 text-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-700">
          &copy; KBC Game.{" "}
          <span className="font-semibold text-green-600">
            This project was completed as part of an assignment.
          </span>
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://www.linkedin.com/in/priyanshugour70"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl hover:text-blue-600 transition-transform transform hover:scale-110" />
          </a>
          <a
            href="https://priyanshugour.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
          >
            <span className="text-2xl hover:text-blue-600 transition-transform transform hover:scale-110">
              🌐
            </span>
          </a>
          <a
            href="https://github.com/priyanshugour70/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl hover:text-blue-600 transition-transform transform hover:scale-110" />
          </a>
          <a href="tel:+919098393937" aria-label="Phone">
            <FaPhone className="text-2xl hover:text-blue-600 transition-transform transform hover:scale-110" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
