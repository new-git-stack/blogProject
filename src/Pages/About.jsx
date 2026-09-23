

import React, { useState, useEffect } from 'react';
import domi from "../assets/dom.jpg";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import load from "../assets/load.gif"
import 'bootstrap-icons/font/bootstrap-icons.css';

function About() {
  return(
    <div className="container-fluid p-5 bg-dark text-white">
      <div className="container">
        <h1 className="text-center aboutH1 mb-4 fw-bold">About Us</h1>
        <p className="lead">
          Welcome to our blog! We are passionate about sharing insights, stories, and knowledge on various topics that matter to you. Our team of dedicated writers and contributors work tirelessly to bring you engaging and informative content.
        </p>
        <p>
          Whether you're looking for the latest news, lifestyle tips, or in-depth articles on specific subjects, we strive to provide a platform that caters to diverse interests. Our goal is to create a community where readers can connect, share ideas, and learn from one another.
        </p>
        <p>
          Thank you for visiting our blog. We hope you find our content valuable and inspiring!
        </p>
        <main className="page-content">
        <p>
          NEWS 24 is a digital-first news outlet delivering fast, factual reporting to readers across the globe.
          Founded in 2025 by a team of veteran journalists and tech innovators, our mission is to empower
          people with transparent, trustworthy information.
        </p>

        <h2>Our Mission</h2>
        <p>
          In a world crowded with misinformation, NEWS 24 prioritizes truth, speed, and accessibility.
          We strive to keep readers informed with clear, concise reporting backed by verifiable sources.
        </p>

        <h2>Our Team</h2>
        <p>
          Our newsroom is staffed with experienced editors, correspondents, and subject-matter experts who
          cover news across categories like politics, business, technology, science, and lifestyle.
        </p>

        <h2>Global Reach</h2>
        <p>
          With reporters and contributors in over 15 countries, NEWS 24 offers diverse perspectives and
          coverage from both local and international angles. Our commitment to balanced journalism means
          highlighting voices from all sides of a story.
        </p>

        <h2>Innovation in Journalism</h2>
        <p>
          We leverage cutting-edge technology including AI-assisted fact-checking and real-time updates to keep
          our readers ahead of the curve. We also engage audiences through newsletters, podcasts, and live coverage.
        </p>

        <h2>Join Us</h2>
        <p>
          Interested in contributing to NEWS 24 as a writer, editor, or developer? Reach out at <a href="home.jsx">careers@NEWS 24.com.</a>
        </p>


        <section>
        <h1 className="fw-bold text-center aboutH1 mt-5 mb-3">Privacy Policy</h1>
      <p>At <strong>News24</strong>, your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.</p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Non-personal data like browser type, device type, and general location.</li>
        <li>Personal data if you subscribe to newsletters or contact us directly (e.g., name, email).</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To improve your user experience.</li>
        <li>To send you relevant news updates (with your permission).</li>
        <li>To prevent fraud or abuse of our services.</li>
      </ul>

      <h2>Third-Party Services</h2>
      <p>We use tools like Google Analytics to understand our audience. These tools may collect anonymous data. We do not sell your information to third parties.</p>

      <h2>Cookies</h2>
      <p>We use cookies to personalize content and analyze traffic. You can disable cookies in your browser settings if you prefer.</p>

      <h2>Your Rights</h2>
      <p>You can request to access, modify, or delete your personal information at any time by contacting us.  You have the right to access, correct, or delete your personal data. You may also object to certain processing activities.
      Contact <a href="htttps://x.com/LEXE_EDESIGN?=cw8HWDQHN5DIS_t0FsdU8w&s=09">privacy@newsnow.com</a> to make a request.</p>


      <h2>Sharing of Information</h2>
        <p>
          We do not sell, rent, or share your personal information with third parties except as required
          by law or in the following cases:
        </p>
        <ul>
          <li>With service providers who assist in site operations.</li>
          <li>In response to legal requests or law enforcement investigations.</li>
          <li>To protect the rights and safety of NEWS 24 and its users.</li>
        </ul>

        <h2>5. Security</h2>
        <p>
          We implement industry-standard security practices including encryption and secure servers,
          but we cannot guarantee 100% security due to the nature of the internet.
        </p>

        <h2>6. Children’s Privacy</h2>
        <p>
          NEWS 24 is not intended for children under the age of 13. We do not knowingly collect
          personal information from children. If you believe we have, please contact us.
        </p>
      <p className="fw-lighter text-danger">By using News24, you agree to the terms outlined in this Privacy Policy.</p>
      </section>

      <section>
      <h1 className="fw-bold text-center aboutH1 mt-5 mb-3">Contact Us</h1>
        <p>
          We value your feedback, questions, and suggestions. Whether you're reporting an error,
          pitching a story, or just saying hello, here's how to reach us:
        </p>

        <h2>Email</h2>
        <p>
          General inquiries: <a href="mailto:contact@newsnow.com">contact@newsnow.com</a><br />
          Editorial: <a href="mailto:editorial@newsnow.com">editorial@newsnow.com</a><br />
          Advertising: <a href="mailto:ads@newsnow.com">ads@newsnow.com</a>
        </p>

        <h2>Phone</h2>
        <p>+1 (555) 123-4567 — available Monday to Friday, 9am to 5pm EST</p>

        <h2>Address</h2>
        <address>
          NEWS 24 Headquarters<br />
          123 Media Lane<br />
          New York, NY 10001<br />
          United States
        </address>

        <h2>Social Media</h2>
        <p>
          Follow and message us on:
          <br />
          Twitter: @NEWS 24<br />
          Facebook: fb.com/newsnow<br />
          Instagram: @newsnow_live
        </p>

        <h2>Feedback Form</h2>
        <p>
          You can also use the contact form on our homepage to submit tips, corrections, or press releases.
        </p>
      </section>

      <section>
      <h1 className="fw-bold text-center aboutH1 mt-5 mb-3">Terms and Conditions</h1>
        <p>Effective Date: July 7, 2025</p>

        <p>
          These terms govern your use of the NewsNow website, applications, and services. By accessing
          or using our platform, you agree to be bound by these terms. Please read them carefully.
        </p>

        <h2>1. Use of Content</h2>
        <p>
          All materials on NewsNow, including articles, images, videos, and graphics, are the
          property of NewsNow or its content suppliers. Unauthorized reproduction or distribution is strictly prohibited.
        </p>

        <h2>2. User Conduct</h2>
        <p>
          Users agree not to:
        </p>
        <ul>
          <li>Post defamatory, obscene, or misleading content.</li>
          <li>Impersonate any person or organization.</li>
          <li>Upload viruses or other harmful code.</li>
          <li>Violate any applicable laws or regulations.</li>
        </ul>

        <h2>3. Account Termination</h2>
        <p>
          NewsNow reserves the right to suspend or terminate user accounts or access at our discretion
          for violation of these terms or other harmful behavior.
        </p>

        <h2>4. Third-Party Links</h2>
        <p>
          Our platform may include links to third-party websites. We are not responsible for their content,
          privacy practices, or accuracy.
        </p>

        <h2>5. Disclaimers</h2>
        <p>
          All content is provided “as is” without warranties of any kind. We do not guarantee the accuracy,
          reliability, or completeness of any content or service.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          NewsNow shall not be liable for any indirect or consequential damages resulting from your use of the platform.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of the platform implies acceptance of the current version.
        </p>
      </section>

      </main>
      </div>
    </div>
  )
  
}

export default About;