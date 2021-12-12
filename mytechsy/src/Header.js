import HeroApi from './api/HeroApi'
import img from './images/images/devices.svg'
import { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'

const images = [
  "photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    "photo-1580927752452-89d86da3fa0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    "photo-1480694313141-fce5e697ee25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
    "photo-1496065187959-7f07b8353c55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
]

const Header = () => {
  const [position, setPosition] = useState(0)
  const [data, setData] = useState(HeroApi)
  const transitions = useTransition(position,{
        from : {opacity: 0},
        enter : {opacity: 1},
        leave : {opacity: 0},
        config : {duration : 2000}
  })

  useEffect(()=>{
    setInterval(()=>{
            setPosition((index)=>(index + 1)%images.length)
        },2000)
  },[])

    return (
        <>
         {/* ======= Hero Section ======= */}
  <section id="hero" className="d-flex align-items-center justify-content-center">
<div>

  {transitions((style,index)=>(
                    <animated.div
                        style = {{
                            ...style,
                            position: 'absolute',
                            width : '100vw',
                            height : '100vh',
                            backgroundPosition : 'center',
                            backgroundSize : 'cover',
                            top : 0,
                            left : 0,
                            backgroundAttachment: 'fixed',
                            backgroundImage : `url(https://images.unsplash.com/${images[index]})`,

                        }}
                    />
                ))}
</div>

    <div className="container" data-aos="fade-up">
    <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
          <h1>{data[0].title}</h1>
          <h2>{data[0].subTitle}</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="#services" className="input-group-button">Get Started</a>
          </div>
        </div>

        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in">
          <img src={img} className="img-fluid animated" alt="" /> 
                
        </div>

    </div>
    </div>
  </section>
  {/* End Hero */}
        </>
    )
}

export default Header
