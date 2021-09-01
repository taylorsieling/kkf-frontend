import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editKitten } from '../actions/kittens'


class EditForm extends Component {

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

    componentDidMount() {
        this.findKitten();
    }

    
    findKitten = () => {
        const kitten = this.props.kittens.find(kitten => kitten.id === parseInt(this.props.match.params.id))
        
        this.setState({
            name: kitten.name,
            sex: kitten.sex,
            age: kitten.age,
            dob: kitten.dob,
            weight: kitten.weight,
            breed: kitten.breed,
            color: kitten.color,
            pattern: kitten.pattern,
            altered: kitten.altered,
            microchipped: kitten.microchipped,
            intake_date: kitten.intake_date,
            intake_time: kitten.intake_time,
            location_found: kitten.location_found,
            intake_type: kitten.intake_type,
            status: kitten.status,
            current_location: kitten.current_location,
            description: kitten.description,
            portrait_url: kitten.portrait_url
            })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();

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

        const id = this.props.match.params.id

        const onSuccessfulEdit = () => { 
            this.props.history.push({
            pathname: '/kittens'})
        }

        this.props.editKitten(id, kitten, onSuccessfulEdit)

        this.setState({ name: '', sex: '', age: '', dob: '', weight: '', breed: '', color: '', pattern: '', altered: '', microchipped: '', intake_date: '', intake_time: '', location_found: '', intake_type: '', status: '', current_location: '', description: '', portrait_url: ''})}


