import React from 'react'
import Profile from './Profile'
import {Form} from 'react-bootstrap'

const Contact = () => {
return (
<>
    <Profile />
    <div className="hi">

        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" name="name" placeholder="Nandini Chakraborty" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="nandini@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="subject" placeholder="web designing" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name="address" placeholder="C/45, Garia, kolkata-700045" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" name="comapany" placeholder="TechSy.co" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Job Role</Form.Label>
                <Form.Control type="text" name="job_role" placeholder="Project Manager" />
            </Form.Group>
            <Form.Group className="mb-3" name="message" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="I want to make a website for my company..." />
            </Form.Group>
            <button className="btn btn-success">Submit</button>
        </Form>
    </div>
</>
)
}

export default Contact