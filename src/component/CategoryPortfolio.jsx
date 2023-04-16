import React from "react";
import { useNavigate } from "react-router-dom";
import { portfolio } from "../data/portfolio.js";

function CategoryPortfolio() {
  // const navigate = useNavigate();
  // const myPortfolio = ["Resume", "Mini Project", "Course Flow"]

  // const handleClick=()=>{

  // }
  return (
    <>
      {portfolio.map((data, index) => {
        return (
          <>
            <div
              key={index}
              className="flex flex-col w-[447px] h-[380px] rounded-xl bg-white shadow-[0px_5px_26px_5px_rgba(0,0,0,0.17)] tracking-wider p-6 relative"
            >
              <div className="text-[#6C63FF] text-3xl font-semibold z-10 pt-3 ml-4 text-center">
                {data.project_name}
              </div>
              <img
                src="src/assets/decorate/circle.png"
                alt="circle"
                className="absolute left-12 w-[220px] h-[220px] rounded-full "
              />
              <img
                src={data.image}
                alt={data.alt}
                className="w-[85%] h-[50%] rounded-lg bg-white z-10 relative inset-14 shadow-[0px_1px_7px_2px_rgba(0,0,0,0.25)]"
              />
            </div>
          </>
        );
      })}
    </>
  );
}
export default CategoryPortfolio;
