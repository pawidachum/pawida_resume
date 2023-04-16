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
              className="flex flex-col w-[347px] h-[280px] rounded-xl bg-white shadow-[0px_5px_26px_5px_rgba(0,0,0,0.17)] items-center tracking-wider gap-3 p-6 relative"
            >
              <div className="text-[#f39422] text-2xl font-semibold z-10 p-3">
                {data.project_name}
              </div>
              <img
                src="src/assets/decorate/circle.png"
                alt="circle"
                className="absolute right-32 bg-[#537ec5] rounded-full"
              />
              <img
                src={data.image}
                alt={data.alt}
                className="w-[289px] h-[164px] rounded-lg bg-white z-10 relative inset-3 shadow-[0px_1px_7px_2px_rgba(0,0,0,0.25)]"
              />
            </div>
          </>
        );
      })}
    </>
  );
}
export default CategoryPortfolio;
