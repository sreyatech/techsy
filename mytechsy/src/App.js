import { useEffect } from 'react';
import Aos from "aos"
import { Link, Switch, Route, Redirect } from "react-router-dom" 
import "aos/dist/aos.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Test from './Test';
import Register from './pages/Register';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/user/Profile';
import AdminProfile from './pages/admin/admin_Profile';
import Protected from './Protected';
import Dashboard from './pages/user/Dashboard';
import ServiceObtain from './pages/user/ServiceObtain';
import Contact from './pages/user/Contact';
import ServiceStatus from './pages/user/ServiceStatus';
import Faq from './pages/user/Faq';
import User_profile from './pages/user/User_profile';



function App() {

  useEffect(()=>{
    Aos.init({duration:2000});

   },[])
  return (
    <>
<div className="App">

<Switch>
<Route exact path="/">
   <Home/>    
   {/* <Test/> */}

</Route>

<Route exact path="/register">
   <Register/>    
</Route>
<Route exact path="/login">
   <Login/>    
</Route>
<Route exact path="/user_profile">
      <Protected Cmp={Profile} /> 
     </Route>
<Route exact path="/user_history_profile">
      <Protected Cmp={User_profile} /> 
     </Route>
<Route exact path="/user_dashboard">
      <Protected Cmp={Dashboard} /> 
     </Route>
<Route exact path="/user_service">
      <Protected Cmp={ServiceObtain} /> 
     </Route>
<Route exact path="/user_contact">
      <Protected Cmp={Contact} /> 
     </Route>
<Route exact path="/user_service_status">
      <Protected Cmp={ServiceStatus} /> 
     </Route>
<Route exact path="/user_faq">
      <Protected Cmp={Faq} /> 
     </Route>
<Route exact path="/admin_profile">
      <Protected Cmp={AdminProfile} /> 
     </Route>


</Switch>
</div>






  <ToastContainer />
  </>
  );
}

export default App;
