import { Component } from "react";
import React from "react"
import '..\\node_modules\\bootstrap\\dist\\css\\bootstrap.min.css'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.nameBox = React.createRef()
    this.emailBox = React.createRef()
    this.phoneBox = React.createRef()
    this.addressBox = React.createRef()

    this.state = {
      student:
        [
          { id: 1, name: "Ashiq", email: "abc@gmail.com", phno: 999047475, address: "khandwa" },
          { id: 2, name: "Aamin", email: "abc@gmail.com", phno: 999047475, address: "Indore" },
          { id: 3, name: "Fardin", email: "abc@gmail.com", phno: 999047475, address: "Pune" },

        ],
      errmsg: " ",
      duplicateroll: false,
      selectid: undefined,
    }

  }

  submi = (event) => {

    var sub = {
      id: this.state.student.length + 1,
      name: this.nameBox.current.value,
      email: this.emailBox.current.value,
      phno: this.phoneBox.current.value,
      address: this.addressBox.current.value,
    }
    this.setState({ student: [...this.state.student, sub] })


    event.preventDefault()
    event.target.reset()


  }

  delete = (event) => {


    var btn = event.target
    var dlt = btn.getAttribute("dataroll")
    var x = window.confirm("Do you really want to delete it")
    if (x == true) {
      this.setState({ student: this.state.student.filter(str => str.id != dlt) })
    }


  }





  render() {


    return <div>





      <div className="modal fade  modal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add Contacts</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form onSubmit={this.submi}>
                <div className="row">

                  <div className="col-md-6 mt-3">
                    <label className="form-label fw-bold p-2 border-2 rounded-5">Name</label>
                    <input type="text" ref={this.nameBox} className="form-control" placeholder="Enter Your Name" required></input>
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label fw-bold p-2 border-2 rounded-5">Email</label>
                    <input type="email" ref={this.emailBox} className="form-control" placeholder="Enter Your Email" required ></input>
                  </div>

                  <div className="col-md-6 mt-3">
                    <label className="form-label fw-bold p-2 border-2 rounded-5">Phone Number</label>
                    <input type="number" ref={this.phoneBox} className="form-control" placeholder="Enter your Phone Number" required ></input>
                  </div>
                  <div className="col-md-6 mt-3 mx-auto">
                    <label className="form-label fw-bold p-2 border-2 rounded-5">Address</label>
                    <input type="text" className="form-control" ref={this.addressBox} placeholder="Enter Your Address" required></input>
                  </div>



                  <div className="d-grid col-md-4 text-center mt-3 mx-auto">
                    <button type="submit" className="btn btn-outline-info border border-info border-3 fw-semibold" >Submit</button>
                  </div>

                </div>
              </form>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div>

      {/* -------- */}

      <h1 className="text-center bg-info text-dark border border-dark rounded-2 fw-bolder">All Contacts
        <button type="button" className="border border-info btn btn-light ms-2 bg-info " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-plus-circle-fill ms-2 " viewBox="0 0 20 20">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg></button>
      </h1>

      <div className="text-center">

        <div className="text-center mt-3">
          <label className="form-label fw-bold p-2 border-2 rounded-5">Search</label>
          <input type="taxt" className="p-2 placeholder bg-light border border-dark rounded-2 fw-bolder" placeholder="Search Contact" ></input>
        </div>
      </div>
      <div className="container mt-5">




        <table className="table table-info table-hover mt-5">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {/* {this.state.student.filter(ob => this.state.selectCourse == ob.course || this.state.selectCourse == undefined) */}
            {this.state.student.map((ob, index) => <tr>
              <td>{index + 1}</td>
              <td>{ob.name}</td>
              <td>{ob.phno}</td>
              {/* <td><button onClick={() => this.delete(ob.roll)} className="btn-close" aria-label="Close"></button></td> */}
              <td><button dataroll={ob.id} onClick={this.delete} className="btn-close" aria-label="Close"></button></td>
              <td><button type="button" onClick={() => this.setState({ selectid: ob.id })} className="border border-light" data-bs-toggle="modal" data-bs-target="#exampleModal1">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill " viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
              </button></td>

            </tr>)}
          </tbody>
        </table>



      </div>

      {/* -----------view modal */}

      <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              {this.state.student.filter(obj => obj.id == this.state.selectid).map(obj =>
                <p> <h1>Name: {obj.name}</h1>  <br></br>
                  <h1>Email:{obj.email}</h1><br></br>
                  <h1> Mobile: {obj.phno}</h1><br></br>
                  <h1>Address:{obj.address}</h1>

                </p>


              )}



            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  }

}