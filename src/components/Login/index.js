import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { InputGroup, FormControl } from 'react-bootstrap'
const Login = () => {
    return (
        <div className="login">
            <Link to="/">

                <img className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
            </Link>


            <div className="login_container">
                <h1>Sign In</h1>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
            </div>
        </div>
    )
}

export default Login
