import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-between">
      <div className="text-2xl tracking-wider hover:text-3xl">
        <Link className="text-[#14279B]" to="/">
          <span className="font-bold text-[#002265] ">Pawida</span> Chumpurat
        </Link>
      </div>
      <div className="flex gap-8 text-2xl items-center tracking-wider text-[#212121] font-normal">
        <Link className="link" to="/aboutme">
          About
        </Link>
        <Link className="link" to="/passions">
          Passions
        </Link>
        <Link className="link" to="/portfolio">
          Portfolio
        </Link>
        <button className="text-white bg-[#608AF5] rounded-xl px-[18px] py-[10px] font-semibold tracking-wider hover:bg-[#14279B]">
          <Link to="/contact">Contact Me</Link>
        </button>
      </div>
    </div>
  );
}
export default NavBar;
