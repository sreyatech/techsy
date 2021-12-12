import React, { useState } from 'react'
import {Button,Modal,Row,Col,Image} from 'react-bootstrap';
import img from '../images/images/welcome.svg'

const FirstModal = (props) => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var colors = {
                    "bg" : "#F4E185",
                    "text" : "#000957",
                    "para" : "#909090",
                    "primary" : "#FF5733",
};


    return (
        <>
        {/* <Button onClick={handleShow}>open modal</Button> */}

        <Modal show={show} onHide={handleClose}
         {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
        >
        <Modal.Body className="show-grid" style={{
                backgroundColor: colors.bg,
                'borderRadius' : '5px',
                'boxShadow': 'rgba(0, 0, 0, 0.4) 0px 30px 90px',
                'color' : colors.text
        }}>
        <container>
        <Row>
            <Col xs={12} md={6}>
        <Image src={img} style={{
            'height':'16rem',
            'width':'100%',
        }}/>
        
            </Col>
            <Col xs={12} md={6} style={{
                'paddingTop' : '1.5rem',  
                'textAlign':'center',
                'paddingLeft' : '1rem',                
                'paddingRight' : '2rem',                
        }}>
        <h3 style={{
            'font-weight' : '600',
            'borderBottom' : '1px solid black',
            'paddingBottom' : '8px',
        }}>Welcome To TechSy</h3>
        <p style={{
            'color' : colors.para,
            'marginTop' : '1rem',
            'textAlign' : 'justify'
        }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eveniet?
        </p>
        <div class="d-flex w-50 mx-auto" style={{
            'paddingTop' : '1.5rem',
        }}>
                        <a href="#"><i class="fab fa-facebook" style={{
            'color' : colors.primary,

                        }}></i>
                        </a>
                        <a href="#" class="align-items-center mx-auto"><i class="fab fa-twitter" style={{
            'color' : colors.primary,

                        }}></i>
                        </a>
                        <a href="#"><i class="far fa-envelope-open" style={{
            'color' : colors.primary,

                        }}></i>
                        </a>
                    </div>
        
        
            </Col>
          </Row>

        </container>
        </Modal.Body>
      </Modal>

        </>
    )
}

export default FirstModal
