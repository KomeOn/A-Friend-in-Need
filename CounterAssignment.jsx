import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counterVal: 0,
            counter: 0,
            showButton: false
        }
        this.incrementhor = this.incrementhor.bind(this)
        this.decrementhor = this.decrementhor.bind(this) 
    }

    incrementhor() {
        if(this.state.counter == 10) {
            return
        }
        else{
            let count = this.state.counter;
            if(count==9) this.setState({showButton: true})
            let inc = this.props.interval || 1;
            let updateVal = this.state.counterVal;
            this.setState({counterVal: updateVal+inc, counter: count+1})
        }
    }

    decrementhor() {
        let count = this.state.counter;
        if(this.state.counter == 10) {
            return
        }
        else{
            if(this.state.counterVal>0){
                if(count==9) this.setState({showButton: true})
                let dec = this.props.interval || 1;
                let updateVal = this.state.counterVal>0?this.state.counterVal:0;
                this.setState({counterVal: updateVal-dec, counter: count+1})
            }
            else {
                this.setState({counterVal: 0, counter: count+1})
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="text-center">
                    <h3 className="text-info">Counter Component</h3>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-4">
                        <input type="text" className="form-control" value={this.state.counterVal} readOnly/>
                    </div>
                    <div className="col-sm-1">
                        <button className="btn btn-info btn-block" disabled={this.state.showButton?true: false} onClick={this.incrementhor}>+</button>
                    </div>
                    <div className="col-sm-1">
                        <button className="btn btn-info btn-block" disabled={this.state.showButton?true: false} onClick={this.decrementhor}>-</button>
                    </div>
                    <div className="col-sm-2">
                        <button className="btn btn-info btn-block" disabled={this.state.showButton?false: true} onClick={(e)=>{
                            this.setState({counterVal: 0,
                                counter: 0,
                                showButton: false})
                        }}>Reset</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

class CounterAssignment extends Component {
    render() {
        return (
            <div>
                <Counter />
                <br />
                <Counter interval={10} />
            </div>
        );
    }
}

export default CounterAssignment;