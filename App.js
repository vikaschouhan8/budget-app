import React, { Component } from 'react';
import Table from './table/Table';
import Entry from './entry/Entry';
import Report from './report/Report';


import './style.css';

class App extends Component {
    constructor(props) {
        super(props);       
    }
    
    render() {
        return (
            <div className="container">

                <Entry/>

                <Table data={[]} headings={['#', 'Amount', 'Type', 'Remark']}/>
                
                <div className="row justify-content-end">
                    <div className="col-4 mt-5">                    
                    <hr/>
                        <Report/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;