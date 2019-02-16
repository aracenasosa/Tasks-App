import React, {Component} from 'react';

class Form extends Component{

    constructor () {
        super();
        this.state = {
          Title: '',
          Responsible: '',
          Description: '',
          Priority: 'Low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
      }

       handleInput(e){
          const { value, name } = e.target;
          this.setState({
             [name]: value
          })
          console.log(this.state);
       }

       handleSubmit(e){
          e.preventDefault();
          this.props.onAddForm(this.state);
          console.log("Sent...");
       }


        render(){
         
            return(

            <div className="card">
              <form className="card-body" onSubmit={this.handleSubmit}>

                  <div className="form-group">
                     <input type="text" name="Title" className="form-control" placeholder="Title" onChange={this.handleInput}></input>
                  </div>

                  <div className="form-group">
                     <input type="text" name="Responsible" className="form-control" placeholder="Responsible" onChange={this.handleInput}></input>
                  </div>

                  <div className="form-group">
                     <textarea type="text" name="Description" className="form-control" placeholder="Description" onChange={this.handleInput}></textarea>
                  </div>

                  <div className="form-group">
                     <select name="Priority" className="form-control" onChange={this.handleInput}>
                          <option>Low</option>
                          <option>Medium</option>
                          <option>High</option>
                     </select>
                  </div>
                    
                  <button type="submit" className="btn btn-primary">Save</button>
                   
              </form>
            </div>
          );
        }
    }

 export default Form;