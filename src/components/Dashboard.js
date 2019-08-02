import React, { Component } from 'react'
import House from './House'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Link to='/wizard'>
                    <button>Add New Property</button>
                </Link>
                <House />
            </div>
        )
    }
}