import CategoryPortfolio from "../component/CategoryPortfolio";

function Portfolio(){
    return (
        <div className="container-work">
            <h2>My <strong>Portfolio</strong></h2>
            <div className="container-detail">
                <CategoryPortfolio/>
            </div>
        </div>
    )
};
export default Portfolio;