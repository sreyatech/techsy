import Navigation from "../Navbar"
import Header from "../Header"
import About from "./About"
import WhyTechsy from '../WhyTechsy'
import Services from "./Services"
import Testimonial from "./Testimonial"
import Portfolio from "./Portfolio"
import Skills from "./Skills"
import Pricing from "./Pricing"
import Faq from "./Faq"
import Contact from "./Contact"
import Footer from "./Footer" 
import FirstModal from './Modal';
import { useEffect } from "react"



const Home = () => {
    useEffect(()=>{
        <FirstModal/>
    },[])
    return (
        <>

            <Navigation />
            <Header />
            <About />
            <WhyTechsy />
            <Skills />
            <Services />
            <Pricing />
            {/* <Portfolio /> */}
            <Faq />
            <Testimonial />
            <Contact />
            <Footer/>
        </>
    )
}

export default Home
