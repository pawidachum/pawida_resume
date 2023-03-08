import React from "react";

function CategoryPortfolio(props){
    const additionalPassion = ["Front-End", "Back-End", "UI/UX"]
    return(
        <div className="work-experience">
            {additionalPassion.map((passion, index)=>{
                return(
                    <>
                    <div key={index}>image</div>
                    <div><strong>{passion}</strong>Developer</div>
                    <p>(Bootstrap, Tailwind)</p>
                    </>
                )
            })}
        </div>
    )
}
export default CategoryPortfolio;
// return (
//     <div className="container-work">
//         <h2>Additional Passion</h2>
//         <div className="container-detail">
//             <WorkItem/>
//             <WorkItem/>
//             <WorkItem/>
//         </div>
//     </div>
// )