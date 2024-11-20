"use client";

import ContactForm from "@/components/ContactForm/ContactForm";
import "./Footer.css";

function Footer() {
  return (
    <section id="contact">
      <footer>
        <div className="top">
          <div className="pages">
            <ul>
              <h2>About Us</h2>
              <p>
                Reach out using the email or phone number below. Or get in
                touch!
              </p>
              <li>
                <a href="mailto:darensdetailed@gmail.com">
                  darensdetailed@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:203-571-7860">203-571-7860</a>
              </li>
            </ul>

            <ContactForm />
          </div>
        </div>
        <div className="info">
          <div className="copyright"> &copy; 2024 {"Daren's"} Detailed LLC</div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
