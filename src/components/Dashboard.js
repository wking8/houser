import React, { Component } from 'react'
import House from './House'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    state = {
        house: []
    }
    componentDidMount() {
        axios.get('/api/houses')
            .then(res => {
                this.setState({ house: res.data })
            })
    }
    render() {
        return (
            <div>
                {this.state.house.map(element => {
                    return (
                        <div>
                            <House house={element} />
                        </div>
                    );
                })}
                <Link to='/wizard'>
                    <button>Add New Property</button>
                </Link>
            </div>
        )
    }
}