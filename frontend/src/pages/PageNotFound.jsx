import React from 'react'

export default function PageNotFound() {
    return (
        <div className='container mb-5'>
            <h1 className='text-center '>Page not found</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <img src="assets/img/not-found.png" alt='page-not found' width={500} />
            </div>
        </div>
    )
}
