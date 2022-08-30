import React, { useState } from "react";
import { Carousel, Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Products from '../vmart/Products'



function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => { // Logout functionality...
        setError("");

        try {
            await logout();
            navigate("/login");
        } catch {
            setError("Failed to logout");
        }
    };


    return (
        <>
            <div className="profile-container">
                <Card className="card w-60 card-group"
                    style={{ backgroundColor: "#FFFDD0" }}>
                    <Card.Body className=" card w-10 text-center mt-2 border border-secondary shadow-lg p-3" style={{ backgroundColor: "#FFFDD0" }}>
                        <h1 className="bg-dark card text-white text-center mb-3"><strong>Hello, {currentUser.displayName}</strong></h1>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <br />
                        <h4 className="bg-dark card text-white text-center mb-2">Email Id: {currentUser.email}</h4>
                        <div className="w-100 text-center mt-2">
                            <br />
                            <Button varaint="link" onClick={handleLogout} className=" bg-dark ">
                                <h3>Log Out</h3>
                            </Button>
                        </div>
                    </Card.Body>
                    <Card.Body className=" card w-10 text-center mt-2 border border-secondary shadow-lg p-3" style={{ backgroundColor: "#FFFDD0" }}>
                        <br />
                        <p>
                            <img className="border border-secondary shadow-lg p-1 mb-1 bg-white rounded-circle" style={{ width: '200px', height: '200px' }}
                                src={currentUser.photoURL}
                                alt={currentUser}
                            />
                        </p>


                    </Card.Body>
                    <Card.Body className=" card w-10 text-center mt-2 border border-secondary shadow-lg p-3 " style={{ backgroundColor: "#FFFDD0" }}>

                        <Link to="/update-profile" className="btn btn-primary text-center mt-2 bg-dark ">
                            <h1>Update Profile</h1>
                        </Link>
                        <hr />
                        <Link to="/update-profile" className="btn btn-primary text-center mt-2 bg-dark " >
                            <h1>Review Orders</h1>
                        </Link>

                    </Card.Body>

                </Card>
            </div>
            <br />

            <div className="hero-slider">
                <div>
                    <Carousel>
                        <Carousel.Item interval={2000}>
                            <img
                                className="d-block w-100"
                                src="../assets/img1.jpg"
                                alt="First slide"
                                height="550px"
                            />
                            <Carousel.Caption>
                                <h3>NEW SEASON ARRIVALS</h3>
                                <p>CHECK OUT ALL THE TRENDS.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../assets/img2.jpg"
                                alt="Second slide"
                                height="550px"
                            />
                            <Carousel.Caption>
                                <h3>NEW SEASON ARRIVALS</h3>
                                <p>CHECK OUT ALL THE TRENDS.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../assets/img3.jpg"
                                alt="Third slide"
                                height="550px"
                            />
                            <Carousel.Caption>
                                <h3>NEW SEASON ARRIVALS</h3>
                                <p>CHECK OUT ALL THE TRENDS.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    <Products />
                </div>

            </div>
        </>
    );
}

export default Dashboard;