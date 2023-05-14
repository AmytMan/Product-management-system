import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function Error() {
  return (
    <div className='d-flex flex-column vh-100 justify-content-center align-items-center text-danger'>
        <h4 className='my-3'>Oop's Page Not Found !!!</h4>
        <h3 className='my-2'>The page you are looking for may have been deleted, moved, or possibly never existed.</h3>
      <h1 className='fw-bolder my-2'>404</h1>
      <Link to='/'>
        <Button variant="info">Back To Home </Button>
      </Link>
    
    </div>
  )
}

export default Error