import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategoryStart } from '../../../redux/actions/getCategory.action'
import { getSubCategoryStart } from '../../../redux/actions/getSubCategory.action'
import { blogUploadStart } from '../../../redux/actions/blogs/blogUpload.action';
import { toast } from 'react-toastify';

export default function Bloguploads({ onClose, onBlogUploaded }) {
    const [imagePreview, setImagePreview] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const allCategory = useSelector((state) => state.allCategory.allCategory)
    const allSubCategory = useSelector((state) => state.allSubCategory.allSubCategory)
    const dispatch = useDispatch()
    // const initialFormData = {
    //     heading: "",
    //     image: null,
    //     loaction: "",
    //     time: "",
    //     price: "",
    //     paragraph: "",
    //     status: "Active",
    //     category: '',
    //     subCategory: '',
    // }
    const [formData, setFormData] = useState({
        heading: "",
        image: null,
        loaction: "",
        time: "",
        price: "",
        paragraph: "",
        status: "Active",
        category: '',
        subCategory: '',
    })

    useEffect(() => {
        dispatch(getAllCategoryStart())
        dispatch(getSubCategoryStart())
    }, [dispatch])

    // category handller
    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setFormData((prevData) => ({
            ...prevData,
            category: selectedCategory,
        }));
        setSelectedCategory(selectedCategory);
        setSelectedSubCategory('');
    };

    //subCategory handller
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


    const submitHandler = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('heading', formData.heading);
        data.append('price', formData.price);
        data.append('image', formData.image);
        data.append('loaction', formData.loaction);
        data.append('paragraph', formData.paragraph);
        data.append('status', formData.status);
        data.append('category', formData.category);
        data.append('subCategoryIds', [selectedSubCategory]);

        dispatch(blogUploadStart(data));
        onClose();
        onBlogUploaded()
        toast.success("Blog upload successfully")
    }





    const subCategoryData = allSubCategory ? allSubCategory.data : [];
    return (
        <>
            <div className="all-cu">
                <h2 className='text-light'>Upload Blog's</h2>
                <FontAwesomeIcon className='x-mark' icon={faXmark}
                    onClick={onClose}
                />
            </div>
            <div className='container border mb-4'>
                <form className='mb-4' onSubmit={submitHandler}>
                    <div className='row'>
                        <div className="col-sm-6 d-grid mb-3">
                            <label htmlFor="category" className="form-label">Category</label><br />
                            <select
                                className="form-select"
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
                            <label htmlFor="sub" className="form-label">Sub category</label><br />
                            <select
                                className="form-select"
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
                            <label htmlFor="heading" className="form-label">Heading</label>
                            <input
                                type="text"
                                className="form-control"
                                name="heading"
                                value={formData.heading}
                                aria-describedby="emailHelp"
                                onChange={inputChange}
                            />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="price" className="form-label">Fees</label>
                            <input
                                type="test"
                                className="form-control"
                                name="price"
                                value={formData.price}
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
                            {imagePreview && (
                                <div className="image-preview">
                                    <img src={imagePreview} alt="Image preview" style={{ maxWidth: '100%', maxHeight: '150px', marginTop: '10px' }} />
                                </div>
                            )}
                        </div>
                        <div className='col-sm-6 mb-3'>
                            <label htmlFor="time" className="form-label">Time</label>
                            <input
                                type="time"
                                className="form-control"
                                name="time"
                                value={formData.time}
                                aria-describedby="emailHelp"
                                onChange={inputChange}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 '>
                            <label htmlFor="paragraph" className="form-label">Paragraph/description</label><br />
                            <textarea
                                cols={61}
                                rows={4}
                                name="paragraph"
                                value={formData.paragraph}
                                onChange={inputChange}
                            ></textarea>
                        </div>
                        <div className='col-sm-6 mb-3'>
                            <label htmlFor="status" className="form-label">Status</label><br />
                            <select
                                className='form-control'
                                name="status"
                            // value={formData.status}
                            // onChange={inputChange}
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label htmlFor="loaction" className="form-label">loaction</label>
                            <input
                                type="test"
                                className="form-control"
                                name="loaction"
                                value={formData.loaction}
                                aria-describedby="emailHelp"
                                onChange={inputChange}
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
        </>
    )
}
