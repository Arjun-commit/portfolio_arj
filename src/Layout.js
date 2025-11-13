import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <style>{`
        :root {
          --primary: #0066CC;
          --primary-dark: #004C99;
          --secondary: #00A3E0;
          --accent: #FF6B35;
          --bg-light: #FAFAF9;
          --bg-white: #FFFFFF;
          --text-dark: #1A1A1A;
          --text-gray: #6B7280;
          --border: #E5E7EB;
        }

        .dark {
          --bg-light: #111827;
          --bg-white: #1F2937;
          --text-dark: #F9FAFB;
          --text-gray: #D1D5DB;
          --border: #374151;
        }

        * {
          scroll-behavior: smooth;
        }

        body {
          background: var(--bg-light);
          color: var(--text-dark);
          transition: background 0.3s, color 0.3s;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                AK
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
              <a 
                href="https://drive.google.com/file/d/1TFwy_XwzuNcboJRNM0SlUcnrTmiF5HMV/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Resume
              </a>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-2">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2">Contact</button>
              <a 
                href="https://drive.google.com/file/d/1TFwy_XwzuNcboJRNM0SlUcnrTmiF5HMV/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg text-center"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="min-h-screen">
        {children}
      </main>

      <style jsx>{`
        .nav-link {
          position: relative;
          padding: 0.5rem 0;
          color: var(--text-dark);
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #0066CC, #00A3E0);
          transition: width 0.3s;
        }

        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </div>
  );
}