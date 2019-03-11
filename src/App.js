import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';


import addcircle from './addcircle.png';


import { name as app_name } from '../package.json';

import ClassifyUrl from './ClassifyUrl'


console.log("Name is ", app_name);


class VerifyUrl extends Component {
  constructor(props){
    super(props);
    console.log("we are in the component");
    this.state = { 
      x : addcircle,
      imgSrc : '',
    }

  }

  render() {
    console.log("IN VERIFY RENDER WITH", this.props);
    return (
      <div className="App-header">
        <img src={this.props.imgSrcClean} className="App-logo"  onError={this.props.handleError} alt=""/>
        <input type="text" value={this.props.imgSrcRaw} className="App-text-input" onChange={this.props.handleChange}/>
        <Link className="App-button-link" to="/classify" >
          <button className="App-button">
            Next
          </button>
        </Link>
      </div>
    )
  }
}

class Home extends Component {

    constructor(props){
      super(props);
      this.imgId = 'ah3bd9-inputfile';
      this.onChange = this.onChange.bind(this);
    }

  onChange(){
    const file   = document.getElementById(this.imgId).files[0];

    const reader = new FileReader();

    const that = this;
    reader.onloadend = function(){
      that.props.bubble('verifyImg', reader.result);
      that.props.bubble('uploaded', true);
      that.props.bubble('imgBlob', file);
      that.props.history.push('/classify');

    }

    if (file){
      reader.readAsDataURL(file);
    }

  }



  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Link
            className="App-link"
            to="/verify-url"
          >
            Enter Url
          </Link>
          <p>
            Or
          </p>
          <div id="input-hider">
            <input type="file" onChange={this.onChange} id={this.imgId} accept="image/*"/>
          </div>
          <div className="App-link" onClick={()=>document.getElementById(this.imgId).click()}>Upload file / Take photo</div>
        </header>
      </div>
    );
  }

}

class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      classifyImg: '',
      verifyImgUrl: null,
      verifyImg: addcircle,
      validImg: false,
      uploaded: false,
      imgBlob: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
    this.bubble = this.bubble.bind(this);
  }

  bubble(name, val) {
    console.log("calling set state in bubble with", name, val);
    this.setState(state => (state[name]=val));
  }


  handleError(event) {
    this.setState(state => ({
      verifyImg: addcircle
    }))
  }

  handleChange(event) {
    const val = event.target.value;
    this.setState(state => ({
      verifyImgUrl: val,
      verifyImg: val,
    }))
  }
  render(props) {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app-container">
          <Route path="/" exact render={ (props) => 
            <Home {...props} bubble={this.bubble}></Home> 
          } />
          <Route path="/verify-url" exact render={(props) => 
              <VerifyUrl 
                classifyImg={this.state.classifyImg}
                handleChange={this.handleChange} 
                handleError={this.handleError} 
                imgSrcRaw={this.state.verifyImgUrl}
                imgSrcClean={this.state.verifyImg}
              />
          }/>
          <Route path="/classify" exact render={(props) => 
              <ClassifyUrl 
                {...props}
                classifyImg={this.state.verifyImg}
                handleSubmit={this.handleSubmit} 
                uploaded={this.state.uploaded}
                imgBlob={this.state.imgBlob}
              />
          }/>
        </div>
      </Router>
    )
  }
}

export default App;
