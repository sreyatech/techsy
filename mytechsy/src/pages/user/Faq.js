import React from 'react'
import Profile from './Profile'
import {Form} from 'react-bootstrap'

const Faq = () => {
return (
<>
    <Profile />
    <div className="hi">
        <h1>Frequently Asked Questions</h1>
        <hr /><br />
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Question</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Any Sugesstions</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Can we use your question on front??" />
            </Form.Group>
            <button className="btn btn-info">Submit</button>
        </Form>
    </div>

</>
)
}

export default Faq