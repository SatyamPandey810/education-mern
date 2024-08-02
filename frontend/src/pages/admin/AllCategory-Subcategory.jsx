import React, { useState } from 'react'
import CategoryUploads from './uploads/Category-Uploads'
import SubCategoryUpload from './uploads/SubCategory-Upload'

export default function AllCategorySubcategory() {
    const [openUploadCategory, setOpenUploadCategory] = useState(false)
    const [openUploadSubCategory, setOpenUploadSubCategory] = useState(false)

    return (
        <>
            <div className='row'>
                {
                    openUploadCategory && (
                        <CategoryUploads onClose={() => setOpenUploadCategory(false)} />
                    )
                }
                <div className='all-cu'>
                    <div>
                        <h1 className='text-light'>All category</h1>
                    </div>
                    <div className=''>
                        <button onClick={() => setOpenUploadCategory(true)} className='btn btn-warning'>Upload Courses</button>
                    </div>
                </div>
                <div className=''>
                    <table class="table table-bordered table-hover">
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
                    <table class="table table-bordered table-hover">
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
        </>
    )
}
