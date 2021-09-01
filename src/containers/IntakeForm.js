import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addKitten } from '../actions/kittens'
import KittenForm from '../components/KittenForm'

class IntakeForm extends Component {

    state = { 
        name: '',
        sex: '',
        age: '',
        dob: '',
        weight: '',
        breed: '',
        color: '',
        pattern: '',
        altered: '',
        microchipped: '',
        intake_date: '',
        intake_time: '',
        location_found: '',
        intake_type: '',
        status: '',
        current_location: '',
        description: '',
        portrait_url: ''
    }

    handleChange = event => {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        const kitten = {
            name: this.state.name,
            sex: this.state.sex,
            age: this.state.age,
            dob: this.state.dob,
            weight: this.state.weight,
            breed: this.state.breed,
            color: this.state.color,
            pattern: this.state.pattern,
            altered: this.state.altered,
            microchipped: this.state.microchipped,
            intake_date: this.state.intake_date,
            intake_time: this.state.intake_time,
            location_found: this.state.location_found,
            intake_type: this.state.intake_type,
            status: this.state.status,
            current_location: this.state.current_location,
            description: this.state.description,
            portrait_url: this.state.portrait_url
        }
       
        const onSuccessfulSubmit = () => { 
            this.props.history.push('/kittens')
        }

        this.props.addKitten(kitten, onSuccessfulSubmit)

        this.setState({ 
            name: '',
            sex: '',
            age: '',
            dob: '',
            weight: '',
            breed: '',
            color: '',
            pattern: '',
            altered: '',
            microchipped: '',
            intake_date: '',
            intake_time: '',
            location_found: '',
            intake_type: '',
            status: '',
            current_location: '',
            description: '',
            portrait_url: ''
         })
    }
    

    render() {
        return (
            <div>
                <div className="intake">
                    <div className="title">
                        <h2>Knittin' Kitten Foster</h2>
                        <h1>Intake Form</h1>
                    </div> 
                </div>
                <KittenForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} kitten={this.state} button='SUBMIT'/>
            </div>
        )
    }
}

export default connect(null, { addKitten } )(IntakeForm)