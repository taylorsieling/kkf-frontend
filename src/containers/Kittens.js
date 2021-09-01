import React, { Component } from 'react'
import { connect } from 'react-redux'
import KittenCard from '../components/KittenCard'


class Kittens extends Component {

    handleLoading = () => {
        if (this.props.loading) {
            return ( <div><h2>Herding the kittens... one moment please!</h2></div> )
        } else {
            return (
                <div className="wrapper">
                    {this.props.kittens.map((kitten => {
                        return ( <KittenCard key={kitten.id} kitten={kitten} /> )}
                    ))}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="kittens">
                    <div className="title">
                        <h2>Knittin' Kitten Foster</h2>
                        <h1>Current Foster Kittens</h1>
                    </div> 
                </div>
       

                <div className="bg-green">
                    {this.handleLoading()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        kittens: state.kittenReducer.kittens,
        loading: state.kittenReducer.loading
    }
}

export default connect(mapStateToProps)(Kittens)
