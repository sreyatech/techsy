import axios from "axios";
import React,{useState} from "react"
import {useHistory} from 'react-router-dom';
import { toast } from 'react-toastify';
import {Button,Modal,Row,Col,Image} from 'react-bootstrap';
import img from '../images/images/hello.svg'

const Register = () => {

    var colors = {
                    "bg" : "#F4E185",
                    "text" : "#000957",
                    "para" : "#909090",
                    "primary" : "#FF5733",
};

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");
const [password,setPassword] = useState("");
const history = useHistory();

const formData = new FormData();
formData.append("name",name);
formData.append("email",email);
formData.append("phone",phone);
formData.append("password",password);

async function signUp(e){
e.preventDefault();
axios({
method:"POST",
url:"http://127.0.0.1:8000/api/register",
data : formData,
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
    <div className="registration">
        <div className="container">
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
        }}>Register Yourself</h3>
          <form action="" className="p-5 form" style={{
            'color' : colors.para,
            'marginTop' : '1rem',
            'textAlign' : 'justify'
        }}>

<input type="text" placeholder="name" className="form-control" value={name}
    onChange={(e)=>setName(e.target.value)} /><br />
<input type="email" placeholder="email" className="form-control" value={email}
    onChange={(e)=>setEmail(e.target.value)} /><br />
<input type="tel" placeholder="mobile" className="form-control" value={phone}
    onChange={(e)=>setPhone(e.target.value)} /><br />
<input type="password" placeholder="password" className="form-control" value={password}
    onChange={(e)=>setPassword(e.target.value)} /><br />
<button type="submit" className="btn btn-primary" onClick={signUp}>Sign Up</button>
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

</>
)
}

export default Register