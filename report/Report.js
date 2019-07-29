import React, { Component } from 'react';
import Table from '../table/Table';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
                {head:'Credit', amount:'0'},
                {head:'Debit', amount:'0'},
                {head:'Balance', amount:'0'},
            ],

            datakeys:['head', 'amount']

        }
    }
    
    render() {
        return (
            <div>
                <Table headings={[]} data={this.state.data} datakeys={this.state.datakeys}/>
            </div>
        );
    }
}

export default Report;