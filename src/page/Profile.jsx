import Footer from '../component/Footer'
import blueDotBG from "../assets/decorate/Background.png"
import NavBar from '../component/NavBar'
import profilePic from '../assets/profile/pawida1.png'
import CategoryPortfolio from '../component/CategoryPortfolio'
import CategoryAddiPassions from '../component/CategoryAddiPassions'
import githubLogo from "../assets/contact/github-icon.svg";
import linkedInLogo from "../assets/contact/linkedin-circle-logo-16618.svg"
import emailLogo from "../assets/contact/email.svg"
import phoneLogo from "../assets/contact/blue-phone.svg"


function Profile(){
    return(
        <div >
         <div className="App" style={{backgroundImage:`url(${blueDotBG})` , backgroundSize: "72.3%" }}>
            <NavBar/>
            {/* about me */}
            <div id="about-me" className="content-aboutme">
            <p>Hello!</p>
            <h1 className='text-3xl font-bold underline'>I'm Pawida Chumpurat.<br/>a Front-End Developer</h1>
            <p>I'm looking for a programer job. I think I'm interested and want to try it. I've taken a course in Code Camp Thailand and TechUp Boot Camp, that's the starting point for me to try to switch to this field. I think I can.<br/>I'm hardworkin and passionate job seeker with strong organizational skills eager to secure entry-level programmer position. Ready to help team achieve company goals. </p>
           </div>
           <div className="picture-aboutme">
            <img className="pawida-pic" src={profilePic} alt="pawida"/>
           </div>
           {/* passion */}
           <h2>Additional <strong>Passion</strong></h2>
            <div className="container-detail">
                <CategoryAddiPassions/>
            </div>
            {/* portfolio */}
            <h2>My <strong>Portfolio</strong></h2>
            <div className="container-detail">
                <CategoryPortfolio/>
            </div>
        <div>
            {/* contact me */}
            <h2>Contact <strong>Me</strong></h2>
        <div className="contact-logo">
            <a href="https://github.com/pawidachum">
                <img src={githubLogo}/>
                <h5>Git Hub</h5>
            </a>
            
            <a href="https://www.linkedin.com/in/pawida-chumpurat-09aa3585/">
                <img src={linkedInLogo}/>
                <h5>LinkedIn</h5>
            </a>
            
            <a href="mailto: pawida.may@gmail.com">
                <img src={emailLogo}/>
                <h5>Email</h5>
            </a>
            <a href="tel: +0635455516">
                <img src={phoneLogo}/>
                <h5>Phone</h5>
            </a>
        </div>
        </div>
            <Footer/> 
        </div>
        </div>
    )
}
export default Profile;