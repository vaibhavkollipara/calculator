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
            <div className="Button">
                {this.state.tag}
            </div>
        );
    }
}

export default Button;
