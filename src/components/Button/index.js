import React, { Component } from 'react';

class Button extends Component {

    constructor(props){
        super(props);
        this.state = {
            tag : this.props.tag
        };
    }

    render(){
        return(
            <div className="Button" onClick={this.props.task.bind(this)}>
                {this.state.tag}
            </div>
        );
    }
}

export default Button;
