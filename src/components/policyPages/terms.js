import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
export default function terms() {
  return (
    <div>
      <Navbar />
      <div className="container mt-3 mb-5">
        <h1>Website Terms of Use</h1>
        <p>
          Welcome to <strong>AnimeTV24</strong>! By accessing or using our
          website, you agree to be bound by these terms of use, which govern
          your use of the website. If you do not agree to these terms, please do
          not use our website.
        </p>
        <h2>Intellectual Property</h2>
        <p>
          The content on our website, including but not limited to text,
          graphics, logos, images, and software, is the property of{" "}
          <strong>AnimeTV24</strong> and is protected by copyright and other
          intellectual property laws. You may not reproduce, distribute, modify,
          or otherwise use any of our content without our prior written
          permission.
        </p>
        <h2>User Conduct</h2>
        <p>
          You may use our website for lawful purposes only. You may not use our
          website to:
        </p>
        <ul>
          <li>
            Post or transmit any content that is unlawful, harmful, threatening,
            abusive, harassing, defamatory, vulgar, obscene, or otherwise
            objectionable.
          </li>
          <li>
            Impersonate any person or entity, or falsely state or otherwise
            misrepresent your affiliation with a person or entity.
          </li>
          <li>Collect or store personal information about other users.</li>
          <li>
            Use any automated means to access our website or collect any
            information from our website.
          </li>
        </ul>
        <h2>Disclaimer of Warranties</h2>
        <p>
          Our website is provided on an "as is" and "as available" basis,
          without any warranties of any kind, express or implied. We do not
          warrant that our website will be uninterrupted or error-free, or that
          any defects will be corrected. We also do not warrant that our website
          is free of viruses or other harmful components.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          In no event shall <strong>AnimeTV24</strong> be liable for any direct,
          indirect, incidental, special, or consequential damages arising out of
          or in connection with your use of our website. This includes, but is
          not limited to, damages for loss of profits, data, or other intangible
          losses.
        </p>
        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless <strong>AnimeTV24</strong>{" "}
          and its affiliates, officers, directors, employees, and agents from
          any claims, damages, liabilities, and expenses (including reasonable
          attorneys' fees) arising out of your use of our website, your
          violation of these terms of use, or your violation of any rights of
          another.
        </p>
        <h2>Changes to These Terms</h2>
        <p>
          We may update these terms of use at any time without prior notice.
          Your continued use of our website after any such changes indicates
          your acceptance of the updated terms.
        </p>
        <h2>Governing Law</h2>
        <p>
          These terms of use are governed by and construed in accordance with
          the laws of (IN), without giving effect to any principles of conflicts
          of law.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about these terms of use, please
          contact us at <a href="mailto:contactanimetv24@gmail.com ">Email</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
