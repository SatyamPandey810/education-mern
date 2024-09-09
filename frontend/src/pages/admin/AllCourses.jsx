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

export default function AllCourses() {
  const [openUploadCourse, setOpenUploadCourse] = useState(false)
  const [editCourse, setEditCourse] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
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
  const allCategory = useSelector((state) => state.allCategory.allCategory)
  const allSubCategory = useSelector((state) => state.allSubCategory?.allSubCategory)
  const subCategoryData = allSubCategory ? allSubCategory.data : [];

  useEffect(() => {
    dispatch(getAllCategoryStart())
    dispatch(getSubCategoryStart())
  }, [dispatch])


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

  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);
    setFormData((prevData) => ({
      ...prevData,
      category: categoryId,
      subCategory: '', 
    }));
    setSelectedSubCategory('');
  };

  const handleSubCategoryChange = (event) => {
    const subCategoryId = event.target.value;
    setSelectedSubCategory(subCategoryId);
    setFormData((prevData) => ({
      ...prevData,
      subCategory: subCategoryId,
    }));
  };

  const handleUpdateCourse = async (event) => {
    event.preventDefault()

    const formDataToSend = new FormData();
    formDataToSend.append('_id', editCourse._id);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('subCategory', formData.subCategory);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('sheet', formData.sheet);
    formDataToSend.append('instructor', formData.instructor);
    formDataToSend.append('duration', formData.duration);
    formDataToSend.append('lectures', formData.lectures);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('status', formData.status);
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }
    try {
      const response = await fetch(summaryApi.updateCourse.url, {
        method: summaryApi.updateCourse.method,
        credentials: 'include',       
        body: formDataToSend,
      });

      const responseData = await response.json();

      if (responseData.success) {
        toast.success(responseData.message);
        setEditCourse(null)
        dispatch(getAllCourseStart())

      } else {
        toast.error(responseData.message || 'Failed to update course');
      }
    } catch (error) {
      toast.error(error.message || 'An error occurred');
      return { success: false, message: error.message };
    }
  }



  useEffect(() => {
    dispatch(getAllCourseStart())
  }, [dispatch])

  const handleCourseUploaded = () => {
    dispatch(getAllCourseStart());
  };

  const deleteCourseHandle = (id) => {
    dispatch(deleteCourseStart(id))
    getAllCourseStart()
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
          <form className='mb-4' onSubmit={handleUpdateCourse}>
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
                <label htmlFor="name" className="form-label">Course name</label>
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
                <label htmlFor="price" className="form-label">Course fees</label>
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
                <label htmlFor="instructor" className="form-label">Instructor name</label>
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
                <label htmlFor="lectures" className="form-label">Lectures</label>
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
                    <img src={imagePreview} alt="img" style={{ maxWidth: '100%', maxHeight: '150px', marginTop: '10px' }} />
                  </div>
                )}
              </div>
              <div className='col-sm-6 mb-3'>
                <label htmlFor="sheet" className="form-label">Sheet</label>
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
                <label htmlFor="description" className="form-label">Course description</label><br />
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
                  <label htmlFor="duration" className="form-label">Duration</label>
                  <input
                    type="text"
                    className="form-control"
                    name="duration"
                    value={formData.duration}
                    aria-describedby="emailHelp"
                    onChange={inputChange}
                  />
                </div>
                <div className='col-sm-2'>
                  <label htmlFor="status" className="form-label">Status</label><br />
                  <select
                    className='form-control'
                    name="status"
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
                <button className="btn btn-primary mt-3">Submit</button>
                <button
                  className="btn btn-danger mt-3 ms-2 mx-3"
                  type="button"
                  onClick={() => setEditCourse(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
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
              <th className='text-nowrap text-light'>No.</th>
              <th className='text-nowrap text-light'>Course Name</th>
              <th className='text-nowrap text-light'>Course Fees</th>
              <th className='text-nowrap text-light'>Sheet</th>
              <th className='text-nowrap text-light'>Instructor name</th>
              <th className='text-nowrap text-light'>Lectures</th>
              <th className='text-nowrap text-light'>Duration</th>
              <th className='text-nowrap text-light'>Description</th>
              <th className='text-nowrap text-light'>Image</th>
              <th className='text-nowrap text-light'>Category</th>
              <th className='text-nowrap text-light'>Subcategory</th>
              <th className='text-nowrap text-light'>Status</th>
              <th className='text-nowrap text-light'>Action</th>
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
                  <td>{course.instructor}</td>
                  <td>{course.lectures}</td>
                  <td>{course.duration}</td>
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
                  <td>{course.status}</td>
                  <td className='text-light'><FontAwesomeIcon icon={faPenToSquare}
                    onClick={() => handleCourseClick(course)}
                  /> &nbsp;  &nbsp;
                    <FontAwesomeIcon icon={faTrashCan}
                      onClick={()=>deleteCourseHandle(course._id)}
                    />
                    </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>



    </div>
  )
}

//ARkQzdXFzZCnqdos
//satyam
//mongodb+srv://satyam:ARkQzdXFzZCnqdos@satyam.hxjb5.mongodb.net/?retryWrites=true&w=majority&appName=satyam
//RthNgOvSFXuepccw