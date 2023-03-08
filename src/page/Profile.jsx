import AboutMe from './AboutMe'
import Passion from './Passions'
import ContactMe from './ContactMe'
import Portfolio from './Portfolio'
import Footer from '../component/Footer'
import blueDotBG from "../image/Background.png"
import NavBar from '../component/NavBar'

function Profile(){
    return(
        <div >
         <div className="App" style={{backgroundImage:`url(${blueDotBG})` , backgroundSize: "72.3%" }}>
            <NavBar/>
            <AboutMe/>
            <Passion/>
            <Portfolio/>
        </div>
        <div>
            <ContactMe/>
            <Footer/> 
        </div>
        </div>
    )
}
export default Profile;