import githubLogo from "../assets/contact/github-icon.svg";
import linkedInLogo from "../assets/contact/linkedin-circle-logo-16618.svg";
import emailLogo from "../assets/contact/email.svg";
import phoneLogo from "../assets/contact/blue-phone.svg";
import NavBar from "../component/NavBar";

function ContactMe() {
  return (
    <div className="App">
      <NavBar />
      <div className="container-work">
        <h2>
          Contact <strong>Me</strong>
        </h2>
        <div className="contact-logo">
          <a href="https://github.com/pawidachum">
            <img src={githubLogo} />
            <h5>Git Hub</h5>
          </a>

          <a href="https://www.linkedin.com/in/pawida-chumpurat-09aa3585/">
            <img src={linkedInLogo} />
            <h5>LinkedIn</h5>
          </a>

          <a href="mailto: pawida.may@gmail.com">
            <img src={emailLogo} />
            <h5>Email</h5>
          </a>
          <a href="tel: +0635455516">
            <img src={phoneLogo} />
            <h5>Phone</h5>
          </a>
        </div>
      </div>
    </div>
  );
}
export default ContactMe;
