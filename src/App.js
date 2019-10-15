import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactGA from 'react-ga';

// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class App extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount() {
      this.initializeReactGA();
    }
    handleSubmit(values) {
      console.log("values: " + values)

      console.log("Current State is: " + JSON.stringify(values));
      alert("Current State is: " + JSON.stringify(values));
      this.props.postFeedback(values);
      this.props.resetFeedbackForm();
    }
    initializeReactGA() {
      ReactGA.initialize('UA-116537882-2');
      ReactGA.pageview('/homepage');
    }  
    render() {
      return (
        <div>
        <div className="App">
          <nav className="navbar bg-light titlefont">
            <span className="navbar-size-new mb-0 h1 titlefont">Recomp Health</span>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-md m-1">
                <h1 className="homefont textmargin"><b>Simplified employee health incentives that work.</b></h1>
                <h5 className="subfont">Recomp Health helps companies provide effective health incentives to their employees, in a simple and streamlined process.</h5>
                <div className="formstyle">
                <form className="form-inline formstyle" action="https://formspree.io/kevinwalsh23@gmail.com" method="POST">
                  <input type="email" name="_replyto" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="name@company.com"/>              
                  <button type="submit" value="Send" className="btn btn-secondary rounded mb-2">Request Access</button>
                </form>
                </div>      
              </div>
              <div className="col-md m-1 imagestyle" >
                <img src={"rhprof.png"} className="App-logo imagestyle" alt="logo" />
              </div>
            </div>
          
          </div>
          <div className="whyrecomp">
              <div>
                <h1 className="whytext"><b>Why Recomp Health?</b></h1>   
                <h4 className="whytext1">Health incentives work, and employees are healthier, happier and more productive. Benefits include: </h4>
                <h5 className="whybody">1. Up to 2.7x more productive everyday at work.</h5>
                <h5 className="whybody">2. Take fewer sick days.</h5>
                <h5 className="whybody">3. Lower Health Insurance payments.</h5>
                <h5 className="whybody">4. Improved company culture.</h5>
              </div>              
          </div>
          <div className="whyrecomp">
              <div>
                <h1 className="whytext"><b>The process is simple.</b></h1>   
                <h4 className="whytext1">Setting up health incentive programs can be difficult, Recomp Health takes all of the leg work out of this for you.</h4>
                <h5 className="whybody">1. Employees download our mobile app.</h5>
                <h5 className="whybody">2. Employees log their workouts in our app. (We verify all workouts with location services so you can be assured there is no cheating going on.)</h5>
                <h5 className="whybody">3. Employees can cash out instantly.</h5>
                <h5 className="whybody">4. At the end of the month, we send you a report of how many workouts your employees logged, and you make one payment to Recomp Health. </h5>
              </div>              
          </div>  
          <div className="whyrecomp">
              <div>
                <h1 className="whytext"><b>Request an invite.</b></h1>                   
                <form className="form-inline bottomformstyle" action="https://formspree.io/kevinwalsh23@gmail.com" method="POST">
                  <input type="email" name="_replyto" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="name@company.com"/>              
                  <button type="submit" value="Send" className="btn btn-secondary rounded mb-2 buttonstuff">Request Access</button>
                </form>
              </div>              
          </div>  
        </div>

        </div>
      );
  }
};
export default App;
