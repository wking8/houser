import React, { Component } from 'react'

export default class House extends Component {
    render() {
        console.log(this.props.house)
        return (
            <div>
                {this.props.house.name}
                {this.props.house.address}
                {this.props.house.city}
                {this.props.house.state}
                {this.props.house.zipcode}
                <button>Delete</button>
            </div>
        )
    }
}