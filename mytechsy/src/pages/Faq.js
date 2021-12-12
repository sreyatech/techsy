import { useState, useEffect } from "react"
import FaqApi from "../api/FaqApi"

const Faq = () => {
  const [intro, setIntro] = useState(FaqApi[1][0].describe)
  const [faq, setFaq] = useState(FaqApi[0])
  const [show, setShow] = useState(false)

const showFaq =(index)=>{
  if(show === index){
    return setShow(null)
  }
  setShow(index)
}
    return (
        <>
         {/* ======= Frequently Asked Questions Section ======= */}
    <section id="faq" class="faq section-bg border">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>{intro}</p>
        </div>

        <div class="faq-list">
          <ul>
          {
            faq.map((i,index)=>{
              const {que,ans} = i
              return (
                <>
                <li data-aos="fade-up">
              <i class="bx bx-help-circle icon-help"></i><a>{que}<i key={index} className={`fas ${show === index ? 'fa-chevron-up' : 'fa-chevron-down'}`} onClick={()=>showFaq(index)}></i></a>
              <div id="faq-list-1">
              {
                show === index ? <p>{ans}</p> : null
              }
              </div>
            </li>
                </>
              )
            })
          }
          </ul>
        </div>

      </div>
    </section>
   
        </>
    )
}

export default Faq
