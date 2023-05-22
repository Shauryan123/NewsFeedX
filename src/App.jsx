import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  apiKey = 'd093053d72bc40248998159804e0e67d';

constructor() {

  super();
  this.state = {
    backgroundColor:'white',
    mode:'light',
    progress: 0
  }

  document.body.style.color = this.state.backgroundColor;
}

toggleMode = () => {
  console.log("Current State of Mode" + " " + this.state.mode);
  if (this.state.mode == 'light') {
     this.setState({
      backgroundColor:'black',
      mode:'dark'
     })
     console.log("state changed from if block");
     console.log(this.state.backgroundColor);
     document.body.style.backgroundColor = 'black';
  } else {
    this.setState({
      backgroundColor:'white',
      mode:'light'
     })
     console.log("state changed from else mode");
     console.log(this.state.backgroundColor);
     document.body.style.backgroundColor = 'white';
  }
}

setProgress = (progress) => {

  this.setState({progress: progress})
}
  render() {
    return (
      <div>
        <Router>
        <NavBar mode={this.state.mode} toggleMode = {this.toggleMode}/>
        <LoadingBar
        height={5}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route exact path="/" element ={<News setProgress = {this.setProgress}  key="general" mode ={this.state.mode} pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/business" element = {<News setProgress = {this.setProgress}  key="business" mode ={this.state.mode} pageSize={this.pageSize} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element ={<News setProgress = {this.setProgress}  key="entertainment" mode ={this.state.mode} pageSize={this.pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/general" element = {<News setProgress = {this.setProgress}  key="general" mode ={this.state.mode} pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/health" element ={<News setProgress = {this.setProgress}  key="health" mode ={this.state.mode} pageSize={this.pageSize} country="in" category="health"/>}/>
          <Route exact path="/science" element ={<News setProgress = {this.setProgress}  key="science" mode ={this.state.mode} pageSize={this.pageSize} country="in" category="science"/>}/>
          <Route exact path="/sports" element ={<News setProgress = {this.setProgress}  key="sports" mode ={this.state.mode} pageSize={this.pageSize} country="in" category="sports"/>}/>
          <Route exact path="/technology" element ={<News setProgress = {this.setProgress}  key="technology" mode ={this.state.mode} pageSize={this.pageSize} country="in" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}
