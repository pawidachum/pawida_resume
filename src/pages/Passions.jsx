import CategoryAddiPassions from "../component/CategoryAddiPassions";
import NavBar from "../component/NavBar";

function Passion() {
  return (
    <div className="App">
      <NavBar />
      <div className="flex flex-col gap-14 text-center mb-40 ">
        <h2 className="text-4xl tracking-widest text-[#14279B]">
          Additional
          <span className="font-semibold text-[#002265]"> Passion</span>
        </h2>
        <div className="flex gap-10 justify-between">
          <CategoryAddiPassions />
        </div>
      </div>
    </div>
  );
}
export default Passion;
