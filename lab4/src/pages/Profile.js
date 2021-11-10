import React from "react";
import { Card, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom";

export const Profile = () => {
    const history = useHistory();
    const logoutHandler = () =>{
        localStorage.setItem("isAuth", false);
        window.location.reload();
    }
    return(
        <>
            <Button onClick={logoutHandler}>LOGOUT</Button>
            <h2>Your Profile</h2>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </>
    )
}