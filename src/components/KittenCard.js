import React from 'react'
import { Link } from 'react-router-dom' 
import '../index.css'

const KittenCard = ({kitten}) => {
    return (
        <div>
        <div className="card">
           <div className="card-header">
            <Link className="kitten-link" key={kitten.id} to={`/kittens/${kitten.id}`}>
                <img className="cardimg" src={kitten.portrait_url} alt={kitten.name} width="100"/>
            </Link>
            </div>
            <div className="card-body">
                <p className="kitten-status">{kitten.status}</p>
                <h2 className="kitten-name">{kitten.name}</h2>
                <p className="kitten-desc">
                    Sex: {kitten.sex}<br/>
                    Age: {kitten.age}<br/>
                    {kitten.breed} - {kitten.pattern}<br/><br/>
                </p>
            </div>
        </div>
        </div>
    )
}

export default KittenCard;