import React from "react";
import { useNavigate } from "react-router-dom";


function CategoryPortfolio(){
    // const navigate = useNavigate();
    const myPortfolio = ["React Shopping", "Angular Project", "Turtoise Project"]

    // const handleClick=()=>{
        
    // }
    return(
        <>
        {myPortfolio.map((portfolio, index)=>{
            return(
                <>
                <div key={index} className="work-experience" >
                    <div><strong>{portfolio}</strong></div>
                    <div>project file</div>
                </div>
                    </>
                )
            })}
        </>
    )
}
export default CategoryPortfolio;
