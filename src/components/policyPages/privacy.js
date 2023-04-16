import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

export default function privacy() {
  return (
    <div>
      <Navbar />
      <div className="container mt-3 mb-5">
        <h1>Website Privacy Policy</h1>
        <p>
          We respect your privacy and are committed to protecting your personal
          data. This privacy policy will inform you of how we collect, use, and
          protect your personal information when you use our website.
        </p>
        <h2>What Information We Collect</h2>
        <p>
          We may collect personal information from you such as your name, email
          address, and any other information you provide to us when you use our
          website.
        </p>
        <h2>How We Use Your Information</h2>
        <p>We may use your personal information to:</p>
        <ul>
          <li>
            Provide you with information or services that you have requested.
          </li>
          <li>Improve our website and the services we offer.</li>
          <li>
            Communicate with you about our products, services, and promotions.
          </li>
          <li>Protect against fraudulent or illegal activity.</li>
        </ul>
        <h2>How We Protect Your Information</h2>
        <p>
          We take appropriate measures to ensure that your personal information
          is kept secure and protected against unauthorized access or
          disclosure. However, no method of transmission over the internet or
          electronic storage is completely secure, and we cannot guarantee
          absolute security.
        </p>
        <h2>Sharing Your Information</h2>
        <p>
          We may share your personal information with third-party service
          providers who help us to operate our website or provide services to
          you. We will only share your information with these third-party
          service providers to the extent necessary for them to provide their
          services.
        </p>
        <h2>Cookies</h2>
        <p>
          Our website may use cookies to enhance your experience and provide you
          with personalized content. You can choose to disable cookies in your
          browser settings if you prefer not to have them.
        </p>
        <h2>Links to Other Websites</h2>
        <p>
          Our website may contain links to other websites that are not operated
          by us. We have no control over these third-party websites and are not
          responsible for their content or privacy practices. We encourage you
          to review the privacy policies of any third-party websites you visit.
        </p>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to update this privacy policy at any time without
          prior notice. Your continued use of our website after any such changes
          indicates your acceptance of the updated policy.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this privacy policy,
          please contact us at{" "}
          <a href="mailto:contactanimetv24@gmail.com ">Email</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
