import React, { useState, useContext } from "react";
import { Form, Button, Modal } from "react-bootstrap"

export const LoginPage = () => {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        username:"",
        password:""
    })

    const changeHandler = event => {
        setForm({...form,[event.target.name]:event.target.value})
    }
    const loginHandler = event => {
        if(form.email == "Admin" && form.password=="12345"){
            localStorage.setItem('isAuth', true);
        } else {
            setShow(true);
        }
    }
    const handleClose  = () => {
        setShow(false);
    }

    return(
        <div className=" d-flex container-fluid justify-content-center" style={{
            // backgroundColor:'red',
            
            }}>
                
            <Form className="bg-white shadow-lg rounded  p-4 mt-5">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" name="username" value={form.email} onChange={changeHandler}/>
                    <Form.Text className="text-muted">
                    {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={form.password} onChange={changeHandler}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="dark" type="submit" onClick={loginHandler} >
                    Log in
                </Button>
             </Form>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Неверные данные</Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
          </Modal>
          </div>
    )
}