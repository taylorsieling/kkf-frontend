import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './components/Home'
import { Footer } from './components/Footer'
import Kittens from './containers/Kittens'
import KittenContainer from './containers/KittenContainer'
import IntakeForm from './containers/IntakeForm'
import EditForm from './containers/EditForm'
import { fetchKittens } from './actions/kittens'

class App extends Component {

  componentDidMount(){
    console.log(" app componentDidMount")
    this.props.fetchKittens()
  }

  render() {
    return (

      <Router>

        <div className="navbar">
        <Navigation />
        </div>
        
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/kittens' component={ Kittens }/>
            <Route path='/kittens/:id/edit' component={ EditForm }/>
            <Route path='/kittens/:id' component={ KittenContainer }/>
            <Route exact path='/intake' component={ IntakeForm }/>
          </Switch>

        <div className="footer">
          <Footer/>
        </div>

      </Router>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, { fetchKittens })(App);
