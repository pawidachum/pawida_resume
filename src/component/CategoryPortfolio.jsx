import React from "react";

function CategoryPortfolio(props){
    const myPortfolio = ["React Shopping", "Angular Project", "Turtoise Project"]
    return(
        <>
        {myPortfolio.map((portfolio, index)=>{
            return(
                <>
                <div key={index} className="work-experience">
                    <div><strong>{portfolio}</strong></div>
                    <div>image</div>
                </div>
                    </>
                )
            })}
        </>
    )
}
export default CategoryPortfolio;
