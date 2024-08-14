import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import CategoryUploads from './uploads/Category-Uploads'
import SubCategoryUpload from './uploads/SubCategory-Upload'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategoryStart } from '../../redux/actions/getCategory.action'
import moment from "moment"
import { updateCategoryStart } from '../../redux/actions/updateCategory.action';
import { getSubCategoryStart } from '../../redux/actions/getSubCategory.action';

export default function AllCategorySubcategory() {
    const [openUploadCategory, setOpenUploadCategory] = useState(false)
    const [openUploadSubCategory, setOpenUploadSubCategory] = useState(false)
    const [editCategory, setEditCategory] = useState(null);
    const [editCategoryName, setEditCategoryName] = useState('');
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch()

    const allCategory = useSelector((state) => state.allCategory.allCategory)

    const allSubCategory = useSelector((state) => state.allSubCategory.allSubCategory)
    const updateCategoryState = useSelector((state) => state.updateCategory);
// console.log(allSubCategory);




    useEffect(() => {
        dispatch(getAllCategoryStart())
    }, [dispatch])

    useEffect(() => {
        if (updateCategoryState.updatedCategory) {
            dispatch(getAllCategoryStart());
        }
    }, [updateCategoryState.updatedCategory, dispatch])

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
            setEditCategory(null);
            dispatch(getAllCategoryStart());
        }
    };

    // subcategories functionalities
    useEffect(() => {
        dispatch(getSubCategoryStart())
    }, [dispatch])
    const subCategoryData = allSubCategory ? allSubCategory.data : [];

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
                        <button onClick={() => setOpenUploadSubCategory(true)} className='btn btn-warning'>Upload Subcategory</button>
                    </div>
                </div>
                <div className=''>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Upload date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                subCategoryData?.map((sub, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}.</td>
                                        <td className='text-capitalize'>{sub?.name}</td>
                                        <td className='text-capitalize'> {sub?.category?.map((cat) => cat.name).join(', ')}</td>
                                        <td>{moment(sub?.createdAt).format('ll')}</td>
                                        <td className='text-light'><FontAwesomeIcon icon={faPenToSquare}
                                        /> &nbsp;  &nbsp;
                                            <FontAwesomeIcon icon={faTrashCan} /></td>
                                    </tr>
                                ))
                            }
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
