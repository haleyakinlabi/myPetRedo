import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    species: "",
    breed: "",
    imageURL:""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://haley-capstone.fly.dev/users/sign_up", formData)
      .then(res => {
        navigate("/login")
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="register-box">

        <form onSubmit={handleSubmit} className="register-form">
        
        <p className="createAccount">Create an Account</p>
        
        <label>
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="registerInput"
            />
        </label>

        <label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
            className="registerInput"
            />
        </label>

        <label>
            <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="registerInput"
            />
        </label>

        <label>
            <input
            type="password"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="registerInput"
            />
        </label>

        <label>
            <input
            type="text"
            name="species"
            value={formData.species}
            onChange={handleChange}
            placeholder="Species"
            className="registerInput"
            />
        </label>

        <label>
            <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            placeholder="Breed"
            className="registerInput"
            />
        </label>

        <label>
            <input
            type="text"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            placeholder="ImageURL"
            className="registerInput"
            />
        </label>

        <button type="submit" className="sign-up">Sign Up</button>

       <p className="register-txt">Have an account? <a className="register-txt"href="/login">Login</a></p>
        
        </form>

        
    </div>
  );
};

export default SignUp;




