import React, { useState } from 'react'
import CoursesUpload from './uploads/CoursesUpload'

export default function AllCourses() {
  const [openUploadCourse, setOpenUploadCourse] = useState(false)

  return (
    <div>
      {
        openUploadCourse && (
          <CoursesUpload onClose={() => setOpenUploadCourse(false)} />
        )
      }
      <div className='all-cu'>
        <div>
          <h1 className='text-light'>All Courses</h1>
        </div>
        <div className=''>
          <button onClick={() => setOpenUploadCourse(true)} className='btn btn-warning'>Upload Courses</button>
        </div>
      </div>
      <div className=''>
        <table className="table table-bordered table-hover">
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
  )
}

