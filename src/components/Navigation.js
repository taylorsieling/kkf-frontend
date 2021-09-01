import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = {
    width: '150px',
    padding: '15px',
    textDecoration: 'none',
    fontWeight: 500,
    color: '#595a5c',
}

const Navigation = () => {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={navbar}
                activeStyle={{
                    fontWeight: 'bold',
                }}
            >
            HOME
            </NavLink>

            <NavLink
                to="/kittens"
                exact
                style={navbar}
                activeStyle={{
                    fontWeight: 'bold',
                }}
            >
            KITTENS
            </NavLink>

            <NavLink
                to="/intake"
                exact
                style={navbar}
                activeStyle={{
                    fontWeight: 'bold',
                }}
            >
            INTAKE
            </NavLink>

        </div>

        
    )
}

export default Navigation;
