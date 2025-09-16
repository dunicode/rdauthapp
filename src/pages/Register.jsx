import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Register() {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirm: ''
    });
  
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await axios.post("http://localhost:8000/api/auth/register", formData)
        .then(function (response) {
            console.log(response)
            setFormData({ name: '', email: '', password: '', password_confirm: '' });
            setMessage('');
            alert("Registro exitoso!")
            navigate('/login');
        }).catch(function (error) {
            console.log(JSON.parse(error.request.response).message);
            setFormData({ name: formData.name, email: formData.email, password: '', password_confirm: '' });
            setMessage(JSON.parse(error.request.response).message);
        });  
    };
  
    return (
        <div className="page-container">
            <h2>Register</h2>
            <p>Por favor introducir los datos correspondientes</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="name"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password_confirm">Password Confirm:</label>
                    <input
                        type="password"
                        id="password_confirm"
                        name="password_confirm"
                        value={formData.password_confirm}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group form-error">{message}</div>
                
                <button type="submit" className="submit-btn">Register</button>
            </form>
        </div>
    );
}
