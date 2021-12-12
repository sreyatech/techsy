import { useEffect, useState } from "react"
import { useTransition, animated } from 'react-spring'
import PortfolioApi from "../api/PortfolioApi"
import lokenath from "../images/portfolio_lokenath/lokenath1.jpg"

const Portfolio = () => {
    const [data,setData] = useState(PortfolioApi)

// const images =[
// "photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
// "photo-1523961131990-5ea7c61b2107?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
// "photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80",
// "photo-1480694313141-fce5e697ee25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
// "photo-1542382257-80dedb725088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1228&q=80",
// ]

// const images = [
//     "lokenath1.jpg",
//     "lokenath2.jpg",
//     "lokenath3.jpg",
// ]

const images = [
    "about.svg",
    "app.svg",
    "degital.svg",
    "home.svg",
]

const [position, setPosition] = useState(0)
const transitions = useTransition(position,{
from : {opacity: 0},
enter : {opacity: 1},
leave : {opacity: 0},
config : {duration : 2000}
})

let media = window.matchMedia("(min-width:601px)");


useEffect(()=>{
setInterval(()=>{
setPosition((index)=>(index + 1)%images.length)
},2000)
},[])

return (
<>
    {/* ======= Services Section ======= */}
    <section id="portfolio" class="portfolio section-bg">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
                <h2>Portfolio</h2>
                <p>{data[2].describe}</p>
            </div>

            <div class="row">
                <div class="col-xl-7 col-md-12 d-flex align-items-stretch" data-aos="zoom-in">
                    {transitions((style,index)=>(
                    <animated.div style={{
                            ...style,
                          position: 'absolute',
                        width : media.matches ? '50vw' : '93vw',
                          height : '65vh',
                          backgroundPosition : 'center',
                        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
                          backgroundSize : 'cover',
                          borderRadius:'10px',
                          top : '1rem',
                        //   backgroundImage : `url(https://images.unsplash.com/${images[index]})`,
                        //   backgroundImage : `url(../images/portfolio_lokenath/${images[index]})`,
                          backgroundImage : `url(../images/images/${images[index]})`,
                         display:'flex',

                      }} />
                    ))}
                </div>
                <div className="col-xl-5 col-md-12 d-flex align-items-stretch" data-aos="zoom-in">
                    <div className="describe-para">
                        <h1>{data[0].title}</h1>
                        <p>{data[0].info1}</p>
                        <p>{data[0].info2}</p>
                        <h1>{data[1].title}</h1>
                        <div className="row">
                            <div className="col-lg-3">
                                <h6>Client : </h6>
                            </div>
                            <div className="col-lg-9">
                                <p>{data[1].client}</p>
                            </div>
                            <div className="col-lg-3">
                                <h6>Company : </h6>
                            </div>
                            <div className="col-lg-9"> 
                                <p>{data[1].company}</p>
                            </div>
                            <div className="col-lg-3">
                                <h6>Category : </h6>
                            </div>
                            <div className="col-lg-9">
                                <p>{data[1].category}</p>
                            </div>
                            <div className="col-lg-3">
                                <h6>Date :</h6>
                            </div>
                            <div className="col-lg-9">
                                <p>{data[1].date}</p>
                            </div>
                            <div className="col-lg-3">
                                <h6>Project URL :</h6>
                            </div>
                            <div className="col-lg-9">
                                <p>{data[1].url}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
    {/* End Services Section */}

</>
)
}

export default Portfolio