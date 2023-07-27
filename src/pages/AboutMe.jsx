import NavBar from "../component/NavBar";
import profilePic from "/assets/profile/may.svg";
import { GiMaterialsScience } from "react-icons/gi";

function AboutMe() {
  return (
    <div className="App">
      <NavBar />
      <div className="flex gap-10">
        <div className="">
          <img
            className="rounded-e-full h-[260px] w-[220px] bg-blue-500 "
            src={profilePic}
            alt="pawida"
          />
        </div>
        <div className="w-3/5">
          <p className="text-[#002265] text-4xl leading-snug">Hello!</p>
          <h1 className="whitespace-pre-wrap text-[#002265] font-semibold text-5xl leading-snug mb-8">
            I'm Pawida Chumpurat. <br />a Full Stack Developer
          </h1>
          <p className="text-[#082032] text-2xl mb-8">
            I'm looking for a programer job. I think I'm interested and want to
            try it. I've taken a course in TechUp Boot Camp, that's the starting
            point for me to try to switch to this field. I think I can.
            <br />
            I'm hardworking and passionate job seeker with strong organizational
            skills eager to secure entry-level programmer position. Ready to
            help team achieve company goals.
          </p>
          <p className="text-[#002265] text-4xl leading-snug mb-3">
            Experience
          </p>
          <div className="text-[#082032] text-2xl mb-8">
            <ul className="list-disc">
              <li>Analyst of Microbiology Laboratory<span className="text-base">_at UAE Consultant Co., Ltd.</span></li>
              <li>Laboratory Technician<span className="text-base">_at Princess Chulabhorn Science High School</span></li>
              <li>Analyst of Microbiology Laboratory<span className="text-base">_at Grace Food.</span></li>
            </ul>
          </div>
          <p className="text-[#002265] text-4xl leading-snug mb-3">Education</p>
          <div className="text-[#082032] text-2xl leading-10">
            <h1>
              TechUp Bootcamp
              <span className="text-base"> Jan 2023- May 2023</span>
            </h1>
            <div className="text-base mb-3">Full Stack Software Developer</div>
            <h1>
              Mae Fah Luang University
              <span className="text-base"> 2005-2009</span>
            </h1>
            <div class="text-base">
              Bachelor of Science{" "}
              <GiMaterialsScience className="inline-block align-middle" />{" "}
              Microbiology
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
