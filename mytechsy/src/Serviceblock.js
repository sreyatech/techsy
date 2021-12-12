import { useState, useEFfect } from 'react'
import Serviceapi from './api/ServiceApi'

const Serviceblock = () => {
const [serviceData, setServiceData] = useState(Serviceapi)

return (
<>
    <section>
        <div className="work-container container">
            <div className="row d-flex justify-content-around">
            {
                serviceData.map((i,index)=>{
                const {logo,title,info} = i
                    return(
                        <>
                        <div className="col-12 col-lg-4 text-center work-container-subdiv" key={index}>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                </div>
                        </>
                    )
                })
            }

            </div>
        </div>
    </section>
</>
)
}

export default Serviceblock