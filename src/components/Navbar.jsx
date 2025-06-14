import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo + Title */}
        <div className="navbar-left">
          <img src="/images/Vector.png" alt="ProVital Logo" className="navbar-logo" />
          <span className="navbar-title">ProVital</span>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Links */}
        <ul className="nav-links desktop">
          <li>List your practice</li>
          <li>For Employers</li>
          <li>Courses</li>
          <li>Books</li>
          <li>Speakers</li>
          <li>Doctors</li>
          <li className="login-signup">
            <button
              className="login-signup-toggle"
              onClick={() => setShowDropdown((prev) => !prev)}
              aria-expanded={showDropdown}
              type="button"
            >
              Login / Signup
              <span className={`chevron-arrow ${showDropdown ? 'open' : ''}`}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="#666"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            {showDropdown && (
              <div className="dropdown">
                <div className="dropdown-item">
                  <strong>Doctor</strong>
                  <span className="dropdown-links">
                    <a href="#">Login</a>
                    <span className="divider">|</span>
                    <a href="#">Sign up</a>
                  </span>
                </div>
                <div className="dropdown-item">
                  <strong>Patients</strong>
                  <span className="dropdown-links">
                    <a href="#">Login</a>
                    <span className="divider">|</span>
                    <a href="#">Sign up</a>
                  </span>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-login-box">
            <div className="dropdown-item">
              <strong>Doctor</strong>
              <span className="dropdown-links">
                <a href="#">Login</a>
                <span className="divider">|</span>
                <a href="#">Sign up</a>
              </span>
            </div>
            <div className="dropdown-item">
              <strong>Patients</strong>
              <span className="dropdown-links">
                <a href="#">Login</a>
                <span className="divider">|</span>
                <a href="#">Sign up</a>
              </span>
            </div>
          </div>
          <ul className="mobile-links">
            <li>Doctors</li>
            <li>List your practice</li>
            <li>For Employers</li>
            <li>Courses</li>
            <li>Books</li>
            <li>Speakers</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
