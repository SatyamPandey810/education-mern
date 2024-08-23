import React, { useState } from 'react'
import Bloguploads from './uploads/Blog-uploads'

export default function Blog() {
  const [openUploadBlog, setOpenUploadBlog] = useState(false)




  return (
    <div>
      {
        openUploadBlog && (
          <Bloguploads onClose={() => setOpenUploadBlog(false)} />
        )
      }
      <div className='all-cu'>
        <div>
          <h1 className='text-light'>All Blog's</h1>
        </div>
        <div className=''>
          <button onClick ={()=>setOpenUploadBlog(true)}className='btn btn-warning'>Upload Blog</button>
        </div>
      </div>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
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
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
