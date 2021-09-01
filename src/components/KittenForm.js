import React from 'react'

const KittenForm = props => {

    const kitten = props.kitten

    return (
        <>      
        <form onSubmit={props.handleSubmit}>
            <div className="form">
            <div className="form-flexbox">
                
                <div className="flex-item-full"><h3>Kitten Description</h3></div>
                
                <div className="flex-item-left">
                    <input className="input-txt" type="text" value={kitten.name} name="name" placeholder="Name" onChange={props.handleChange} required/>
                </div>

                <div className="flex-item-right">
                    <input type="text" value={kitten.age} name="age" placeholder="Age" onChange={props.handleChange} required/>
                </div>

                <div className="flex-item-left">
                    <label className="input-label">Sex: </label>

                    <div className="radio">
                        <input type="radio" className="male" id="male" name="sex" value="male" checked={kitten.sex === "Male"} onChange={props.handleChange}/>
                        <label for="male">Male</label>
                        <input type="radio" className="female" id="female" name="sex" value="female" defaultChecked={kitten.sex === "Female"} onChange={props.handleChange}/>
                        <label for="female">Female</label>
                    </div>

                </div>

                <div className="flex-item-right">
                    <label className="input-label">Date of Birth: </label>
                    <input type="date" value={kitten.dob} name="dob" onChange={props.handleChange} required/>
                </div>  

                <div className="flex-item-left">
                    <input type="text" value={kitten.weight} name="weight" placeholder="Weight" onChange={props.handleChange} required/>
                </div>   

                <div className="flex-item-right">
                    <input type="text" value={kitten.breed} name="breed" placeholder="Breed" onChange={props.handleChange} required/>
                </div> 

                <div className="flex-item-left">
                    <input type="text" value={kitten.color} name="color" placeholder="Color" onChange={props.handleChange} required/>
                </div>
                
                <div className="flex-item-right">
                    <input type="text" value={kitten.pattern} name="pattern" placeholder="Pattern" onChange={props.handleChange} required/>
                </div>

                <div className="flex-item-full"><h3>Medical Information</h3></div>

                <div className="flex-item-left">
                    <label className="input-label">Altered: </label>

                        <div className="radio">
                            <input type="radio" className="a-yes" id="a-yes" name="altered" value="Yes" checked={kitten.altered === "Yes"} onChange={props.handleChange}/>
                            <label for="a-yes">Yes</label>
                            <input type="radio" className="a-no" id="a-no" name="altered" value="No" checked={kitten.altered === "No"} onChange={props.handleChange}/>
                            <label for="a-no">No</label>
                        </div>

                </div>

                <div className="flex-item-right">
                    <label className="input-label">Microchipped: </label>

                    <div className="radio">
                            <input type="radio" className="m-yes" id="m-yes" value="Yes" name="microchipped" checked={kitten.microchipped === "Yes"} onChange={props.handleChange}/>
                            <label for="m-yes">Yes</label>
                            <input type="radio" className="m-no" id="m-no" value="No" name="microchipped" checked={kitten.microchipped === "No"} onChange={props.handleChange}/>
                            <label for="m-no">No</label>
                    </div>
                
                </div>

                <div className="flex-item-full"><h3>Intake Information</h3></div>

                <div className="flex-item-left">
                        <label className="input-label">Intake Date: </label><br/>
                        <input type="date" value={kitten.intake_date} name="intake_date" onChange={props.handleChange} required/>
                </div>

                <div className="flex-item-right">
                    <label className="input-label">Intake Time: </label>
                    <select className="select" name='intake_time' onChange={props.handleChange} value={kitten.intake_time}>
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
                    <label>Intake Type: </label>
                    <select className="select" name='intake_type' onChange={props.handleChange} value={kitten.intake_type}>
                        <option defaultValue value=''>Choose Type</option>
                        <option value='Stray'>Stray</option>
                        <option value='Surrender'>Surrender</option>
                        <option value='TNR'>TNR</option>
                    </select>
                </div>

                <div className="flex-item-right">
                    <label>Location Found: </label>
                    <input type="text" value={kitten.location_found} name="location_found" placeholder="Enter Address" onChange={props.handleChange} required/>
                </div>

                <div className="flex-item-full"><h3>Adoption Information</h3></div>
        
                <div className="flex-item-left">
                    <label>Adoption Status: </label><br/>
                    <select className="select" name='status' onChange={props.handleChange} value={kitten.status}>
                        <option defaultValue value=''>Choose Status</option>
                        <option value='Unavailable'>Unavailable</option>
                        <option value='Pre_Adoption'>Pre-Adoption</option>
                        <option value='Available'>Available</option>
                        <option value='Adopted'>Adopted</option>
                    </select>
                </div>

                <div className="flex-item-right">
                    <label>Current Location: </label>
                    <select className="select" name='current_location' onChange={props.handleChange} value={kitten.current_location}>
                        <option defaultValue value=''>Choose Location</option>
                        <option value='Foster-Home'>Foster Home</option>
                        <option value='Shelter'>Shelter/Rescue</option>
                        <option value='Vet'>Vet's Office</option>
                        <option value='Forever-Home'>Forever Home</option>
                    </select>
                </div>

                <div className="flex-item-full">
                    <input type="textarea" value={kitten.description} name="description" placeholder="Pet Bio" onChange={props.handleChange} required/>
                </div>

                <div className="flex-item-full">
                    <input type="text" value={kitten.portrait_url} name="portrait_url" placeholder="Portrait URL" onChange={props.handleChange} required/>
                </div>

                <div className="flex-item-full">
                    <input type="submit" name="submit" value={props.button}/>
                </div>
                
            </div>
        </div>
        </form>

        </>
    )
}

export default KittenForm;