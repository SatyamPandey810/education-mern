import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
        <div className='container'>
            <div className="row mt-2 mb-4">
                <div className="col-sm-12 col-xl-12 ">
                    <div className="row d-flex align-itmes-center justify-content-center" style={{ borderRadius: "1rem" }}>
                        <div className='log-in-img'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                        </div>
                        <div className="col-md-4 text-black" style={{ backgroundColor: "rgb(181 189 76 / 69%)" }}>
                            <form onSubmit={submit}>
                                <div className="text-center p-3">
                                    <h1 className="text-center" style={{ letterSpacing: "1px" }}>Login</h1>
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
                                <div className='d-flex align-items-center'>
                                    <div className="pt-1 mb-4">
                                        <button className="btn btn-success">Login</button>
                                    </div>
                                    {/* <div className="pt-1 mb-4 mx-3">
                                        <button className="btn btn-primary">Log in with google</button>
                                        </div> */}
                                </div>
                                <h3 className="text-muted" onClick={signUpPage} >Create a  <span className='new-account'> new account ?</span></h3>
                            </form>
                            <div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
