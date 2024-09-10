import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoryStart } from '../../../redux/actions/getCategory.action';
import { getSubCategoryStart } from '../../../redux/actions/getSubCategory.action';
import { getAllCourseStart } from '../../../redux/actions/getCourses.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { updateCourseStart } from '../../../redux/actions/updateCourse.action';

export default function CourseUpdate({ course, onClose,onCourseUploaded }) {

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
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const allCategory = useSelector((state) => state.allCategory.allCategory)
  const allSubCategory = useSelector((state) => state.allSubCategory?.allSubCategory)
  const subCategoryData = allSubCategory ? allSubCategory.data : [];
  const [editCourse, setEditCourse] = useState(null);
  const dispatch = useDispatch()

  const handleUpdateCourse = async (event) => {
    event.preventDefault()
    const formDataToSend = new FormData();
    formDataToSend.append('_id', course._id);
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
    dispatch(updateCourseStart(formDataToSend))
    setEditCourse(null)
    onClose()
    onCourseUploaded()
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

  useEffect(() => {
    dispatch(getAllCategoryStart())
    dispatch(getSubCategoryStart())
    dispatch(getAllCourseStart())
    if (course) {
      setFormData({
        category: course.category || '',
        subCategory: course.subCategory || '',
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
      setSelectedCategory(course.category || '');
      setSelectedSubCategory(course.subCategory || '');
    }
  }, [dispatch, course])




  return (
    <div className='container all-cu mb-4'>
      <div className="d-flex justify-content-between border-bottom p-4">
        <h1 className='text-light'>Update Course </h1>
        <FontAwesomeIcon className='x-mark' icon={faXmark}
          onClick={onClose}
        />
      </div>
      <form className='mb-4 p-4' onSubmit={handleUpdateCourse}>
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
            <div className='col-sm-2'>
              <label htmlFor="status" className="form-label text-light">Status</label><br />
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
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
