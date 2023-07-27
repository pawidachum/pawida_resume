import Footer from "../component/Footer";
import blueDotBG from "/assets/decorate/Background.png";
import NavBar from "../component/NavBar";
import profilePic from "/assets/profile/may.svg";
import CategoryPortfolio from "../component/CategoryPortfolio";
import CategoryAddiPassions from "../component/CategoryAddiPassions";
import githubLogo from "/assets/contact/github.svg";
import linkedInLogo from "/assets/contact/linkedin-circle-logo-16618.svg";
import emailLogo from "/assets/contact/email.svg";
import phoneLogo from "/assets/contact/blue-phone.svg";

function Profile() {
  return (
    <div>
      <div
        className="App"
        style={{
          backgroundImage: `url(${blueDotBG})`,
          backgroundSize: "72.3%",
        }}
      >
        <NavBar />
        {/* about me */}
        <div className="flex justify-between tracking-wider mb-40">
          <div className="w-3/5">
            <p className="text-[#002265] text-4xl leading-snug">Hello!</p>
            <h1 className="whitespace-pre-wrap text-[#002265] font-semibold text-5xl leading-snug mb-8">
              I'm Pawida Chumpurat. <br/>a Full Stack Developer
            </h1>
            <p className="text-[#082032] text-2xl">
              I'm looking for a programer job. I think I'm interested and want
              to try it. I've taken a course in TechUp Boot Camp, that's the
              starting point for me to try to switch to this field. I think I
              can.
              <br />
              I'm hardworking and passionate job seeker with strong
              organizational skills eager to secure entry-level programmer
              position. Ready to help team achieve company goals.
            </p>
          </div>
          <img className="w-[30%] rounded-full" src={profilePic} alt="pawida" />
        </div>
        {/* passion */}
        <div className="flex flex-col gap-14 text-center mb-40">
          <h2 className="text-4xl tracking-widest text-[#14279B]">
            Additional
            <span className="font-semibold text-[#002265]"> Passion</span>
          </h2>
          <div className="flex gap-10 justify-between">
            <CategoryAddiPassions />
          </div>
        </div>
        {/* portfolio */}
        <div className="flex-col flex gap-14 text-center mb-40 cursor-pointer">
          <h2 className="text-4xl tracking-widest text-[#14279B]">
            My <span className="font-semibold text-[#002265]"> Portfolio</span>
          </h2>
          <div className="flex gap-10 relative justify-between">
            <CategoryPortfolio />
          </div>
        </div>
        {/* contact me */}
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
        <Footer />
    </div>
  );
}
export default Profile;
