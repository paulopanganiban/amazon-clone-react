import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase'
const Login = () => {
    const history= useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = e => {
        e.preventDefault()

       auth.signInWithEmailAndPassword(email, password).then(
           auth => {
               history.push('/')
           }
       ).catch(
           error => alert(error.message)
       )
    }
    const register = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password).then(
            (auth) => { 
                console.log(auth)
                if (auth) {
                    history.push('/')
                }
            }

        ).catch(
            error => alert(error.message)
        )
    }
    const signInDemo = e => {
        e.preventDefault()
        const email = "demo@gmail.com"
        const password = "demo@gmail.com"
        // email, password
        auth.signInWithEmailAndPassword(email, password).then(
            auth => {
                history.push('/')
            }
        ).catch(
            error => alert(error.message)
        )
    }
    return (
        <div className="login">
            <Link to="/">

                <img className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
            </Link>


            <div className="login_container">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button onClick={signIn} type="submit" className="btn btn-warning login_button">Sign in</button>
                </form>
                <p style={{padding: '10px', marginBottom: '0',}}>
                    By signing-in you agree to Amazon's Clone Project
                    Conditions of Use & Sale. Please see your Privacy Notice, our 
                    Cookies Notice and our Interest-Based ads.
                </p>

                <button onClick={register} className="btn btn-primary login_registerButton">Create your Amazon Account</button>
                <button onClick={signInDemo} className="mt-3 btn btn-info login_registerButton">Sign in using a Demo Account</button>
            </div>
        </div>
    )
}

export default Login
