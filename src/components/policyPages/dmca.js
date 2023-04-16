import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
export default function dmca() {
  return (
    <>
      <Navbar />

      <div className="container mt-3 mb-5">
        <h1>DMCA Takedown Notice</h1>
        <p>
          If you believe that your copyrighted material has been used on our
          website without permission, please follow the instructions below to
          submit a DMCA takedown notice.
        </p>
        <h2>Contact Information</h2>
        <ul>
          <li>Name: AnimeTV24.com</li>
          <li>
            Email: <a href="mailto:contactanimetv24@gmail.com ">Email</a>
          </li>
          <li>Address: IN</li>
        </ul>
        <h2>DMCA Takedown Notice</h2>
        <p>
          Please submit a DMCA takedown notice in writing to the following
          address:
        </p>
        <p>
          {" "}
          <a href="mailto:contactanimetv24@gmail.com ">Email</a>
        </p>
        <p>The notice should include the following information:</p>
        <ul>
          <li>
            A physical or electronic signature of the copyright owner or their
            authorized representative;
          </li>
          <li>
            Identification of the copyrighted work(s) that you claim have been
            infringed;
          </li>
          <li>
            Identification of the material that you claim is infringing and that
            you want removed, including a description of where it is located on
            our website;
          </li>
          <li>
            Your contact information, including your name, address, telephone
            number, and email address;
          </li>
          <li>
            A statement that you have a good faith belief that the use of the
            material in the manner complained of is not authorized by the
            copyright owner, its agent, or the law;
          </li>
          <li>
            A statement that the information in the notification is accurate,
            and under penalty of perjury, that you are authorized to act on
            behalf of the owner of an exclusive right that is allegedly
            infringed.
          </li>
        </ul>
        <p>
          Once we receive a valid DMCA takedown notice, we will remove the
          infringing material as soon as possible.
        </p>
        <h2>Counter-Notification</h2>
        <p>
          If you believe that the material was removed in error, you may submit
          a counter-notification in writing to the same address as above. The
          counter-notification should include the following:
        </p>
        <ul>
          <li>Your physical or electronic signature;</li>
          <li>
            Identification of the material that has been removed and the
            location where it appeared before it was removed;
          </li>
          <li>
            A statement under penalty of perjury that you have a good faith
            belief that the material was removed or disabled as a result of
            mistake or misidentification of the material; and
          </li>
          <li>
            Your name, address, telephone number, and email address, and a
            statement that you consent to the jurisdiction of the Federal
            District Court for the judicial district in which you are located.
          </li>
        </ul>
        <p>
          If we receive a valid counter-notification, we will forward it to the
          copyright owner and restore the material within 10 to 14 business days
          unless the copyright owner files an action seeking a court order
          against the material.
        </p>
        <h2>Legal Disclaimer</h2>
        <p>
          We do not host any infringing material on our website. All content is
          uploaded by our users, and we make every effort to remove infringing
          material promptly upon receipt of a valid DMCA takedown notice.
        </p>
        <p>
          However, we do not control the content posted by our users, and we
          cannot guarantee that any content will not infringe on the rights of
          third parties. If you believe that any content on our website
          infringes on your copyright, please follow the instructions above to
          submit a DMCA takedown notice.
        </p>
      </div>
      <Footer />
    </>
  );
}
