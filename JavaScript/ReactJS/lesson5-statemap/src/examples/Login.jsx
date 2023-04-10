import React, { Component } from 'react'

const user = {
  dataemail:"info@examaple.com",
  datapass:'info123'
}


 class Login extends Component {

  constructor(){
    super();
    this.state ={
      email:"",
      pass:"",
      alertText : "",
      alertColor:""
    }

  }


  loginSubmit=(e)=>{
    e.preventDefault();
    if (!this.state.email || !this.state.pass) {
        this.setState({
          alertText : "Please, fill input.",
          alertColor:"warning"
        })
    }else{
      if (this.state.email === user.dataemail && this.state.pass === user.datapass) {
      this.setState({
        alertText : "Login is successful.",
        alertColor:"success"
      })
        
      }else{
      this.setState({
        alertText : "Email or password is wrong.",
        alertColor:"danger"
      })

      }
    }
  }
  render() {
    return (
      <div>
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h1 className='my-5'>Login Page</h1>
          <div className={`alert alert-${this.state.alertColor}`}>{this.state.alertText}</div>
          <div className="col-6">
              <form onSubmit={this.loginSubmit}>
                <div className="mb-3">
                  <label  className="form-label">Email address</label>
                  <input type="email" className="form-control" onChange={(e)=>{
                    this.setState({
                      email:e.target.value
                    })
                  }} />
                </div>
                <div className="mb-3">
                  <label  className="form-label">Password</label>
                  <input type="password" className="form-control" onChange={(e)=>{
                    this.setState({
                      pass:e.target.value
                    })
                  }} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
  
          </div>
        </div>
      </div>
    )
  }
}


export default Login