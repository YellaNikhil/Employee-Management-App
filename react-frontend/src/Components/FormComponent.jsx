import {React, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmpService from "../Services/EmployeeService";

function FormComponent(props){
  const {id} = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailID, setEmailID] = useState("");
  const [messageState, setMessageState] = useState(false);
  const navigate = useNavigate();
  const message = "Please enter the details correctly";

  useEffect(() => {
    if(id!==undefined){
      EmpService.getEmployeeByID(id).then((res) =>{
        setEmailID(res.data.emailID);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
      })
    }
  }, [id]);

  const changeFirstName = (event) => {
    setFirstName(event.target.value);
  }
  const changeEmailID = (event) => {
    setEmailID(event.target.value);
  }
  const changeLastName = (event) =>{
    setLastName(event.target.value);
  }
  const cancelFeature = () =>{
    navigate("/");
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(firstName.length===0 || lastName.length===0 || emailID.length===0 || emailID.includes("@")!==true){
      setMessageState(true);
      return; 
    }
    setMessageState(false);
    const employee = {
      firstName, lastName, "emailID" : emailID.toLowerCase()}
    if(props.buttonName==='Add'){
      EmpService.addEmployee(employee);
    }
    else if(props.buttonName==="Update"){
      EmpService.updateEmployee(employee, id);
    }
    navigate('/employees');
  }
    return (
            <div className="container m-3">
              <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                  <h1 className="card-title text-center">{props.heading}</h1>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label>First Name :</label>
                        <input className="form-control" name="firstName" value={firstName} placeholder="Enter First Name" onChange={changeFirstName}/>
                      </div>
                      <div className="form-group">
                        <label>Last Name : </label>
                        <input className="form-control" name="lastName" value={lastName} placeholder="Enter Last Name" onChange={changeLastName}/>
                      </div>
                      <div className="form-group">
                        <label>Email Address : </label>
                        <input className="form-control" name="emailID" value={emailID} placeholder="Enter Email Address" onChange={changeEmailID}/>
                      </div>
                      <div className="form-group mt-2 mb-2">
                        <button className="btn btn-primary" onClick={onSubmit}>{props.buttonName}</button>
                        <button className="btn btn-danger m-2" onClick={cancelFeature}>Cancel</button><br/>
                        {messageState && <span>{message}</span>}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        );
}

export default FormComponent;