import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="para">
          <p>© 2024 Ngo Anh Kiet - All Rights Reserved.</p>
        </div>
        <div className="icon">
          {/* Link đến Facebook */}
          <a
            href="https://www.facebook.com/kiet275"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          {/* Link đến Instagram */}
          <a
            href="https://www.instagram.com/anhkiet_275/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          {/* Link đến Twitter */}
          <a
            href="https://www.twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          {/* Link đến YouTube */}
          <a
            href="https://www.youtube.com/@ngoanhkiet6601"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
