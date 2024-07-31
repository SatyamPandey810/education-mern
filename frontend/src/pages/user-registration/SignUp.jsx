import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import summaryApi from '../../common';
// import { toast } from 'react-toastify';

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}
export default function SignUp() {
    const [showpassword, setShowpassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);
    const [data, setData] = useState(initialState)
    const navigate = useNavigate()

    const togglePasswordVisibility = () => {
        setShowpassword(!showpassword);
    };
    const togglePasswordVisibility2 = () => {
        setshowConfirmPassword(!showConfirmPassword);
    };

    const inputChange = (event) => {
        setData((prevValue) => ({
            ...prevValue,
            [event.target.name]: event.target.value

        }))
    }

    const submit = async (event) => {
        event.preventDefault();
        if (data.password === data.confirmPassword) {
            const dataResponse = await fetch(summaryApi.signUp.url, {
                method: summaryApi.signUp.method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const dataApi = await dataResponse.json()
            if (dataApi.success) {
                toast.success(dataApi.message)
                setTimeout(() => {
                    navigate('/sign-in')
                }, 1000)

                setData({
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });

            }
            if (dataApi.error) {
                toast.error(dataApi.message)

            }
        } else {
            toast.error('Password did not match')
        }

    }




    return (
        <>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className='col-sm-2'>

                    </div>
                    <div className="col-sm-8 col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                        alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">

                                        <form onSubmit={submit}>

                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                {/* <span className="h1 fw-bold mb-0">Logo</span> */}
                                                <h1 className="mb-3 pb-3 fs-2 text-center" style={{ letterSpacing: "1px" }}>Sign up</h1>
                                            </div>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <label className="form-label" htmlFor="name">Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    name="name"
                                                    value={data.name}
                                                    onChange={inputChange}
                                                    required
                                                />
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
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <label className="form-label" htmlFor="confirmPassword">Confirm password</label>
                                                <input
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    className="form-control form-control-lg"
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    value={data.confirmPassword}
                                                    onChange={inputChange}

                                                />
                                                <span className="password-toggle-icon" onClick={togglePasswordVisibility2}>
                                                    <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                                                </span>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-success">Sign-up</button>
                                            </div>

                                        </form>
                                       
                                        <span className="small text-muted">Terms of use.</span><br/>
                                        <span className="small text-muted">Privacy policy</span>

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
