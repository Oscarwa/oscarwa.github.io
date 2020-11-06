import React, { Component } from 'react';
import ReactGA from 'react-ga';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
// import Contact from './components/Contact';
// import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: {}
    };

    ReactGA.initialize('UA-51866214-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData = async () => {
    const res = await fetch('./params.json',
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
    const data = await res.json();
    this.setState({resumeData: data });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Skills data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        {/* <Contact data={this.state.resumeData.main}/> */}
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
