import React from 'react';

var txtColor1 = {
    color: "#2aa6c0",
}

var txtColor2 = {
    color: "#ffc31c",
}

var txtColor3 = {
    color: "#e06582"
}

export default class EmployeeDatabase extends React.Component{
    constructor(props){
        super(props);
        console.log("props: ", this.props.data)
    
        this.handleAlert = this.handleAlert.bind(this)
    }

    handleAlert(data){
        let msg = "ID: " + data.ID + "\nName: " + data.Name + "\nDesignation: " + data.Designation + "\nSalary: " + data.Salary
        alert(msg)
        console.log(data)
    }

    render() {
        return (
            <div className="row mt-5 mb-5 px-5 py-4" style={{border: "3px solid #319648"}}>
                <h4 className="font-weight-bold text-primary">EMPLOYEES TABLE</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">DESIGNATION</th>
                            <th scope="col">SALARY</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map((itsme)=>(
                        <tr>
                            <th scope="row">{itsme.ID}</th>
                            <td>{itsme.Name}</td>
                            <td>{itsme.Designation}</td>
                            <td>{itsme.Salary}</td>
                            <td ><a style={txtColor1} href="#" onClick={(e)=>this.handleAlert(itsme, e)}>Details</a></td>
                            <td ><a style={txtColor2} href="#" onClick={(e)=>this.handleAlert(itsme, e)}>Edit</a></td>
                            <td ><a style={txtColor3} href="#" onClick={(e)=>this.handleAlert(itsme, e)}>Delete</a></td>
                        </tr>
                    ))}
                    </tbody>
                    
                </table>
            </div>
        )
    }

}