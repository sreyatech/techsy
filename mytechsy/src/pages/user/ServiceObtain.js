import React from 'react'
import Profile from './Profile'
import {Form} from 'react-bootstrap'

const ServiceObtain = () => {
return (
<>
    <Profile />
    <div className="hi">
        <h1>Services Obatained</h1>
        <hr />
        <h6>You haven't obtained any service</h6>

        <h1 className="mt-5">Your Feedback</h1>
        <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Your Feedback</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Any Suggestion for better our services in future??</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Can we use your feedback on front??" />
            </Form.Group>
            <button className="btn btn-primary">Submit</button>

    </Form>
    </div>
</>
)
}

export default ServiceObtain