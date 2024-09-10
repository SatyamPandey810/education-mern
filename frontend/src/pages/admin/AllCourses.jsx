import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import CoursesUpload from './uploads/CoursesUpload'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourseStart } from '../../redux/actions/getCourses.action'
import { getAllCategoryStart } from '../../redux/actions/getCategory.action';
import { getSubCategoryStart } from '../../redux/actions/getSubCategory.action';
import { toast } from 'react-toastify';
import summaryApi from '../../common';
import { deleteCourseStart } from '../../redux/actions/deleteCourse.action';
import CourseUpdate from './updates/CourseUpdate';

export default function AllCourses() {
  const [openUploadCourse, setOpenUploadCourse] = useState(false)
  const [editCourse, setEditCourse] = useState(null);

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
  const [imagePreview, setImagePreview] = useState('');
  const dispatch = useDispatch()

  const allCourse = useSelector((state) => state.allCourse?.allCourse)
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const allCategory = useSelector((state) => state.allCategory.allCategory)
  const allSubCategory = useSelector((state) => state.allSubCategory?.allSubCategory)
  const subCategoryData = allSubCategory ? allSubCategory.data : [];
  const courses = useSelector((state) => state.findCourseByCategoryAndSubcategory.courses);


  useEffect(() => {
    dispatch(getAllCategoryStart())
    dispatch(getSubCategoryStart())
    dispatch(getAllCourseStart())
  }, [dispatch])

  // find course category and subcategory wise
  const separateCoursesByCategory = () => {
    const categorizedCourses = {};
    courses.forEach((category) => {
      const categoryName = category._id;

      if (!categorizedCourses[categoryName]) {
        categorizedCourses[categoryName] = [];
      }
      category.subcategories.forEach((subcategory) => {
        subcategory.courses.forEach((course) => {
          categorizedCourses[categoryName].push(course);
        });
      });
    });

    return categorizedCourses;
  };

  const categorizedCourses = separateCoursesByCategory();
  console.log(categorizedCourses);


  const handleCourseClick = (course) => {
    setEditCourse(course)
    setSelectedCategory(course.subcategory?.[0]?.category?.[0]?._id || '');
    setSelectedSubCategory(course.subcategory?.[0]?._id || '');
    setFormData({
      category: course.subcategory?.[0]?.category?.[0]?._id || '',
      subCategory: course.subcategory?.[0]?._id || '',
      name: course.name || '',
      price: course.price || '',
      sheet: course.sheet || '',
      instructor: course.instructor || '',
      duration: course.duration || '',
      lectures: course.lectures || '',
      description: course.description || '',
      status: course.status || 'Active',
      image: null,
    });
    setImagePreview(course.image || '');
  }

  const handleCourseUploaded = () => {
    dispatch(getAllCourseStart());
  };

  const deleteCourseHandle = (id) => {
    dispatch(deleteCourseStart(id))
    dispatch(getAllCourseStart());
  }


  return (
    <div>
      {
        openUploadCourse && (
          <CoursesUpload onClose={() => setOpenUploadCourse(false)}
            onCourseUploaded={() => handleCourseUploaded()}
          />
        )
      }
      {
        editCourse && (
          <CourseUpdate
            handleCourseClick={handleCourseClick}
            course={editCourse}
            onClose={() => setEditCourse(null)}
            onCourseUploaded={() => handleCourseUploaded()}
          />
        )
      }

      <div className='all-cu'>
        <div className="d-flex justify-content-between align-items-center p-3">

          <div>
            <h1 className='text-light'>Courses</h1>
          </div>
          <div className=''>
            <button onClick={() => setOpenUploadCourse(true)} className='btn btn-warning'>Upload Courses</button>
          </div>
        </div>
      </div>

      <div className='p-2'>
        {Object.keys(categorizedCourses).length > 0 ? (
          Object.entries(categorizedCourses).map(([categoryName, courses], index) => (
            <div key={categoryName}>
              <h2 className='text-light mt-3 mb-3'>Category:-{categoryName}</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className='text-nowrap text-light'>No.</th>
                    <th className='text-nowrap text-light'>Course Name</th>
                    <th className='text-nowrap text-light'>Course Fees</th>
                    <th className='text-nowrap text-light'>Sheet</th>
                    <th className='text-nowrap text-light'>Instructor Name</th>
                    <th className='text-nowrap text-light'>Lectures</th>
                    <th className='text-nowrap text-light'>Duration</th>
                    <th className='text-nowrap text-light'>Description</th>
                    <th className='text-nowrap text-light'>Image</th>                   
                    <th className='text-nowrap text-light'>Status</th>
                    <th className='text-nowrap text-light'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.length > 0 ? (
                    courses.map((course, index) => (
                      <tr key={course._id}>
                        <td>{index + 1}.</td>
                        <td className='text-capitalize'>{course.name}</td>
                        <td>{course.price} /-</td>
                        <td>{course.sheet}</td>
                        <td>{course.instructor}</td>
                        <td>{course.lectures}</td>
                        <td>{course.duration}</td>
                        <td className='text-capitalize'>{course.description}</td>
                        <td>
                          {course.image && (
                            <img
                              src={course.image}
                              alt='course'
                              style={{ width: "100px", height: "60px", objectFit: "cover" }}
                            />
                          )}
                        </td>
                       
                        <td>{course.status}</td>
                        <td className='text-light'>
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            onClick={() => handleCourseClick(course)}
                          />
                          &nbsp; &nbsp;
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            onClick={() => deleteCourseHandle(course._id)}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="13" className='text-center'>No courses available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>


    </div>
  )
}

//ARkQzdXFzZCnqdos
//satyam
//mongodb+srv://satyam:ARkQzdXFzZCnqdos@satyam.hxjb5.mongodb.net/?retryWrites=true&w=majority&appName=satyam
//RthNgOvSFXuepccw