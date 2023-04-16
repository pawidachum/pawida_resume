import CategoryPortfolio from "../component/CategoryPortfolio";
import NavBar from "../component/NavBar";

function Portfolio() {
  return (
    <div className="App">
      <NavBar />
      <div className="flex-col flex gap-14 text-center mb-40 ">
        <h2 className="text-4xl tracking-widest text-[#14279B]">
          My <span className="font-semibold text-[#002265]"> Portfolio</span>
        </h2>
        <div className="flex gap-10 relative justify-between">
          <CategoryPortfolio />
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
