import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-description">
          A comprehensive list of all countries with details like population,
          region, and languages.
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/Sahoo-amit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="link-img"/>
          </a>
          <a
            href="https://www.linkedin.com/in/amit-sahoo-919a5a289?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIAJ6qMtnR8CP7wZVRKbvkw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="link-img"/>{" "}
          </a>
        </div>

        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>

        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Amit Sahoo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
