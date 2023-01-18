import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";



const Login = () => {

    //useRef
    const userRef = useRef()
    const errRef = useRef()

    //useState
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
   

    

  
    //handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
       
        const data = {email: email, password: password}
        const headers = {'Content-Type': 'application/json'}

        axios.post('https://haley-capstone.fly.dev/users/sign_in.json', data, { headers })
            .then(response => {  
                localStorage.setItem('access-token', response.headers['access-token']);
                navigate("/")

            // handle successful sign in
            setIsLoading(false);
             })
            .catch(error => {
                setError("Error while signing in")
                setIsLoading(false);
      });
    }

    
        
    return (

        

        <section className="login-box">

            <img className='logo' src='https://cdn.pixabay.com/photo/2023/01/12/21/43/paw-7714934_1280.png' alt='logo'></img>
       

           

            <form onSubmit={handleSubmit} className="login-form">

            <h1 className="login">Login</h1>

            {/* Email */}
                <label htmlFor="email"></label>
                <input 
                placeholder="Email"
                className="loginInput"
                type="email"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                ></input>

            {/* Password */}
            <label htmlFor="password"></label>
                <input 
                placeholder="Password"
                className="loginInput"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                ></input>

            <button className="sign-up">Sign In</button>

            <p className="register-txt">Don't have an account? <a className="register-txt"href="/register">Sign up</a></p>

            </form>

            
        
        </section>
    )
}

export default Login
