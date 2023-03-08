
function CategoryAdditionalPassion(props){
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
    
};
export default CategoryAdditionalPassion;