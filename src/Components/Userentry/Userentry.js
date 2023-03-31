import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Userentry = () => {
    const newUser = {
        name: "",
        email: "",
        age: "",
        uid: "",
        utype: ""
    };
    const handleUserEntry = (event) => {
        event.preventDefault();
        console.log(newUser)
    }
    const handleUserName = (event) => {
        newUser.name = event.target.value
        console.log(event.target.value)
    }
    const handelUserEmail = (event) => {
        newUser.email = event.target.value
        console.log(event.target.value)
    }
    const handelUserAge = (event) => {
        newUser.age = event.target.value
        console.log(event.target.value)
    }

    const handleUserID = (event) => {
        newUser.uid = event.target.value
        console.log(event.target.value)
    }
    const handleUsertype = (event) => {
        newUser.utype = event.target.textContent
        console.log(event.target.textContent)
    }
    return (
        <div className='container'>
            <h1>Ueser entry</h1>
            <Form onSubmit={handleUserEntry}>
                <Form.Group onBlur={handleUserName} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="User Name" />
                </Form.Group>

                <Form.Group onBlur={handelUserEmail} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group onBlur={handelUserAge} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User ege</Form.Label>
                    <Form.Control type="number" placeholder="User ege" />
                </Form.Group>

                <Form.Group onBlur={handleUserID} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control type="text" placeholder="User ID" />
                </Form.Group>

                <Dropdown  >
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select Membership
                    </Dropdown.Toggle>

                    <Dropdown.Menu  >
                        <Dropdown.Item onClick={handleUsertype} href="#/action-1">General Member</Dropdown.Item>
                        <Dropdown.Item onClick={handleUsertype} href="#/action-2">Premium Member</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Userentry;