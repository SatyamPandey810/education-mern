import React, { useEffect, useState } from 'react'
import CoursesUpload from './uploads/CoursesUpload'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourseStart } from '../../redux/actions/getCourses.action'

export default function AllCourses() {
  const [openUploadCourse, setOpenUploadCourse] = useState(false)
  const dispatch = useDispatch()

  const allCourse = useSelector((state) => state.allCourse?.allCourse)
  console.log(allCourse);


  useEffect(() => {
    dispatch(getAllCourseStart())
  }, [dispatch])

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
        <table className="table table-bordered ">
          <thead>
            <tr>
              <th className='text-light'>No.</th>
              <th className='text-light'>Course Name</th>
              <th className='text-light'>Course Fees</th>
              <th className='text-light'>Sheet</th>
              <th className='text-light'>Description</th>
              <th className='text-light'>Image</th>
              <th className='text-light'>Category</th>
              <th className='text-light'>Subcategory</th>
            </tr>
          </thead>
          <tbody>
            {
              allCourse?.map((course, index) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td className='text-capitalize'>{course.name}</td>
                  <td>{course.price} /-</td>
                  <td>{course.sheet}</td>
                  <td className='text-capitalize'>{course.description}</td>
                  <td><img src={course?.image} alt='img' style={{ width: "100px", height: "60px", objectFit: "cover" }} /></td>
                  <td className='text-capitalize'>{course.subcategory?.map((sub) =>
                    sub.category?.map((cat) => (
                      <div key={cat._id}>
                        <strong>{cat.name}</strong>
                      </div>
                    ))
                  )}</td>
                  <td className='text-capitalize'>{course.subcategory?.map((sub) => (
                    <div key={sub._id}>
                      <strong>{sub.name}</strong>
                    </div>
                  ))}</td>

                </tr>
              ))
            }
          </tbody>
        </table>
      </div>



    </div>
  )
}

