import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { GET_CATEGORY_UPLOAD_START } from '../../../redux/constants/courses/category-constants';


export default function CategoryUploads({ onClose, onCategoryUploaded }) {
    const dispatch = useDispatch()
    const [categoryName, setCategoryname] = useState('')



    const inputChange = (event) => {
        setCategoryname(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (categoryName.trim()) {
            dispatch({
                type: GET_CATEGORY_UPLOAD_START,
                payload: { name: categoryName },

            })
            onCategoryUploaded()
            onClose()
        }
    }

    return (
        <>
            <div>
                <div className="all-cu d-flex justify-content-between p-4">
                    <h1 className='text-light'>Upload categories</h1>
                    <FontAwesomeIcon className='x-mark' icon={faXmark}
                        onClick={onClose}
                    />
                </div>
                <div className='container border mb-4'>
                    <form className='mb-4' onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className="col-sm-6 mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Category name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="categoryName"
                                    name='name'
                                    value={categoryName}
                                    onChange={inputChange}
                                    aria-describedby="emailHelp"
                                />
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
