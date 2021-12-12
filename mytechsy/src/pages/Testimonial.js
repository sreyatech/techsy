import Slider from "react-slick";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import TestiApi from "../api/TestimonialApi";

const PreviousBtn = (props) => {
  const { className, onClick } = props; 
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "30px" }} />
    </div>
  );
};

const Testimonial = () => {

const [data, setData] = useState(TestiApi);
    return (
        <>
    <section id="testimonials" className="testimonials">

    <div className="testimonial testi-slides" data-aos="fade-right">
        <div
          style={{
            width: "50%"
          }}
        >
          <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
            {
              data.map((i)=>{
                const {id,img,info,custName,custProf} = i
                return(
                  <>
                  <Card img={img} info={info} custName={custName}custProf={custProf} key={id} />
                  </>
                )
              })
            }           
          </Slider>
        </div>
      </div>
     
    </section>
   
        </>
    )
}

const Card = ({ img, info, custName, custProf }) => {
  return (
    <>
      <div className="testi-card">
        <Avatar
         imgProps={{ style: { borderRadius: "50%" } }}
          src={img}
          style={{
            width: 120,
            height: 120,
            border: "1 solid lightGreen",
            padding: 7,
            borderRadius: "50%",
            marginBottom: 20
          }}
        />
        <p className="testi-para">{info}</p>
        <h5><span>{custName},</span> {custProf}</h5>
      </div>
    </>
  );
};


export default Testimonial
