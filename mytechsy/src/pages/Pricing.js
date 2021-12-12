import PricingApi from "../api/PricingApi"
import { useState } from "react"
import { toast } from "react-toastify"
import {useHistory} from 'react-router-dom';

const Pricing = () => {

  const [details, setDetails] = useState(PricingApi[0])
  const {heading, subHeading, info, price} = details[0]
const [intro, setIntro] = useState(PricingApi[1])
const user = JSON.parse(localStorage.getItem('user_info'))
const history = useHistory();

const handleClick =(pro_id,amount,purpose)=>{
  if(!user){
    history.push("/login");
  }else if(user)
  {
    const user_name = user.data.user.name
    const user_phone = user.data.user.phone
    const user_email = user.data.user.email
    const user_id = user.data.user.id
    
    const win = window.open("http://127.0.0.1:8000/api/instamojo/"+user_id+"/"+pro_id+"/"+user_name+"/"+purpose+"/"+amount+"/"+user_phone+"/"+user_email);
    win.focus();
  }else{
    history.push("/");    
    toast.warn("Please refresh the page once more or try again...",{
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}


return (
  <>

         {/* ======= Pricing Section ======= */}
    <section id="pricing" class="pricing">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Pricing</h2>
          <p>{intro[0].describe}</p>
        </div>

        <div class="row">
        {
          details.map((i)=>{
            return(
              <>
              <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
            <div class="box featured">
              <h3>{i.heading}</h3>
              <h4><sup>$</sup>{i.price}<span>per project</span></h4>
              <h6>{i.subHeading}</h6>
              <ul>
                <li><i class="bx bx-check"></i>{i.info.info1}</li>
                <li><i class="bx bx-check"></i>{i.info.info2}</li>
                <li><i class="bx bx-check"></i>{i.info.info3}</li>
                <li><i class="bx bx-check"></i>{i.info.info4}</li>
                <li><i class="bx bx-check"></i>{i.info.info5}</li>
                <li><i class="bx bx-check"></i>{i.info.info6}</li>
                <li><i class="bx bx-check"></i>{i.info.info7}</li>
                <li><i class="bx bx-check"></i>{i.info.info8}</li>
                <li><i class="bx bx-check"></i>{i.info.info9}</li>
                <li><i class="bx bx-check"></i>{i.info.info10}</li>
                <li><i class="bx bx-check"></i>{i.info.info11}</li>
                <li><i class="bx bx-check"></i>{i.info.info12}</li>
                <li><i class="bx bx-check"></i>{i.info.info13}</li>
                <li><i class="bx bx-check"></i>{i.info.info14}</li>
                <li><i class="bx bx-check"></i>{i.info.info15}</li>
                <li><i class="bx bx-check"></i>{i.info.info16}</li>
              </ul>
              <a href="" class="buy-btn" onClick={(e)=>handleClick(i.id,i.price,i.heading)}>Pay Now</a>
              <a href="#" class="buy-btn">More Plans</a>
            </div>
          </div>
              </>
            )

          })
        }

         

        </div>

      </div>
    </section>
    {/* End Pricing Section */}
   
        </>
    )
}

export default Pricing
