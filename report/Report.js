import React, { Component } from 'react';
import Table from '../table/Table';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
                {head:'Credit', amount:props.totalcr},
                {head:'Debit', amount:props.totaldb},
                {head:'Balance', amount:'0'},
            ],
            datakeys:['head', 'amount']

        }
        
    }

  

    static getDerivedStateFromProps = (props, state)=>{
        
        //console.log("table props", props)
        state.data=[
                {head:'Credit', amount:props.totalcr},
                {head:'Debit', amount:props.totaldb},
                {head:'Balance', amount:props.totaldb-props.totalcr},
            ]

        
        
        return state;
    }
   
    
    render() {
        
        return (
            <div>
                <Table 
                    headings={[]} 
                    data={this.state.data} 
                    datakeys={this.state.datakeys}
                    actionhead={[]}
                    actionconfig = {[]}                
                />
            </div>
        );
    }
}

export default Report;