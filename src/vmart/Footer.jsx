import React from 'react';
import '../components/App.css'

export default function Footer() {
    return (
        <div className="footer">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center pb-3 mb-3">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-light"><strong>Home</strong></a></li>
                    <li className="nav-item"><a href="/products" className="nav-link px-2 text-light"><strong>Products</strong></a></li>
                    <li className="nav-item"><a href="/mailer" className="nav-link px-2 text-light"><strong>Contacts</strong></a></li>
                    <li className="nav-item"><a href="/about" className="nav-link px-2 text-light"><strong>About</strong></a></li>
                    <li className="nav-item"><a href="/about" className="nav-link px-2 text-light"><strong>Team Members</strong></a></li>
                    <li className="nav-item"><a href="/login" className="nav-link px-2 text-light"><strong>LogIn / SignUp</strong></a></li>
                </ul>
                <p className="text-center text-light">©Copyright 2022, Made by NVHT Team</p>
            </footer>
        </div>
    );
}