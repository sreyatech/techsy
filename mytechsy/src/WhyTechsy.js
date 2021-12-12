import img from './images/images/whyUs.svg'
import Whyusapi from './api/Whyusapi'
import { useState } from 'react'
const WhyTechsy = () => {

const [data, setData] = useState(Whyusapi);

return (
<>
    <section className="common-section border">
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                    <img src={img} alt="digital" data-aos="fade-right" />
                </div>
                <div className="col-12 col-lg-7">
                    <h2 className="main-heading" data-aos="fade-up">Why Us ??</h2>
                    {
                    data.map((i)=>{
                    const {id,title,info} = i
                    return (
                    <>
                        <div className="row our-services-info" key={id}>
                            <div className="col-1 our-services-number">{id}</div>
                            <div className="col-10 our-services-data">
                                <h3 data-aos="fade-left">{title}</h3>
                                <p className="main-hero-para" data-aos="fade-left">{info}</p>
                            </div>
                        </div>
                    </>
                    ) 
                    })
                    }

                </div>
            </div>
        </div>
    </section>
</>
)
}

export default WhyTechsy