"use client";

import ContactForm from "@/components/ContactForm/ContactForm";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="top">
        <div className="pages">
          <ul>
            <h2>About Us</h2>
            <p>
              Reach out using the email or phone number below. Or get in touch!
            </p>
            <li>
              <a href="#">Meet Our Team</a>
            </li>
            <li>
              <a href="#">Our Responsibilities</a>
            </li>
            <li>
              <a href="#">Our Codes</a>
            </li>
            <li>
              <a href="#">Our Values</a>
            </li>
          </ul>

          <ContactForm />
        </div>
      </div>
      <div className="info">
        <div className="copyright"> &copy; 2024 {"Daren's"} Detailed LLC</div>
      </div>
    </footer>
  );
}

export default Footer;
