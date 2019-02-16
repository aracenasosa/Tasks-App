/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Data
import {Tasks} from './Tasks.json';

//Component
import Form from './Components/Form';

class App extends Component {

  constructor()
  {
    super();
    this.state = {Tasks};//Tambien se puede Poner Tasks Solo.
      this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(Data){
    this.setState({
      Tasks:[...this.state.Tasks, Data]
    })
  }

  handleRemove(index){
   if(window.confirm("Are you sure you want to delete it?")){

    this.setState({
      Tasks: this.state.Tasks.filter((e, i) =>{
        return i !== index
      })
    })
   }else{

   }
  }

  render() {

   const Contenedor =  this.state.Tasks.map((Tasks, x) => {

      return(
        <div className="col-md-3" key={x}>
        <div className="card mt-4">

          <div className="card-header">
            <h3>{Tasks.Title}</h3>
            <span className="badge badge-pill badge-danger ml-2 p-2">{Tasks.Priority}</span>
          </div>

          <div className="card-body">
            <p>{Tasks.Description}</p>
            <p><mark>{Tasks.Responsible}</mark></p>
          </div>

          <div className="card-footer">
                <button className="btn btn-danger" onClick={this.handleRemove.bind(this, x)}>Delete</button>
          </div>

        </div>
        </div>
      )

    })

    return (
      <div className="App">
        
        <nav className="navbar navbar-dark bg-dark p-3 ">
         <a href ="#" className ="text-white">
           Tasks <span className="badge badge-pill badge-light ml-1">{this.state.Tasks.length}</span>
         </a>
        </nav> 


        <div className="Container">
        <div className="row mt-4 p-4">

         <div className="col-md-2 text-center">
             <img src={logo} className="App-logo" alt="logo" />
             <Form onAddForm={this.handleAdd}/>
         </div>

            <div className="col md-8">

            <div className="row">
              {Contenedor}
            </div>
             
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
