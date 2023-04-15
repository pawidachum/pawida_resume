import CategoryPortfolio from "../component/CategoryPortfolio";
import NavBar from "../component/NavBar";

function Portfolio(){
    return (
        <div>
            <NavBar/>
        <div className="container-work">
            <h2>My <strong>Portfolio</strong></h2>
            <div className="container-detail">
                <CategoryPortfolio/>
            </div>
        </div>

        </div>
    )
};
export default Portfolio;