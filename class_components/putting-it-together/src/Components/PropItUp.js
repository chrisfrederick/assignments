import React, { Component } from 'react'

class PropItUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }



    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        return ( 
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>HairColor: {hairColor}</p>
                <button onClick={this.birthday}>Increase age for {firstName} {lastName}</button>
            </div>
        );
    }

    birthday = () => {
        this.setState({age: this.state.age + 1})
    }
}

export default PropItUp