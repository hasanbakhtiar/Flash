import React from 'react'

const Contact = () => {
  return (
  <div className="row align-items-center g-lg-5 py-5">
 
  <div className="col-md-12 mx-auto col-lg-5">
    <h1 className='my-5 text-center '>Contact now</h1>
    <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">

    <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingPassword" placeholder="Name" />
        <label htmlFor="floatingPassword">Name</label>
      </div>

      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingPassword" placeholder="Surname" />
        <label htmlFor="floatingPassword">Surname</label>
      </div>

      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingPassword" placeholder="Phone" />
        <label htmlFor="floatingPassword">Tel</label>
      </div>
        
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Email address</label>
      </div>
   
      
      <button className="w-100 btn btn-lg btn-primary" type="submit">Send</button>
      <hr className="my-4" />
    </form>
  </div>
</div>

  )
}

export default Contact