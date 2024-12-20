import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoryStart } from '../../../redux/actions/getCategory.action';
import { getSubCategoryStart } from '../../../redux/actions/getSubCategory.action';
import { courseUploadStart } from '../../../redux/actions/uploadCourse.action';

export default function CoursesUpload({ onClose, onCourseUploaded }) {
    const [formData, setFormData] = useState({
        category: '',
        subCategory: '',
        name: '',
        price: '',
        sheet: '',
        instructor: '',
        duration: '',
        lectures: '',
        description: '',
        status: 'Active',
        image: null,
    });
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const dispatch = useDispatch()

    const allCategory = useSelector((state) => state.allCategory.allCategory)
    const allSubCategory = useSelector((state) => state.allSubCategory.allSubCategory)
    // console.log('allSubCategory:', allSubCategory);
    useEffect(() => {
        dispatch(getAllCategoryStart())
        dispatch(getSubCategoryStart())
    }, [dispatch])
    // console.log(allCategory);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setFormData((prevData) => ({
            ...prevData,
            category: selectedCategory,
        }));
        setSelectedCategory(selectedCategory);
        setSelectedSubCategory('');
    };
    const handleSubCategoryChange = (event) => {
        const selectedSubCategory = event.target.value;
        setFormData((prevData) => ({
            ...prevData,
            subCategory: selectedSubCategory,
        }));
        setSelectedSubCategory(selectedSubCategory);
    };

    // image preview
    const inputChange = (event) => {
        const { name, value, files } = event.target;
        if (files) {
            setFormData({ ...formData, [name]: files[0] });

            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // form submit function
    const submitHandler = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('price', formData.price);
        data.append('image', formData.image);
        data.append('sheet', formData.sheet);
        data.append('instructor', formData.instructor);
        data.append('duration', formData.duration);
        data.append('lectures', formData.lectures);
        data.append('description', formData.description);
        data.append('status', formData.status);
        data.append('category', formData.category);
        data.append('subCategoryIds', [selectedSubCategory]);

        dispatch(courseUploadStart(data));
        onCourseUploaded()
        onClose();
        toast.success("Course upload successfully")
    };

    const subCategoryData = allSubCategory ? allSubCategory.data : [];
    return (
        <>
            <div className="d-flex justify-content-between all-cu p-4">
                <h1 className='text-light'>Upload Courses </h1>
                <FontAwesomeIcon className='x-mark' icon={faXmark}
                    onClick={onClose}
                />
            </div>
            <div className='container border mb-4'>
                <form className='mb-4' onSubmit={submitHandler}>
                    <div className='row'>
                        <div className="col-sm-6 d-grid mb-3">
                            <label htmlFor="category" className="form-label text-light">Category</label><br />
                            <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={handleCategoryChange}
                                value={selectedCategory}
                            >
                                <option >Open this select menu</option>
                                {
                                    allCategory?.map((category) => (
                                        <option value={category._id} key={category._id}>{category?.name}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="col-sm-6 mb-3">
                            <label htmlFor="sub" className="form-label text-light">Sub category</label><br />
                            <select
                                className="form-control"
                                aria-label="Default select example"
                                onChange={handleSubCategoryChange}
                                value={selectedSubCategory}
                                disabled={!selectedCategory}
                            >
                                <option >Open this select menu</option>
                                {
                                    subCategoryData?.map((sub) => (
                                        <option value={sub._id} key={sub._id}>{sub?.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="name" className="form-label text-light">Course name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={formData.name}
                                aria-describedby="emailHelp"
                                onChange={inputChange}
                            />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="price" className="form-label text-light">Course fees</label>
                            <input
                                type="number"
                                className="form-control"
                                name="price"
                                value={formData.price}
                                aria-describedby="emailHelp"
                                onChange={inputChange}
                            />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="instructor" className="form-label text-light">Instructor name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="instructor"
                                value={formData.instructor}
                                aria-describedby="emailHelp"
                                onChange={inputChange}
                            />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="lectures" className="form-label text-light">Lectures</label>
                            <input
                                type="number"
                                className="form-control"
                                name="lectures"
                                value={formData.lectures}
                                aria-describedby="emailHelp"
                                onChange={inputChange}
                            />
                        </div>

                    </div>
                    <div className='row'>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="image" className="form-label text-light">Image</label>
                            <input
                                type="file"
                                className="form-control"
                                name="image"
                                aria-describedby="emailHelp"
                                onChange={inputChange}
                            />
                            {imagePreview && (
                                <div className="image-preview">
                                    <img src={imagePreview} alt="img" style={{ maxWidth: '100%', maxHeight: '150px', marginTop: '10px' }} />
                                </div>
                            )}
                        </div>
                        <div className='col-sm-6 mb-3'>
                            <label htmlFor="sheet" className="form-label text-light">Sheet</label>
                            <input
                                type="number"
                                className="form-control"
                                name="sheet"
                                value={formData.sheet}
                                aria-describedby="emailHelp"
                                onChange={inputChange}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 '>
                            <label htmlFor="description" className="form-label text-light">Course description</label><br />
                            <textarea
                                cols={61}
                                rows={4}
                                name="description"
                                value={formData.description}
                                onChange={inputChange}
                            ></textarea>
                        </div>
                        <div className='row'>
                            <div className='col-sm-3 mb-3'>
                                <label htmlFor="duration" className="form-label text-light">Duration</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="duration"
                                    value={formData.duration}
                                    aria-describedby="emailHelp"
                                    onChange={inputChange}
                                />
                            </div>
                            <div className='col-sm-3'>
                                <label htmlFor="status" className="form-label text-light">Status</label><br />
                                <select
                                    className='form-control'
                                    name="status"
                                    // cols={}
                                    value={formData.status}
                                    onChange={inputChange}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className='row d-flex justify-content-center'>
                        <div className='col-sm-4'>
                            <button className="btn btn-primary mt-3 p-2">Submit Course</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
