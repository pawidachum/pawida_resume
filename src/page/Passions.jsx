import CategoryAddiPassions from "../component/CategoryAddiPassions";

function Passion(){
    return (
        <div className="container-work">
            <h2>Additional <strong>Passion</strong></h2>
            <div className="container-detail">
                <CategoryAddiPassions/>
                {/* <CategoryAddiPassions/>
                <CategoryAddiPassions/> */}
            </div>
        </div>
    )
};
export default Passion;