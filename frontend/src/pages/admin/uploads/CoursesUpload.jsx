import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function CoursesUpload({ onClose }) {
    return (
        <>
            <div className="all-cu">
                <h2 className='text-light'>CoursesUpload</h2>
                <FontAwesomeIcon className='x-mark' icon={faXmark}
                    onClick={onClose}
                />
            </div>
            <div className='container border mb-4'>
                <form className='mb-4'>
                    <div className='row'>
                        <div className="col-sm-6 d-grid mb-3">
                            <label for="exampleInputPassword1" className="form-label">Category</label><br />
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="col-sm-6 mb-3">
                            <label for="exampleInputPassword1" className="form-label">Sub category</label><br />
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-sm-6 mb-3">
                            <label for="exampleInputEmail1" className="form-label">Course name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label for="exampleInputEmail1" className="form-label">Course fees</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                    </div>
                    <div className='row'>
                        <div className="col-sm-6 mb-3">
                            <label for="exampleInputEmail1" className="form-label">Image</label>
                            <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className='col-sm-6 mb-3'>
                            <label for="exampleInputEmail1" className="form-label">Sheet</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 '>
                            <label for="exampleInputEmail1" className="form-label">Course description</label><br />
                            <textarea cols={61} rows={4} ></textarea>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-sm-4'>
                            <button className="btn btn-primary mt-3">Submit</button>
                        </div>
                    </div>
                </form>



            </div>

        </>
    )
}
