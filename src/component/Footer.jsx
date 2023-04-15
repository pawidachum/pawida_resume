import waveImage from "../assets/decorate/wave.png"

function Footer(){
    return (
        <div>
            <img className="wave-image" src={waveImage} alt="wave-image"/>
            <div className="footer-heading">Design By Pawida</div>
        </div>
    )
};
export default Footer;