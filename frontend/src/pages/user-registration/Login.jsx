import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
            <div className="pagehding-sec">
                <div className="images-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-heading">
                                <h1>Login</h1>
                            </div>
                            <div className="breadcrumb-list">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-us-sec row mt-5 pb-100">
                <div className='col-sm-4'>

                </div>
                <div className="col-sm-8 col-xl-10">
                    <div className="card" style={{ borderRadius: "1rem" }}>
                        <div className="row g-0">
                            {/* <div className="col-md-6 col-lg-5 d-none d-md-block">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                    alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                            </div> */}
                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                <div className="card-body p-4 p-lg-5 text-black">

                                    <form onSubmit={submit}>

                                        <div className="d-flex align-items-center mb-3 pb-1">
                                            {/* <span className="h1 fw-bold mb-0">Logo</span> */}
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
                                        {/* <span className="small text-muted">Privacy policy</span> */}
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
