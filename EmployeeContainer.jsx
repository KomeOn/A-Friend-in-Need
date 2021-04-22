import React from "react";
import EmployeeEntry from "./EmployeeEntry";
import EmployeeDatabase from "./EmployeeDatabase";

export default class EmployeeContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: 0,
            data: []
        }
        this.handleEntry = this.handleEntry.bind(this)
        // window.id = 0
    }
    
    handleEntry(data) {
        console.log("reat: ",data)
        let temp = this.state.data // previous data
        this.setState({id: data.ID}) // id updation
        temp.push(data)             // 
        this.setState({data: temp})
        console.log("ss: ", this.state.data)
        // window.id = data.ID
        localStorage.setItem("Data", JSON.stringify(this.state.data))
    }

    componentDidMount() {
        if(localStorage.getItem("Data")) {
            let temp = JSON.parse(localStorage.getItem('Data'))
            let siz = Object.keys(temp).length
            this.setState({data: temp})
            this.setState({id: siz})
            console.log("mounted: ", )
        }
    }

    render() {
        return (
            <>
            <EmployeeEntry id={this.state.id} handleEntry={this.handleEntry} />
            <EmployeeDatabase data={this.state.data}/>
            </>
        )
    }
}
