import app from '../images/images/skills.svg';
import { useState } from 'react';
import SkillsApi from '../api/SkillsApi';
const Skills = () => {

const [data, setData] = useState(SkillsApi)

  const Progress =({done})=>{
    const [style, setStyle] = useState({});
    setTimeout(()=>{
        const newStyle = {
            opacity:1,
            width: `${done}%`,
        }
        setStyle(newStyle) 
    },2000)
    return(
        <>
        <div className="progress">
        <div className="col-lg-6 bg-info d-flex progress-bar progress-bar-striped align-items-center" data-aos="fade-right" role="progressbar" style={style}></div>
    </div>
        </>
    )
}
    return (
        <>
         {/* ======= Skills Section ======= */}
    <section id="skills" class="skills">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back" data-aos-offset="0">
            <img src={app} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>what we know ??</h3>
            <p class="fst-italic">{data[0].subHeading}</p>

            <div class="skills-content">
              <div className="progress">
                <span className="skill">{data[0].skillName1} <i class="val">{data[0].skillProgress1}%</i></span>
                <div className="progress-bar-wrap">
                  {<Progress done={`${data[0].skillProgress1}`}/>}
                </div>
              </div>

              <div className="progress">
                <span className="skill">{data[0].skillName2} <i class="val">{data[0].skillProgress2}%</i></span>
                <div class="progress-bar-wrap">
                {<Progress done={`${data[0].skillProgress2}`}/>}
                </div>
              </div>

              <div class="progress">
                <span class="skill">{data[0].skillName3} <i class="val">{data[0].skillProgress3}%</i></span>
                <div class="progress-bar-wrap">
                {<Progress done={`${data[0].skillProgress3}`}/>}
                </div>
              </div>

              <div class="progress">
                <span class="skill">{data[0].skillName4} <i class="val">{data[0].skillProgress4}%</i></span>
                <div class="progress-bar-wrap">
                {<Progress done={`${data[0].skillProgress4}`}/>}
                </div>
              </div>
              <div class="progress">
                <span class="skill">{data[0].skillName5} <i class="val">{data[0].skillProgress4}%</i></span>
                <div class="progress-bar-wrap">
                {<Progress done={`${data[0].skillProgress5}`}/>}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
    {/* End Skills Section    */}
        </>
    )
}

export default Skills
