import React, { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from  "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/axios'
import { Link } from "react-router-dom"

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = '/register'

const Register = () => {

    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)
   

    const [pwd, setPwd] = useState ('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    //useEffect for USER
    useEffect(() => {
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidName(result)
    }, [user])

    //useEffect for PASSWORD
    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    //useEffect for ErrMsg
    useEffect(()=>{
        setErrMsg('')
    }, [user, pwd, matchPwd])

    //handleSubmit Function
    const handleSumit = async (e) => {
        e.preventDefault()
        
        //if button enabled with JS hack
        const v1 = USER_REGEX.test(user)
        const v2 = PWD_REGEX.test(pwd)
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry")
            return 
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type' : 'application/json'},
                    withCredentials: true
                }
            )
            console.log(response.data)
            console.log(response.accessToken)
            console.log(JSON.stringify(response))
            setSuccess(true)

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }


    return (

        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
       
        <section className="register-box">
           <p ref={errRef} className={errMsg ? "errmsg" :
           "offscreen"} aria-live="assertive">{errMsg}</p>

           <h1 className="createAccount">Create an Account</h1>

           <form onSubmit={handleSumit} className="register-form">

        {/* //USERNAME */}
            <label htmlFor="username">
                
                <span className={validName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validName || !user ? "hide" :
                "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>
            <input
                placeholder="Username"
                className="registerInput"
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invaild={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                ></input>

                <p id ="uidnote" className={userFocus && user && 
                !validName ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, and hyphens allowed.
                </p>

        {/* //PASSWORD */}

            <label htmlFor="password">
               
                <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                <span className={validPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
            </label>  
            <input
                placeholder="Password"
                className="registerInput"
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}  
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}>
            </input>
            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" :
            "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special
                character. <br />
                Allowed special characters: 
                <span aria-label="exclamation mark">!</span>
                <span aria-label="at symbol">@</span> 
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar sign">$</span>
                <span aria label="percent">%</span>
            </p>

        {/* //PASSWORD MATCHING */}

             <label htmlFor="confirm_pwd">
                
             </label>
             <input
                placeholder="Confirm Password"
                className="registerInput"
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}>
            </input>
            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" :
            "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field. 
            </p>

            <input
            className="registerInputSpecies"
            type="text"
            placeholder="Species">
            </input>

            <input required style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
            <img className="registerAddImg" src="https://img.icons8.com/ios-glyphs/512/add-image.png" alt="" />
            <span className="addImg">Add a profile picture</span>
            </label>

            

        {/* //SUBMIT BUTTON */}
            
            <button className="sign-up"disabled={!validName || !validMatch ? true : false}>
                Sign Up
            </button>

           </form>

        {/* //ALREADY REGISTERED? */}

            <p className="login-link1">
                Already have an account? 
                <span>
                    <Link to="/login">
                    <p className="login-link2">Login</p>
                    </Link>
                </span>
            </p>
        </section>
            
        )}
        </>
        
    )
}

export default Register



