import React, { Component } from 'react';
import Table from './table/Table';
import Entry from './entry/Entry';
import Report from './report/Report';


import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            tblrows:[],
            talbekeys:['sn', 'amount', 'type', 'remark'], 
            totalCredit:0,
            totalDebit:0           
        }
    }

deleteHandler = (e, id)=>{
    let olddata = [...this.state.tblrows]
    olddata.splice(id, 1)
    let totalDb = 0
    let totalCr = 0
    olddata = olddata.map((el, index)=>{
        el['sn'] = index+1;
        if(el['type']==='Debit'){
            totalDb+= parseInt(el['amount'])
        }else{
            totalCr+= parseInt(el['amount'])
        }
        return el
    })
    this.setState({tblrows:olddata, totalCredit:totalCr, totalDebit:totalDb})  
}

clearEntryHandler=()=>{
    console.log("clrae")
}


    
    handleFormSubmit = (data) => {
        let olddata = [...this.state.tblrows]
        olddata.push(data)
        let totalDb = 0
        let totalCr = 0
        olddata = olddata.map((el, index)=>{
            el['sn'] = index+1;
            if(el['type']==='Debit'){
                totalDb+= parseInt(el['amount'])
            }else{
                totalCr+= parseInt(el['amount'])
            }
            return el
        })
        console.log(olddata)
        this.setState({tblrows:olddata, totalCredit:totalCr, totalDebit:totalDb})
    }

    render() {
        
        return (
            <div className="container">
                <Entry submitaction={this.handleFormSubmit}
                        clearEntry={this.clearEntryHandler}
                />
                <Table                 
                    data={this.state.tblrows} 
                    headings={['#', 'Amount', 'Type', 'Remark']}
                    datakeys={this.state.talbekeys}
                    actionhead = {["Delete"]}
                    actionconfig = {[
                        {text:"delete", btntype:"btn-danger", handler:this.deleteHandler}]
                    }

                />
                
                <div className="row justify-content-end">
                    <div className="col-4 mt-5">                    
                        <hr/>
                        <Report 
                            totaldb={this.state.totalDebit} 
                            totalcr={this.state.totalCredit}
                            clearEntry={this.clearEntryHandler}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;