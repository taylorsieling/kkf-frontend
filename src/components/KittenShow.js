import React from 'react'
import { Link } from 'react-router-dom'

const KittenShow = props => {

    const kitten = props.kitten
    console.log(props.kitten)

    return (
        <div>
            <div className="kitten-grid">
                <img className="kitten-img" src={kitten.portrait_url} alt={kitten.name}/>
                <div className="sub-grid">
                    <div className="kitten-title">
                        <h4>Kitten Description</h4>
                    </div>
                    <div className="kitten-info">
                        <p>
                            <strong>Date of Birth: </strong>{kitten.dob} <br/>
                            <strong>Age: </strong>{kitten.age} <br/>
                            <strong>Weight: </strong>{kitten.weight}<br/>
                            <strong>Altered: </strong>{kitten.altered.toString().toUpperCase()}<br/>
                            <strong>Microchipped: </strong>{kitten.microchipped.toString().toUpperCase()}<br/>
                        </p>
                    </div>
                    <div className="kitten-info">
                        <p>
                            <strong>Sex: </strong>{kitten.sex} <br/>
                            <strong>Breed: </strong>{kitten.breed} <br/>
                            <strong>Color: </strong>{kitten.color} <br/>
                            <strong>Pattern: </strong>{kitten.pattern} <br/>
                        </p>
                    </div>
                    <div className="kitten-title">
                        <h4>Intake Information</h4>
                    </div>
                    <div className="kitten-info">
                        <p>
                            <strong>Intake Date: </strong>{kitten.intake_date} <br/>
                            <strong>Intake Time: </strong>{kitten.intake_time} <br/>
                        </p>
                    </div>
                    <div className="kitten-info">
                        <p>
                            <strong>Intake Type: </strong>{kitten.intake_type} <br/>
                            <strong>Location Found: </strong><br/>{kitten.location_found} <br/>
                        </p>
                    </div>
                    <div className="kitten-title">
                        <h4>Adoption Information</h4>
                    </div>
                    <div className="kitten-info">
                        <p>
                            <strong>Status: </strong>{kitten.status} <br/>
                            <strong>Current Location: </strong>{kitten.current_location} <br/>
                        </p>
                    </div>
                    <div className="kitten-info">
                        <p>
                            <strong>Description: </strong>{kitten.description}                   
                        </p>
                    </div>

                    <div></div>

                    <div className="btn-block align-right">
                        <Link className="button" key={kitten.id} to={`/kittens/${kitten.id}/edit`}>EDIT</Link>
                        <button className="button" id={kitten.id} onClick={props.handleDeleteClick}>DELETE</button>                   
                    </div>


                </div>
            </div>
        </div>
    )
}

export default KittenShow;