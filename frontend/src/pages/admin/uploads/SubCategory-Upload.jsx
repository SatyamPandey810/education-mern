import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { SUBCATEGORY_UPLOAD_START } from '../../../redux/constants/courses/subCategory-constants';
import { useDispatch, useSelector } from 'react-redux';

export default function SubCategoryUpload({ onClose, onSubCategoryUploaded }) {
    const [subCategoryName, setSubCategoryname] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('');
    const dispatch = useDispatch()
    const allCategory = useSelector((state) => state.allCategory.allCategory)

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const inputChange = (event) => {
        setSubCategoryname(event.target.value);
    }

    const SubCategoryHandleSubmit = (event) => {
        event.preventDefault()
        if (subCategoryName.trim() && selectedCategory) {
            dispatch({
                type: SUBCATEGORY_UPLOAD_START,
                payload: { name: subCategoryName, categoryIds: [selectedCategory] }
            })
            onClose()
            onSubCategoryUploaded()
        }
    }
    return (
        <>
            <div>
                <div className="all-cu d-flex justify-content-between p-4">
                    <h1 className='text-light'>Upload Subcategories</h1>
                    <FontAwesomeIcon className='x-mark' icon={faXmark}
                        onClick={onClose}
                    />
                </div>
                <div className='container border mb-4'>
                    <form className='mb-4' onSubmit={SubCategoryHandleSubmit}>

                        <div className='row'>
                            <div className="col-sm-6 mb-3">
                                <label for="exampleInputEmail1" className="form-label">Sub category name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="subCategoryName"
                                    name="name"
                                    value={subCategoryName}
                                    onChange={inputChange}
                                    aria-describedby="emailHelp"
                                />
                            </div>

                            <div className="col-sm-6 mb-3">
                                <label htmlFor="category" className="form-label">Category name</label>
                                <select
                                    className='form-control'
                                    name='category'
                                    onChange={handleCategoryChange}
                                    value={selectedCategory}
                                    required
                                >
                                    <option value=''>Select category</option>
                                    {
                                        allCategory.map((category) => {
                                            return (
                                                <option value={category._id} key={category._id}>{category.name}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-sm-4'>
                                <button className="btn btn-primary mt-3">Submit</button>
                            </div>
                        </div>
                    </form>
                </div >
            </div >


        </>
    )
}
