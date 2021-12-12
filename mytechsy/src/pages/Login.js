import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import {useHistory} from 'react-router-dom';
import {Button,Modal,Row,Col,Image} from 'react-bootstrap';
import img from '../images/images/firstModal.svg'
var colors = {
                    "bg" : "#F4E185",
                    "text" : "#000957",
                    "para" : "#909090",
                    "primary" : "#FF5733",
};


const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const history = useHistory();

async function login(e){
    e.preventDefault();
    let item = {email, password};
    axios({
        method:"POST",
        url:"http://127.0.0.1:8000/api/login",
        data: item,
    }).then(function(response){
        if(response.status == 201){
            // console.log(response)
            toast.warn(<div>{response.data.message}</div>, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            
        }
        else if(response.status == 202){
            // console.log(response)
            toast.warn(<div>{response.data.message}</div>, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            
        }else if(response.status == 200){
            localStorage.setItem("user_info",JSON.stringify(response))
            history.push("/");
                  toast(<div>{response.data.message}</div>, {
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
    ).catch(function(response){
        // console.log(response);
        if(response){
      toast.warn("please try again...", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    })
}

    return (
        <>
     


     <div className="registration">
        <div className="container">
    <container>
        <Row>
            <Col xs={12} md={6}>
        <Image src={img} style={{
            'width':'50%',
            'marginLeft' : '7rem'
        }}/>
        
            </Col>
            <Col xs={12} md={6} style={{
                'paddingTop' : '3rem',  
                'textAlign':'center',
                'paddingLeft' : '1rem',                
                'paddingRight' : '2rem',                
        }}>
        <h3 style={{
            'font-weight' : '600',
            'borderBottom' : '1px solid black',
            'paddingBottom' : '8px',
        }}>Login Yourself</h3>
          <form action="" className="p-5 form" style={{
            'color' : colors.para,
            'marginTop' : '1rem',
            'textAlign' : 'justify'
        }}>

<input type="email" className="form-control" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                required /><br />
 <input type="password" className="form-control" placeholder="password" value={password}
                    onChange={(e)=>setPassword(e.target.value)} /><br />
  <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
</form>
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

         
        </div>
    </div>
















     <form action="" className="p-5 form">
                <br/>
               <br />
              
            </form>
        </>
    )
}

export default Login
