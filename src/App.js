import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class App extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values) {
      console.log("values: " + values)

      console.log("Current State is: " + JSON.stringify(values));
      alert("Current State is: " + JSON.stringify(values));
      this.props.postFeedback(values);
      this.props.resetFeedbackForm();
    }  
    render() {
      return (
        <div className="App">
          <nav class="navbar bg-light titlefont">
            <span class="navbar-brand mb-0 h1 titlefont">Recomp Health</span>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-12 m-1">
                <h3 className="homefont"><b>The platform built to reward you for your healthy habits.</b></h3>
                <p className="subfont">Recomp Health allows users to each cash back every day by logging their healthy habits in our app.</p>
                <div className="formstyle">
                <form class="form-inline formstyle" onSubmit={(values) => this.handleSubmit(values)}>
                  <label class="sr-only" for="inlineFormInputName2">Name</label>
                  <input type="email" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Enter Email"/>              
                  <button type="submit" class="btn btn-secondary rounded mb-2">Request Access</button>
                </form>
                </div>      
              </div>
              <div className="col-12 m-1 imagestyle" >
                <img src={"fit.jpg"} className="App-logo imagestyle" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      );
  }
};
export default App;