    render() {
        return (
            <div> 
                <div className="intake">
                    <h1>Update Kitten Form</h1>
                </div>
                <div>
                <form onSubmit={this.handleSubmit}>
            <div className="form">
            <div className="form-flexbox">
                
                <div className="flex-item-full"><h3>Kitten Description</h3></div>
                
                <div className="flex-item-left">
                    <input className="input-txt" type="text" value={this.state.name} name="name" placeholder="Name" onChange={this.handleChange}/>
                </div>

                <div className="flex-item-right">
                    <input type="text" value={this.state.age} name="age" placeholder="Age" onChange={this.handleChange}/>
                </div>

                <div className="flex-item-left">
                    <label className="input-label">Sex: </label>

                    <div className="radio">
                        <input type="radio" className="male"  id="male" name="sex" value="Male" checked={this.state.sex === "Male"} onChange={this.handleChange}/> 
                        <label for="male">Male</label>
                        <input type="radio" className="female"  id="female" name="sex" value="Female" checked={this.state.sex === "Female"} onChange={this.handleChange}/>
                        <label for="female">Female</label>
                    </div>
                </div>

                <div className="flex-item-right">
                <label className="input-label">Date of Birth: </label>
                    <input type="date" value={this.state.dob} name="dob" onChange={this.handleChange}/>
                </div>  

                <div className="flex-item-left">
                    <input type="text" value={this.state.weight} name="weight" placeholder="Weight" onChange={this.handleChange}/>
                </div>   

                <div className="flex-item-right">
                    <input type="text" value={this.state.breed} name="breed" placeholder="Breed" onChange={this.handleChange}/>
                </div> 

                <div className="flex-item-left">
                    <input type="text" value={this.state.color} name="color" placeholder="Color" onChange={this.handleChange}/>
                </div>
                
                <div className="flex-item-right">
                    <input type="text" value={this.state.pattern} name="pattern" placeholder="Pattern" onChange={this.handleChange}/>
                </div>

                <div className="flex-item-full"><h3>Medical Information</h3></div>

                <div className="flex-item-left">
                    <label className="input-label">Altered: </label>

                        <div className="radio">
                            <input type="radio" className="a-yes" id="a-yes" name="altered" value="Yes" checked={this.state.altered === "true"} onChange={this.handleChange}/>
                            <label for="a-yes">Yes</label>
                            <input type="radio" className="a-no" id="a-no" name="altered" value="No" checked={this.state.altered === "false" } onChange={this.handleChange}/>
                            <label for="a-no">No</label>
                        </div>
                </div>

                <div className="flex-item-right">
                    <label className="input-label">Microchipped: </label>

                    <div className="radio">
                            <input type="radio" className="m-yes" id="m-yes" value="Yes" name="microchipped" checked={this.state.microchipped === "true" } onChange={this.handleChange}/> &nbsp;
                            <label for="m-yes">Yes</label>
                            <input type="radio" className="m-no" id="m-no" value="No" name="microchipped" checked={this.state.microchipped === "false" } onChange={this.handleChange}/> 
                            <label for="m-no">No</label>
                        </div>
                
                </div>

                <div className="flex-item-full"><h3>Intake Information</h3></div>

                <div className="flex-item-left">
                        <label className="input-label">Intake Date: </label><br/>
                        <input type="date" value={this.state.intake_date} name="intake_date" onChange={this.handleChange}/>
                </div>

                <div className="flex-item-right">
                    <label className="input-label">Intake Time: </label>
                    <select className="select" name='intake_time' onChange={this.handleChange} value={this.state.intake_time}>
                        <option defaultValue value=''>Choose Time</option>
                        <option value='12:00AM'>12:00 AM</option>
                        <option value='1:00AM'>1:00 AM</option>
                        <option value='2:00AM'>2:00 AM</option>
                        <option value='3:00AM'>3:00 AM</option>
                        <option value='4:00AM'>4:00 AM</option>
                        <option value='5:00AM'>5:00 AM</option>
                        <option value='6:00AM'>6:00 AM</option>
                        <option value='7:00AM'>7:00 AM</option>
                        <option value='8:00AM'>8:00 AM</option>
                        <option value='9:00AM'>9:00 AM</option>
                        <option value='10:00AM'>10:00 AM</option>
                        <option value='11:00AM'>11:00 AM</option>
                        <option value='12:00PM'>12:00 PM</option>
                        <option value='1:00PM'>1:00 PM</option>
                        <option value='2:00PM'>2:00 PM</option>
                        <option value='3:00PM'>3:00 PM</option>
                        <option value='4:00PM'>4:00 PM</option>
                        <option value='5:00PM'>5:00 PM</option>
                        <option value='6:00PM'>6:00 PM</option>
                        <option value='7:00PM'>7:00 PM</option>
                        <option value='8:00PM'>8:00 PM</option>
                        <option value='9:00PM'>9:00 PM</option>
                        <option value='10:00PM'>10:00 PM</option>
                        <option value='11:00PM'>11:00 PM</option>
                    </select>
                </div>

                <div className="flex-item-left">
                    <label className="input-label">Intake Type: </label>
                    <select className="select" name='intake_type' onChange={this.handleChange} value={this.state.intake_type}>
                        <option defaultValue value=''>Choose Type</option>
                        <option value='Stray'>Stray</option>
                        <option value='Surrender'>Surrender</option>
                        <option value='TNR'>TNR</option>
                    </select>
                </div>

                <div className="flex-item-right">
                    <label className="input-label">Location Found: </label>
                    <input type="text" value={this.state.location_found} name="location_found" placeholder="Enter Address" onChange={this.handleChange}/>
                </div>

                <div className="flex-item-full"><h3>Adoption Information</h3></div>
        
                <div className="flex-item-left">
                    <label className="input-label">Adoption Status: </label><br/>
                    <select className="select" name='status' onChange={this.handleChange} value={this.state.status}>
                        <option defaultValue value=''>Choose Status</option>
                        <option value='Unavailable'>Unavailable</option>
                        <option value='Pre_Adoption'>Pre-Adoption</option>
                        <option value='Available'>Available</option>
                        <option value='Adopted'>Adopted</option>
                    </select>
                </div>

                <div className="flex-item-right">
                    <label className="input-label">Current Location: </label>
                    <select className="select" name='current_location' onChange={this.handleChange} value={this.state.current_location}>
                        <option defaultValue value=''>Choose Location</option>
                        <option value='Foster-Home'>Foster Home</option>
                        <option value='Shelter'>Shelter/Rescue</option>
                        <option value='Vet'>Vet's Office</option>
                        <option value='Forever-Home'>Forever Home</option>
                    </select>
                </div>

                <div className="flex-item-full">
                    <input type="textarea" value={this.state.description} name="description" placeholder="Pet Description" onChange={this.handleChange}/>
                </div>

                <div className="flex-item-full">
                    <input type="text" value={this.state.portrait_url} name="portrait_url" placeholder="Portrait URL" onChange={this.handleChange}/>
                </div>

                <div className="flex-item-full">
                    <input type="submit" name="submit" value={this.button}/>
                </div>
                
            </div>
        </div>
        </form>
                </div>
            </div>
        )
    }
}

const mapStateTothis = state => {
    return {
        kittens: state.kittenReducer.kittens,
        loading: state.kittenReducer.loading
    }
}

export default connect(mapStateTothis, { editKitten })(EditForm)