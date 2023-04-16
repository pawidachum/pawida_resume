import waveImage from "../assets/decorate/wave.png"

function Footer(){
    return (
        <div className="relative">
            <img className="relative w-full z-0" src={waveImage} alt="wave-image"/>
            <div className="text-white text-4xl absolute bottom-7 inset-x-1/3 text-center tracking-wider z-10">Design By Pawida</div>
        </div>
    )
};
export default Footer;