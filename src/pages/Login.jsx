import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom"


const Login = () => {

    //useRef
    const userRef = useRef()
    const errRef = useRef()

    //useState
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    // //useEffect
    // useEffect(() => {
    //     userRef.current.focus()
    // }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    //handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        



    }

    
    return (

        
        


        <section className="login-box">

            {/* Error Message */}
            <p ref={errRef} className={errMsg ? "errmsg" :
            "offscreen"} aria-live="assertive">{errMsg}</p>

            <h1 className="login">Login</h1>

            <form onSubmit={handleSubmit} className="register-form">

            {/* Username */}
                <label htmlFor="username"></label>
                <input 
                placeholder="Username"
                className="loginInput"
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                ></input>

            {/* Password */}
            <label htmlFor="password"></label>
                <input 
                placeholder="Password"
                className="loginInput"
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                ></input>

            <button className="sign-up">Sign In</button>

            </form>

            <p className="login-link1">
                Don't have an account? 
                <span>
                    <Link to="/register">
                    <p className="login-link2">Sign Up</p>
                    </Link>
                </span>
            </p>


        </section>
    )
}

export default Login
