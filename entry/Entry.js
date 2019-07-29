import React, { Component } from 'react';

class Entry extends Component {
    constructor(props) {
        super(props);
        this.state={
            amount:'',
            type:'',
            remark:''
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.resetentry = this.resetentry.bind(this)
    }

    changeHandler(e, fld){        
            this.setState({[fld]:e.target.value})                
    }

    resetentry(){
        this.setState({amount:'',type:'',remark:''})
    }
    
    render() {
        return (
            <div className="form-horizontal">
           <div className="row">                
                
                <div className="col-3">
                    <div className="form-group">
                        <input 
                        type="number"  
                        className="form-control" 
                        placeholder="amount" 
                        value={this.state.amount}
                        onChange={(e, type)=>{this.changeHandler(e, "amount")}} 
                        />

                    </div>                
                </div>

                <div className="col-3">
                    <div className="form-group">
                        <select 
                        className="form-control" 
                        value={this.state.type}
                        onChange={(e, type)=>{this.changeHandler(e, "type")}}
                        >
                            <option value="+">+</option>
                            <option value="-">-</option>
                        </select>
                    </div>                
                </div>

                <div className="col-3">
                    <div className="form-group">
                        <input type="text"  
                        className="form-control" 
                        placeholder="remark"
                        value={this.state.remark}
                        onChange={(e, type)=>{this.changeHandler(e, "remark")}}
                        />
                    </div>                
                </div>

                <div className="col-3">
                    <div className="form-group">
                        <button type="button" className="btn btn-success">+</button>
                    </div>                
                </div>
            </div>
           </div>
        );
    }
}

export default Entry;