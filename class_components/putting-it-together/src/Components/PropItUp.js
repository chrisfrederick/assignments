import React, { Component } from 'react'

class PropItUp extends Component{
    render(){
        return <div>
            <table>
                <th>{this.props.name}</th>
                <tr>
                <th>{this.props.age}</th>
                <th>{this.props.hair}</th>
                </tr>
                <tr>
                    <td>{this.props.ageNum}</td>
                    <td>{this.props.hairColor}</td>
                </tr>
            </table>


        </div>
    }
}

export default PropItUp