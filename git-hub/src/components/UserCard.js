import React from 'react'
import './components.css'

const UserCard = props => {

   
    return (
        <div className='card'>
            <img src={props.userObj.avatar_url} alt="user"/>
                <div className='card-text'>
                    <h2>{props.userObj.name}</h2>
                    <p>{props.userObj.login}</p>
                    <p>{props.userObj.location}</p>  
                </div> 
             
        </div>
        )

}

export default UserCard