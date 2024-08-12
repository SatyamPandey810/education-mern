import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import CategoryUploads from './uploads/Category-Uploads'
import SubCategoryUpload from './uploads/SubCategory-Upload'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategoryStart } from '../../redux/actions/getCategory.action'
import moment from "moment"
import { updateCategoryStart } from '../../redux/actions/updateCategory.action';

export default function AllCategorySubcategory() {
    const [openUploadCategory, setOpenUploadCategory] = useState(false)
    const [openUploadSubCategory, setOpenUploadSubCategory] = useState(false)
    const [editCategory, setEditCategory] = useState(null); // State to manage editing
    const [editCategoryName, setEditCategoryName] = useState('');
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch()
    const allCategory = useSelector((state) => state.allCategory.allCategory)


    useEffect(() => {
        dispatch(getAllCategoryStart())
    }, [dispatch])

    const handleCategoryUploaded = () => {
        dispatch(getAllCategoryStart());
    };
    const handleEditClick = (category) => {
        setEditCategory(category);
        setEditCategoryName(category.name);
    };

    const handleEditSubmit = (event) => {
        event.preventDefault();
        if (editCategoryName.trim()) {
            dispatch(updateCategoryStart({ id: editCategory._id, name: editCategoryName }));
            setEditCategory(null); // Close the edit form
            dispatch(getAllCategoryStart()); // Refresh the category list
        }
    };
    return (
        <>
            <div className='row'>
                {
                    openUploadCategory && (
                        <CategoryUploads onClose={() => setOpenUploadCategory(false)}
                            onCategoryUploaded={() => handleCategoryUploaded()} />
                    )
                }
                <div className='all-cu'>
                    <div>
                        <h1 className='text-light'>All category</h1>
                    </div>
                    <div className=''>
                        <button onClick={() => setOpenUploadCategory(true)} className='btn btn-warning'>Upload Category</button>
                    </div>
                </div>
                <div className=''>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className='text-light'>No</th>
                                <th className='text-light'>Category name</th>
                                <th className='text-light'>Upload date</th>
                                <th className='text-light'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allCategory?.map((category, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}.</td>
                                        <td className='text-capitalize'>{category?.name}</td>
                                        <td>{moment(category?.createdAt).format('ll')}</td>
                                        <td className='text-light'><FontAwesomeIcon icon={faPenToSquare}
                                         onClick={() => handleEditClick(category)}
                                        /> &nbsp;  &nbsp;
                                            <FontAwesomeIcon icon={faTrashCan} /></td>
                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='row mt-4'>
                {
                    openUploadSubCategory && (
                        <SubCategoryUpload onClose={() => setOpenUploadSubCategory(false)} />
                    )
                }
                <div className='all-cu'>
                    <div>
                        <h1 className='text-light'>All Sub category</h1>
                    </div>
                    <div className=''>
                        <button onClick={() => setOpenUploadSubCategory(true)} className='btn btn-warning'>Upload Courses</button>
                    </div>
                </div>
                <div className=''>
                    <table className="table table-bordereda">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>First</th>
                                <th>Last</th>
                                <th>Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td >Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {editCategory && (
                <div className='container border mb-4'>
                    <h2>Edit Category</h2>
                    <form onSubmit={handleEditSubmit}>
                        <div className='row'>
                            <div className="col-sm-6 mb-3">
                                <label htmlFor="editCategoryName" className="form-label">Category name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="editCategoryName"
                                    value={editCategoryName}
                                    onChange={(e) => setEditCategoryName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-sm-4'>
                                <button className="btn btn-primary mt-3" type="submit">Update</button>
                                <button
                                    className="btn btn-secondary mt-3 ms-2"
                                    type="button"
                                    onClick={() => setEditCategory(null)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}
