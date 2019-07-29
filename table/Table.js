import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state={
           data:props.data,
           headings:props.headings,
           datakeys:props.datakeys
        }
    }
    
   

    render() {   

        let headrows = this.state.headings.map((e)=>{
            return (<th key={e}>{e}</th>);
        });

        let rows = this.state.data.map((e, index)=>{
            return (<tr key={e}>
                {
                    this.state.datakeys.map(el=>{
                        return (
                            <td key={el}>{e[el]}</td>
                        )
                    })
                }
            </tr>)
        });


        return (
           <table>
               <thead>
                   <tr className="bg-green">
                      {headrows}
                   </tr>
               </thead>
               <tbody>
                  {rows}
               </tbody>
           </table>
        );
    }
}

export default Table;