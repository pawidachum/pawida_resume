import NavBar from "../component/NavBar";
import profilePic from "../assets/profile/may.svg"

function AboutMe (){
    return (
       <div>
            <NavBar/>
        <div className="aboutme">
           <div className="picture-aboutme">
            <img className="rounded-e-full h-[120px] w-[120px] bg-blue-500" src={profilePic} alt="pawida"/>
           </div>
           <div className="content-aboutme">
            <p>Hello!</p>
            <h1>I'm Pawida Chumpurat.<br/>a Front-End Developer</h1>
            <p>I'm looking for a programer job. I think I'm interested and want to try it. I've taken a course in Code Camp Thailand and TechUp Boot Camp, that's the starting point for me to try to switch to this field. I think I can.<br/>I'm hardworkin and passionate job seeker with strong organizational skills eager to secure entry-level programmer position. Ready to help team achieve company goals. </p>
           </div>
        </div>
       </div>
    )
};
export default AboutMe;