
import { useState } from 'react';
import './App.css';
import Swal from "sweetalert2"; 




function App() {

  const [User, setUser] = useState({
    firstName: "", lastName: ""
  })

  let name, value;

  const handleOnChange = (e) => {

    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...User, [name]: value })
  }

  const PostData = async (e) => {
    e.preventDefault()
    console.log("Working");

    const { firstName, lastName } = User;

    const res = await fetch('/home', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        firstName: firstName, lastName: lastName
      })

    });

    const data = await res.json()
    console.log(res);


    if (res.status === 422 || !data) {
      alert("Empty Fields")
      console.log("Err")
    }
    else {
      alert("Data added to MongoDb")
      console.log("Zhala be");
    }
  }



  return (
    <>
      <div className='home'>
        <div className='main-div'>
          <h1>DBMS Project</h1>
          <div className="container text-center">
            <div className="row grids">
              <div className="col">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">First Name</span>
                  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={User.firstName} name="firstName" onChange={handleOnChange} />
                </div>
              </div>
              <div className="col">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">Last Name</span>
                  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={User.lastName} name="lastName" onChange={handleOnChange} />
                </div>
              </div>
              <div className="col">
                <button className="btn btn-primary" type="submit" onClick={PostData}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;




