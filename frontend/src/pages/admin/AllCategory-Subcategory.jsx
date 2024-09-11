import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import CategoryUploads from './uploads/Category-Uploads'
import SubCategoryUpload from './uploads/SubCategory-Upload'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategoryStart } from '../../redux/actions/getCategory.action'
import { updateCategoryStart } from '../../redux/actions/updateCategory.action';
import { getSubCategoryStart } from '../../redux/actions/getSubCategory.action';
import { deleteCategoryStart } from '../../redux/actions/deleteCategory.action';
import moment from "moment"
import { toast } from 'react-toastify';
import { subCategoryUpdateStart } from '../../redux/actions/updateSubCategory.action';
import { deleteSubCategoryStart } from '../../redux/actions/deleteSubCategory.action';

export default function AllCategorySubcategory() {
    const [openUploadCategory, setOpenUploadCategory] = useState(false)
    const [openUploadSubCategory, setOpenUploadSubCategory] = useState(false)
    const [editCategory, setEditCategory] = useState(null);
    const [editCategoryName, setEditCategoryName] = useState('');
    // subcaegories
    const [editSubCategory, setEditSubCategory] = useState(null);
    const [editSubCategoryName, setEditSubCategoryName] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState('');
    const dispatch = useDispatch()

    const allCategory = useSelector((state) => state.allCategory.allCategory)
    const allSubCategory = useSelector((state) => state.allSubCategory.allSubCategory)
    const updateCategoryState = useSelector((state) => state.updateCategory);



    // fetch all category and subCategory
    useEffect(() => {
        dispatch(getAllCategoryStart())
        dispatch(getSubCategoryStart())
    }, [dispatch])

    useEffect(() => {
        if (updateCategoryState.updatedCategory) {
            dispatch(getAllCategoryStart());
        }
    }, [updateCategoryState.updatedCategory, dispatch])

    const handleCategoryUploaded = () => {
        dispatch(getAllCategoryStart());
    };
    const handleSubCategoryUploaded = () => {
        dispatch(getSubCategoryStart());
    };

    const handleEditClick = (category) => {
        setEditCategory(category);
        setEditCategoryName(category.name);
    };
    const handleSubEditClick = (sub) => {
        setEditSubCategory(sub);
        setEditSubCategoryName(sub.name);
        setSelectedCategoryId(sub.category[0]?._id || '');
    };

    // update categories
    const handleEditSubmit = async (event) => {
        event.preventDefault()
        const updatedCategory = {
            ...editCategory,
            name: editCategoryName,
        };

        dispatch(updateCategoryStart(updatedCategory));
        setEditCategory(null);
        setEditCategoryName('');
    };
    // update subcategories
    const handleUpdateSubCategory = async (event) => {
        event.preventDefault()
        const updateSubCategory = {
            ...editSubCategory,
            name: editSubCategoryName,
            category: selectedCategoryId
        }
        dispatch(subCategoryUpdateStart(updateSubCategory))
        setEditSubCategory(null)
        setEditSubCategoryName('')
        setSelectedCategoryId('');
        handleSubCategoryUploaded()

    }

    // delete categories 
    const handleDeleteClick = (id) => {
        dispatch(deleteCategoryStart(id));
        handleCategoryUploaded()
        toast.success('Category deleted')
    };

    // delete subcategory
    const handleDeleteSubCategory = (id) => {
        dispatch(deleteSubCategoryStart(id))
        toast.success('subCategory deleted')
        dispatch(getSubCategoryStart())
    }



    const subCategoryData = allSubCategory ? allSubCategory.data : [];

    return (
        <div className='container'>
            <div className='row'>
                {
                    openUploadCategory && (
                        <CategoryUploads onClose={() => setOpenUploadCategory(false)}
                            onCategoryUploaded={() => handleCategoryUploaded()} />
                    )
                }
                <div className='all-cu d-flex justify-content-between p-4'>
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
                                            <FontAwesomeIcon icon={faTrashCan} onClick={() => handleDeleteClick(category._id)} /></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                {editCategory && (
                    <div className='container border mb-4'>
                        <div className='text-center p-3 '>
                            <h1 className='text-light'>Edit Category</h1>
                        </div>
                        <form onSubmit={(event) => handleEditSubmit(event)}>
                            <div className='row d-flex align-items-center'>
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
                                <div className='col-sm-4'>
                                    <button className="btn btn-success mt-3" type="submit">Update</button>
                                    <button
                                        className="btn btn-danger mt-3 ms-2 mx-3"
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
            </div>
            <div className='row mt-4'>
                {
                    openUploadSubCategory && (
                        <SubCategoryUpload onClose={() => setOpenUploadSubCategory(false)}
                            onSubCategoryUploaded={() => handleSubCategoryUploaded()}
                        />
                    )
                }
                <div className='all-cu d-flex justify-content-between p-4'>
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
                                            onClick={() => handleSubEditClick(sub)}
                                        /> &nbsp;  &nbsp;
                                            <FontAwesomeIcon icon={faTrashCan} onClick={() => handleDeleteSubCategory(sub._id)} /></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                {editSubCategory && (
                    <div className='container border mb-4'>
                        <div className='text-center p-3 '>
                            <h1 className='text-light'>Edit SubCategory</h1>
                        </div>
                        <form onSubmit={(event) => handleUpdateSubCategory(event)}>
                            <div className='row d-flex align-items-center'>
                                <div className="col-sm-4 mb-3">
                                    <label htmlFor="editCategoryName" className="form-label">Subcategory name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="editSubCategoryName"
                                        value={editSubCategoryName}
                                        onChange={(e) => setEditSubCategoryName(e.target.value)}
                                    />
                                </div>
                                <div className="col-sm-4 mb-3">
                                    <label htmlFor="category" className="form-label">Category name</label>
                                    <select
                                        className='form-control'
                                        value={selectedCategoryId}
                                        onChange={(e) => setSelectedCategoryId(e.target.value)}
                                        name='category'
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
                                <div className='col-sm-4'>
                                    <button className="btn btn-success mt-3" type="submit">Update</button>
                                    <button
                                        className="btn btn-danger mt-3 ms-2 mx-3"
                                        type="button"
                                        onClick={() => setEditSubCategory(null)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
            </div>

        </div>
    )
}
