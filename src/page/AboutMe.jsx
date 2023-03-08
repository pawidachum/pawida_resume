import profilePic from "../image/pawida1.png"

function AboutMe (){
    return (
       
        <div className="aboutme">
           <div className="content-aboutme">
            <p>Hello!</p>
            <h1>I'm Pawida Chumpurat.<br/>a Front-End Developer</h1>
            <p>I'm looking for a programer job. I think I'm interested and want to try it. I've taken a course in Code Camp Thailand and TechUp Boot Camp, that's the starting point for me to try to switch to this field. I think I can.<br/>I'm hardworkin and passionate job seeker with strong organizational skills eager to secure entry-level programmer position. Ready to help team achieve company goals. </p>
           </div>
           <div className="picture-aboutme">
            <img className="pawida-pic" src={profilePic} alt="pawida"/>
           </div>
        </div>
    )
};
export default AboutMe;