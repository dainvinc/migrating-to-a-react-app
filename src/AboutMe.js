import React, {Component} from 'react';
import './AboutMe.css';
  
class AboutMe extends Component {
  changeSection() {
    this.refs.classList.toggle("new-section2");
  }
  render() {
      return (
      <div> 
          <div refs="changeSection" className="new-section">
            <h1 id="title">{this.props.details.name}</h1>
            <p id="caption">{this.props.details.headline}</p>
          </div>
          <div className="new-section2">
            <h1 id="title">Objective</h1>
            <p id="caption">{this.props.details.objective}</p>
          </div>
          <button className="next" type="click" onClick={this.changeSection}>Next ></button>
      </div>
      );
  }
}

export default AboutMe;