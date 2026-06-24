import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>DevConnect</h2>
          <p>
            Connect with talented developers, explore projects,
            and grow your professional network.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">Developers</a>
          <a href="#">Projects</a>
          <a href="#">Community</a>
        </div>

        <div className="footer-links">
          <h3>Resources</h3>
          <a href="#">Documentation</a>
          <a href="#">Blog</a>
          <a href="#">Support</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 DevConnect. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;