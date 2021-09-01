import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { deleteKitten } from '../actions/kittens'
import { connect } from 'react-redux'
import KittenShow from '../components/KittenShow'

class KittenContainer extends Component {

   handleDelete = event => {
       this.props.deleteKitten(event.target.id)
    }

    render() {
        const kitten = this.props.kittens.find(kitten => kitten.id === parseInt(this.props.match.params.id))
        return (
            <>
                { kitten ?
                <>
               
                    <div className="center kitten-header">
                        <h1>{kitten.name}</h1>
                    </div> 
            
                <div> 
                    <KittenShow id={kitten.id} kitten={kitten} handleDeleteClick={this.handleDelete}/>
                </div> 
                </> : 
                <Redirect to="/kittens" />
                }
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        kittens: state.kittenReducer.kittens,
        loading: state.kittenReducer.loading
    }
}

export default connect(mapStateToProps, { deleteKitten })(KittenContainer)