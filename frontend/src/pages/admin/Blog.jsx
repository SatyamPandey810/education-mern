import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Bloguploads from './uploads/Blog-uploads'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogStart } from '../../redux/actions/blogs/getBlogs.action'
import { updateBlogStart } from '../../redux/actions/blogs/updateBlogs.action';
import { getAllCategoryStart } from '../../redux/actions/getCategory.action';
import { getSubCategoryStart } from '../../redux/actions/getSubCategory.action';



export default function Blog() {
  const [openUploadBlog, setOpenUploadBlog] = useState(false)
  const [editBlog, setEditBlog] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const dispatch = useDispatch()
  const allBlog = useSelector((state) => state.allBlog?.allBlog)
  const allCategory = useSelector((state) => state.allCategory?.allCategory)
  const allSubCategory = useSelector((state) => state.allSubCategory?.allSubCategory)
  
  const subCategoryData = allSubCategory ? allSubCategory.data : [];
  // const blog = useSelector((state) => state.blogUpdate.blog)

  const [formData, setFormData] = useState({
    heading: '',
    image: '',
    loaction: '',
    time: '',
    paragraph: '',
    status: '',
    price: '',
    category: '',
    subCategory: '',
  });
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    dispatch(getBlogStart())
    dispatch(getAllCategoryStart())
    dispatch(getSubCategoryStart())
  }, [dispatch])

  const handleBlogClick = (blog) => {
    setEditBlog(blog)
    setSelectedCategory(blog.subcategory?.[0]?.category?.[0]?._id || '');
    setSelectedSubCategory(blog.subcategory?.[0]?._id || '');
    setFormData({
      category: blog.subcategory?.[0]?.category?.[0]?._id || '',
      subCategory: blog.subcategory?.[0]?._id || '',
      heading: blog.heading || '',
      price: blog.price || '',
      loaction: blog.loaction || '',
      time: blog.time || '',
      paragraph: blog.paragraph || '',
      status: blog.status || 'Active',
      image: null, // No pre-populated file input
    });
    setImagePreview(blog.image || '');
  }


  const handleBlogUploaded = () => {
    dispatch(getBlogStart())
  };

  const inputChange = (event) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
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

  // blog update handller
  const handleSubmit = async (event) => {
    event.preventDefault()

    const formDataToSend = new FormData();
    formDataToSend.append('_id', editBlog._id);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('subCategory', formData.subCategory);
    formDataToSend.append('heading', formData.heading);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('loaction', formData.loaction);
    formDataToSend.append('paragraph', formData.paragraph);
    formDataToSend.append('time', formData.time);
    formDataToSend.append('status', formData.status);
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }
    dispatch(updateBlogStart(formDataToSend))
    setEditBlog(null)
    dispatch(getBlogStart())
   
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
  return (
    <div>
      {
        openUploadBlog && (
          <Bloguploads onClose={() => setOpenUploadBlog(false)}
            onBlogUploaded={handleBlogUploaded}
          />
        )
      }
      {
        editBlog && (
          <form className='mb-4' onSubmit={handleSubmit}>
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
                <label htmlFor="loaction" className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="loaction"
                  value={formData.loaction}
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
                  // value={formData.image}
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
              <div className='col-sm-6 mb-3'>
                <label htmlFor="price" className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  value={formData.price}
                  aria-describedby="emailHelp"
                  onChange={inputChange}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-6 '>
                <label htmlFor="paragraph" className="form-label">Blog description</label><br />
                <textarea
                  cols={61}
                  rows={4}
                  name="paragraph"
                  value={formData.paragraph}
                  onChange={inputChange}
                ></textarea>
              </div>
              <div className='col-sm-6'>
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
            <div className='row d-flex justify-content-center'>
              <div className='col-sm-4'>
                <button className="btn btn-primary mt-3">Submit</button>
                <button
                  className="btn btn-danger mt-3 ms-2 mx-3"
                  type="button"
                  onClick={() => setEditBlog(null)}
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
          <h1 className='text-light'>All Blog's</h1>
        </div>
        <div className=''>
          <button onClick={() => setOpenUploadBlog(true)} className='btn btn-warning'>Upload Blog</button>
        </div>
      </div>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className='text-nowrap text-light'>S no.</th>
              <th className='text-light'>Heading</th>
              <th className='text-light'>Loaction</th>
              <th className='text-light'>Discription</th>
              <th className='text-light'>fees</th>
              <th className='text-light'>Category</th>
              <th className='text-nowrap text-light'>Sub-category</th>
              <th className='text-light'>Image</th>
              <th className='text-light'>Status</th>
              <th className='text-light'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              allBlog?.map((blog, index) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>{blog?.heading}</td>
                  <td>{blog?.loaction}</td>
                  <td>{blog?.paragraph}</td>
                  <td>{blog?.price}/-</td>
                  <td className='text-capitalize'>{blog?.subcategory?.map((sub) =>
                    sub.category?.map((cat) => (
                      <div key={cat._id}>
                        <strong className='text-nowrap'>{cat.name}</strong>
                      </div>
                    ))
                  )}</td>
                  <td className='text-capitalize'>{blog?.subcategory?.map((sub) => (
                    <div key={sub._id}>
                      <strong className='text-nowrap'>{sub.name}</strong>
                    </div>
                  ))}</td>
                  <td><img src={blog?.image} alt='img' style={{ width: "100px", height: "60px", objectFit: "cover" }} /></td>
                  <td>{blog?.status}</td>
                  <td className='text-light'><FontAwesomeIcon icon={faPenToSquare}
                    onClick={() => handleBlogClick(blog)}
                  /> &nbsp;  &nbsp;
                    <FontAwesomeIcon icon={faTrashCan} /></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
