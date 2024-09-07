import React, {  useState } from 'react'
import {   useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import summaryApi from '../../common'
import { toast } from 'react-toastify'

const initialState = {
    email: '',
    password: ''

}
export default function Login() {
    const [showpassword, setShowpassword] = useState(false);
    const [data, setData] = useState(initialState)
    const navigate = useNavigate()
    const inputChange = (event) => {
        setData((prevValue) => ({
            ...prevValue,
            [event.target.name]: event.target.value

        }))

    }

    const togglePasswordVisibility = () => {
        setShowpassword(!showpassword);
    };

    const signUpPage = () => {
        navigate('/sign-up')
    }

    const submit = async (event) => {
        event.preventDefault()

        const dataResponse = await fetch(summaryApi.login.url, {
            method: summaryApi.login.method,
            credentials: "include",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const dataApi = await dataResponse.json()
        if (dataApi.success) {
            toast.success(dataApi.message)
            setTimeout(() => {
                navigate('/')
            }, 2000)
        }
        if (dataApi.error) {
            toast.error(dataApi.message)

        }
    }
   


    return (
        <>
            {/* <div class="login-form">
                <form onSubmit={submit}>
                    <h1>Login</h1>
                    <div class="content">
                        <div class="input-field">
                            <input
                                type="email"
                                placeholder="Email"
                                id="email"
                                name="email"
                                onChange={inputChange}
                                value={data.email}
                                required
                                autocomplete="nope"
                            />
                        </div>
                        <div class="input-field">
                            <input
                                type={showpassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={data.password}
                                onChange={inputChange}
                                placeholder="Password"
                                autocomplete="new-password"
                            />
                            <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={showpassword ? faEyeSlash : faEye} />
                            </span>
                        </div>
                        <a href="#" class="link">Forgot Your Password?</a>
                    </div>
                    <div class="action">
                        <button onClick={homePage}>Sign in</button>
                        <button onClick={signUpPage}>Register</button>
                    </div>
                </form>
            </div> */}

             <div className="  row d-flex align-items-center justify-content-center mt-2 pb-100">               
                <div className="col-sm-4 col-xl-10">
                    <div className="" style={{ borderRadius: "1rem" }}>
                        <div className="row g-0 d-flex align-items-center">
                            <div className="col-md-6 col-lg-4 d-none d-md-block log-img">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                    alt="login form" className="img-fluid"  />
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="p-4 p-lg-5 text-black">
                                    <form onSubmit={submit}>

                                        <div className="d-flex align-items-center mb-3 pb-1">
                                         
                                            <h1 className="mb-3 pb-3  text-center" style={{ letterSpacing: "1px" }}>Login</h1>
                                        </div>

                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <label className="form-label" htmlFor="email">Email address</label>
                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
                                                id="email"
                                                name="email"
                                                onChange={inputChange}
                                                value={data.email}
                                                required
                                            />
                                        </div>

                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <label className="form-label" htmlFor="password">Password</label>
                                            <input
                                                type={showpassword ? "text" : "password"}
                                                id="password"
                                                className="form-control form-control-lg"
                                                name="password"
                                                value={data.password}
                                                onChange={inputChange}

                                            />
                                            <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                                <FontAwesomeIcon icon={showpassword ? faEyeSlash : faEye} />
                                            </span>
                                        </div>
                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-success">Login</button>
                                        </div>
                                    </form>
                                    <div className="pt-1 mb-4">
                                        <button onClick={signUpPage} className="btn btn-primary">Sign-up</button>
                                    </div>
                                    <div>
                                        <h3 className="small text-muted">Forget password ?</h3><br />
                                      
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> 
        </>
    )
}
