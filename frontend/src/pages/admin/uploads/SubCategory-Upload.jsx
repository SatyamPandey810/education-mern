import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function SubCategoryUpload({onClose}) {
    return (
        <>
            <div>
                <div className="all-cu">
                    <h2 className='text-light'>Upload Subcategories</h2>
                    <FontAwesomeIcon className='x-mark' icon={faXmark}
                        onClick={onClose}
                    />
                </div>
                <div className='container border mb-4'>
                    <form className='mb-4'>

                        <div className='row'>
                            <div className="col-sm-6 mb-3">
                                <label for="exampleInputEmail1" className="form-label">Category name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-sm-4'>
                                <button className="btn btn-primary mt-3">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}
