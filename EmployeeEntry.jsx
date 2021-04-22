import React, { useState } from "react";

function EmployeeEntry(props) {
    const [name, setName] = useState("")
    const [designation, setDesignation] = useState("")
    const [salary, setSalary] = useState("")
    
    return (
        <div className="row mt-5 px-5 py-4" style={{border: "3px solid #0072ff"}}>
                <div className="col-sm-6 offset-sm-3">
                    <form className="justify-content-center" onSubmit={(e)=>{e.preventDefault();props.handleEntry({ID: props.id+1, Name: name, Designation: designation, Salary: salary})}}>
                        <fieldset>
                            <legend className="font-weight-bold text-center text-secondary">ADD EMPLOYEE INFORMATION</legend>
                            <hr className="mt-0" />
                            <div className="form-group mb-1">
                                <label className="mb-0"  htmlFor="t1">Id</label>
                                <input type="text" className="form-control" id="t1" readOnly value={props.id+1}/>
                            </div>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t2">Name</label>
                                <input type="text" className="form-control" id="t2" value={name} onChange={(e)=>setName(e.target.value)}/>
                            </div>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t2">Designation</label>
                                <input type="text" className="form-control" id="t2" value={designation} onChange={(e)=>setDesignation(e.target.value)}/>
                            </div>
                            <div className="form-group mb-1">
                                <label className="mb-0" htmlFor="t2">Salary</label>
                                <input type="text" className="form-control" id="t2" value={salary} onChange={(e)=>setSalary(e.target.value)}/>
                            </div>
                            <div className="form-group row mt-3">
                                <button type="submit" className="btn btn-success btn-block col-sm mx-3">Save</button>
                                <button type="reset" className="btn btn-primary btn-block col-sm mx-3 mt-0" onClick={()=>{setName(""), setSalary(""), setDesignation("")}}>Reset</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
    )
}

export default EmployeeEntry