import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { COURSE_UPLOAD_START } from '../../../redux/constants/courses/course-constants';

export default function CoursesUpload({ onClose }) {
    const [formData, setFormData] = useState({
        category: '',
        subCategory: '',
        name: '',
        price: '',
        sheet: '',
        description: '',
        image: null,
    });
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const inputChange = (event) => {
        const { name, value, files } = event.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value, // Handle file input separately
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        event.preventDefault();

        // Validation
        if (!formData.courseName || !formData.courseName.trim()) {
            setError('Course name is required');
            return;
        }
        if (!formData.category || !formData.subCategory) {
            setError('Please select a category and subcategory');
            return;
        }

        setError(''); // Clear any previous errors

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        dispatch({
            type: COURSE_UPLOAD_START,
            payload: formDataToSend,
        });
    };

    return (
        <>
            <div className="all-cu">
                <h2 className='text-light'>CoursesUpload</h2>
                <FontAwesomeIcon className='x-mark' icon={faXmark}
                    onClick={onClose}
                />
            </div>
            <div className='container border mb-4'>
                <form className='mb-4' onSubmit={submitHandler}>
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
                            <label htmlFor="name" className="form-label">Course name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                aria-describedby="emailHelp"
                                onChange={inputChange}
                            />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="price" className="form-label">Course fees</label>
                            <input
                                type="number"
                                className="form-control"
                                name="price"
                                aria-describedby="emailHelp"
                                onChange={inputChange}
                            />
                        </div>

                    </div>
                    <div className='row'>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="image" className="form-label">Image</label>
                            <input
                                type="file"
                                className="form-control"
                                name="image"
                                aria-describedby="emailHelp"
                                onChange={inputChange}
                            />
                        </div>
                        <div className='col-sm-6 mb-3'>
                            <label htmlFor="sheet" className="form-label">Sheet</label>
                            <input
                                type="number"
                                className="form-control"
                                name="sheet"
                                aria-describedby="emailHelp"
                                onChange={inputChange}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 '>
                            <label htmlFor="description" className="form-label">Course description</label><br />
                            <textarea
                                cols={61}
                                rows={4}
                                name="description"
                                onChange={inputChange}
                            ></textarea>
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
