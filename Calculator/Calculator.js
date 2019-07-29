import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            num1:props.num1,
            num2:props.num2,
            result:parseInt(props.num1)+parseInt(props.num2)
        }
    }
    num1ChangeHandler = (e) => {
        let num = e.target.value
        let res = parseInt(this.state.num2)+parseInt(num)
        this.setState({num1:num, result:res})
    }

    num2ChangeHandler = (e) => {
        let num = e.target.value
        let res = parseInt(this.state.num1)+parseInt(num)
        this.setState({num2:num, result:res})
    }
    
    render() {
        return (
            <>
                <input type="number" value={this.state.num1} onChange={(e)=>this.num1ChangeHandler(e)} />
                <input type="number" value={this.state.num2} onChange={(e)=>this.num2ChangeHandler(e)} />
                <span> {this.state.result} </span>
            </>
        );
    }
}

export default Calculator;