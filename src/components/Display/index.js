import React, { Component } from 'react';

class Display extends Component {

    constructor(props){
        super(props);
        this.state = {
            text : this.props.text
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            text: nextProps.text
        });
    }

    render(){
        return(
            <div className="Display">
            {this.state.text}
            </div>
        );
    }
}

export default Display;
