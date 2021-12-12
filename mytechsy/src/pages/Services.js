import { useEffect, useState } from "react"
import Serviceapi from "../api/ServiceApi"
const Services = () => {

const [card, setData] = useState(Serviceapi[0]);
const [service, setService] = useState(Serviceapi[1]);

    return ( 
        <>
         {/* ======= Services Section ======= */}
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Services</h2>
          <p>{service[0].describe}</p>
        </div>

        <div class="row">
        {
          card.map((i,index)=>{
            const {logo,title,info} = i
            return(
              <>
              <div class="col-xl-4 col-md-10 d-flex align-items-stretch" data-aos="zoom-in" key={index}>
            <div class="icon-box">
              <div class="icon"><i class={`${logo}`}></i></div>
              <h4><a href="">{title}</a></h4>
              <p>{info}</p>
              <button className="btn-learn-more">Read More</button>
            </div>
          </div>
              </>
            )
          })
        }
        </div>

      </div>
    </section>
    {/* End Services Section */}
   
        </>
    )
}

export default Services
