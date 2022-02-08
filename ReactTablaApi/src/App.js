
import React, { Component} from 'react';
import timeago from "timeago.js";
import { format } from 'timeago.js';



class App extends Component {

constructor(){
  super();
  this.state = {
    data: []
  };
}

  async componentDidMount(){
    const res = await fetch('https://openlibrary.org/recentchanges.json?limit=3');
    const data = await res.json();
    const formatData = this.formatData(data);
    console.log(formatData);
    this.setState({data: formatData})
  }
  
  formatData(data){
    return data.map((data, i) => {
      return{
      "when":format(data.timestamp),
      "who": data.author.key,
      "description": data.comment
    }
  });
}
  
  render(){
    console.log(this.props.data)
    console.log(this.props.title)
    console.log(this.props.headings)
    return (
      <div className="container p-3">
      <h1>{this.props.title}</h1>
      <table className="table table-bordered">
      <thead>
      <tr>
        {
            this.props.headings.map((heading,i) => {
              return <th key={i}>{heading}</th>

            })

        }
        </tr>
       </thead>
       <tbody>
        {
          this.state.data.map((row,i) => {
            return <tr key={i} >
            <td>{row.when}</td>
            <td>{row.who}</td>
            <td>{row.description}</td>
            </tr>
          })
        }
        </tbody>
    
      </table>
      </div>
    )
  }
}

export default App;