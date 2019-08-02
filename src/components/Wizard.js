import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: null
        }
        // GIMME POINTS FOR THIS STUPID BINDING BS! NEVER AGAIN!! ARROW FUNCTION 4 LIFE
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <span>Name:<input onChange={e => this.handleChange(e)} name='name' type="text" placeholder='Name' /></span>
                <span>Address:<input onChange={e => this.handleChange(e)} name='address' type="text" placeholder='Address' /></span>
                <span>City:<input onChange={e => this.handleChange(e)} name='city' type="text" placeholder='City' /></span>
                <span>State:<input onChange={e => this.handleChange(e)} name='state' type="text" placeholder='State' /></span>
                <span>Zip:<input onChange={e => this.handleChange(e)} name='zipcode' type="text" placeholder='Zipcode' /></span>
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
                Wizard
            </div>
        )
    }
}