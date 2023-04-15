import CategoryAddiPassions from "../component/CategoryAddiPassions";
import NavBar from "../component/NavBar";

function Passion() {
  return (
    <div>
      <NavBar />
      <div className="container-work">
        <h2>
          Additional <strong>Passion</strong>
        </h2>
        <div className="container-detail">
          <CategoryAddiPassions />
        </div>
      </div>
    </div>
  );
}
export default Passion;
