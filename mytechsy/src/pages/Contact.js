import ContactApi from "../api/ContactApi"
import { toast } from 'react-toastify';

import { useEffect, useState } from 'react'
import axios from "axios";
const Contact = () => {

const [data, setData] = useState(ContactApi[0])
const [info, setInfo] = useState(ContactApi[1])

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [subject,setSubject] = useState("");
const [message,setMessage] = useState("");

async function send(){
  const formData = new FormData();
  formData.append("name",name);
  formData.append("email",email);
  formData.append("subject",subject);
  formData.append("message",message);

  axios({
    method:"POST",
    url: "http://127.0.0.1:8000/api/contact",
    data: formData,
  }).then(function(response){
    // console.log(response)    
      if(response.status == 202){
        console.log(response)
        toast.warn(<div>{response.data.message}</div>,{
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
        }
      else if(response.status == 200){
        console.log(response)
        toast(<div>{response.data.message}</div>,{
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(function(){window.location.reload()},5000)
        }
        else{
        console.log(response)
        toast.warn(<div>{response.data.message}</div>,{
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }).catch(function(response){
      console.log(response);
      toast.warn("please enter a valid email id or refresh the page and try again...",{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  })

}



    return (
        <>
         {/* ======= Contact Section ======= */}
    <section id="contact" class="contact"> 
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Contact</h2>
          <p>{info[0].describe}</p>
        </div>

        <div class="row">

          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class={`${data[0].logo}`}></i>
                <h4>Location:</h4>
                <p>{data[0].address}</p>
              </div>

              <div class="email">
                <i class={`${data[1].logo}`}></i>
                <h4>Email:</h4>
                <p>{data[1].email}</p>
              </div>

              <div class="phone">
                <i class={`${data[2].logo}`}></i>
                <h4>Call:</h4>
                <p>{data[0].phone}</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{border:'0px', width: '100%', height: '290px'}} allowfullscreen></iframe>
            </div>

          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <div role="form" class="php-email-form">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" required onChange={(e)=>setName(e.target.value)} />
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" required onChange={(e)=>setEmail(e.target.value)} />
                </div>
              </div>
              <div class="form-group">
                <label for="name">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" required onChange={(e)=>setSubject(e.target.value)} />
              </div>
              <div class="form-group">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" rows="10" required onChange={(e)=>setMessage(e.target.value)} ></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button onClick={send} type="submit">Send Message</button></div>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* End Contact Section    */}
        </>
    )
}

export default Contact
