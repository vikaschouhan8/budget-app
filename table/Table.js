import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state={
           data:props.data,
           headings:props.headings,
           datakeys:props.datakeys,
           actionhead:props.actionhead,
           actionconfig:props.actionconfig
        }

        if(props.actionhead.length){
            this.handler = props.actionconfig[0].handler.bind(this)
        }else{
            this.handler = ()=>{}
        }
        
    }
    
    static getDerivedStateFromProps = (props, state)=>{
        //console.log("table props", props)
        state.data = props.data;
        return state;
    }
   

    render() {   

        let headrows = this.state.headings.map((e, index)=>{
            return (<th key={index}>{e}</th>);
        });

        let actionrows = this.state.actionhead.map((e, index)=>{
            return (<th key={headrows.length+index}>{e}</th>)
        })

        headrows.push(actionrows)

        let rows = this.state.data.map((e, index)=>{
           if(this.state.actionconfig.length){
            return (<tr key={index}>
                {
                    this.state.datakeys.map(el=>{
                        return (
                            <td key={el}>{e[el]}</td>
                        )
                    })                    
                }

                <td onClick={(event) => this.state.actionconfig[0]['handler'](event, index)}>{this.state.actionconfig[0]['text']}</td>
            </tr>)
        }else{
            return (<tr key={index}>
                {
                    this.state.datakeys.map(el=>{
                        return (
                            <td key={el}>{e[el]}</td>
                        )
                    })                    
                }

                </tr>)

        }
           }
        
        );




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