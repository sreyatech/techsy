import { useEffect, useRef, useState } from "react"
import AboutApi from "../api/AbouApi"
import img from '../images/images/about.svg'

const About = () => { 

const [data, setData] = useState(AboutApi)
return (
<>
  {/* ======= About Us Section ======= */}
  <section id="about" className="about">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>{data[0].title}</h2>
      </div>

      <div className="row content">

        <div className="col-lg-6 pt-4 pt-lg-0">
          <p>
            {data[0].paraOne}
          </p>
          <ul>
              <li><i class="ri-check-double-line"></i>{data[0].sub1}</li>
              <li><i class="ri-check-double-line"></i>{data[0].sub2}</li>
              <li><i class="ri-check-double-line"></i>{data[0].sub3}</li>
              <li><i class="ri-check-double-line"></i>{data[0].sub4}</li>
            
          </ul>
          <a href="#" className="btn-learn-more">Learn More</a>
        </div>

        <div className="col-12 col-lg-6 text-center">
          <img src={img} alt="digital" data-aos="fade-right" />
        </div>
      </div>

    </div>
  </section>
  {/* End About Us Section */}

</>
)
}

export default About