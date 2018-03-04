import React, {Component} from 'react';
// import './Box.css';

class Box extends Component {
    render() {
        const style = {
            width: '180px',
            height: '180px',
            backgroundColor: this.props.color
        };
        return (
            <div style={style}>Hello</div>
        );
    }
}

export default Box;
