import React, { useRef, useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { GoogleButton } from "react-google-button";


function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    //const passwordConfirmRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault(); //preventDefault() method stops the default action of a selected element from happening by a user. 
        // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        //   return setError("Passwords do not match");
        // }
        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate("/dashboard");
        } catch {
            setError("Failed to sign in");
        }
        setLoading(false);
    }

    // Sign in with Google Account...
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await googleSignIn();
            navigate("/dashboard");
        } catch {
            setError("Failed to sign in");
        }
        setLoading(false);
    }


    return (
        <>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>

                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Log In</h2>
                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>

                                <Form.Group id="password" className="mt-4">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>

                                {/* <Form.Group id="password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group> */}

                                <Button disabled={loading} className="w-100 mt-4" type="submit">
                                    Log In
                                </Button>
                            </Form>
                            <hr />
                            <div>
                                <GoogleButton
                                    disabled={loading}
                                    className="w-100 mt-4"
                                    type="dark"
                                    onClick={handleGoogleSignIn}
                                />
                            </div>

                            {/* <Link to="/phone-signup">
                        <div className="d-grid gap-2 mt-3">
                            <Button variant="success" type="submit">
                                Sign in with Number
                            </Button>
                        </div>
                    </Link> */}

                            <div className="w-100 text-center mt-3">
                                <Link to="/forgot-password">Forgot Password ?</Link>
                            </div>

                        </Card.Body>
                    </Card>


                    <div className="p-4 text-center">
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </div>

                </div>
            </Container>

        </>
    );
}

export default Login;