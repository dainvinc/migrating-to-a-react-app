import React, {Component} from 'react';
import './AboutMe.css';
  
class AboutMe extends Component {
  constructor(props) {
    super(props);
    
    this.handleSection = this.handleSection.bind(this);
  }
  
  handleSection(e) {
    if(e.key === 'Enter')
      console.log("Clicked");
    
    // this.changeSection();
    this.refs.changeSection.classList.toggle("newsection4");
  }

  render() {
    return (
      <div tabIndex="0" onKeyPress={this.handleSection}> 
          <div ref="changeSection" className="new-section">
            <h1 id="title">{this.props.details.myDetails.name}</h1>
            <p id="caption">{this.props.details.myDetails.headline}</p>
          </div>
          <div className="new-section2">
            <h1 id="title">Objective</h1>
            <p id="caption">{this.props.details.myDetails.objective}</p>
          </div>
          <button 
            className="next" 
            type="button"> Next >
          </button>
      </div>
    );
  }
}

export default AboutMe;