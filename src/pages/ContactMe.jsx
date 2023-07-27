import githubLogo from "/assets/contact/github.svg";
import linkedInLogo from "/assets/contact/linkedin-circle-logo-16618.svg";
import emailLogo from "/assets/contact/email.svg";
import phoneLogo from "/assets/contact/blue-phone.svg";
import NavBar from "../component/NavBar";

function ContactMe() {
  return (
    <div className="App">
      <NavBar />
      <div className="text-center">
          <h2 className="text-4xl tracking-widest text-[#14279B]  mb-[56px]">
            Contact <span className="font-semibold text-[#002265]">Me</span>
          </h2>
          <div className="flex gap-40 justify-between">
            <a href="https://github.com/pawidachum" className="flex flex-col items-center gap-4">
              <img src={githubLogo} alt="github logo"/>
              <h5 className="text-2xl hover:font-medium hover:text-[#608AF5]">Git Hub</h5>
            </a>

            <a href="https://www.linkedin.com/in/pawida-chumpurat-09aa3585/" className="flex flex-col items-center gap-4">
              <img src={linkedInLogo} alt="linkedIn logo"/>
              <h5 className="text-2xl hover:font-medium hover:text-[#608AF5]">LinkedIn</h5>
            </a>

            <a href="mailto: pawida.may@gmail.com" className="flex flex-col items-center gap-4">
              <img src={emailLogo} alt="email logo"/>
              <h5 className="text-2xl hover:font-medium hover:text-[#608AF5]">Email</h5>
            </a>

            <a href="tel: +0635455516" className="flex flex-col items-center gap-4">
              <img src={phoneLogo} alt="phone logo"/>
              <h5 className="text-2xl hover:font-medium hover:text-[#608AF5]">Phone</h5>
            </a>
          </div>
        </div>
    </div>
  );
}
export default ContactMe;
