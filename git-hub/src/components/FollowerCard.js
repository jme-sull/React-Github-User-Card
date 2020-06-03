import React from 'react'
import './components.css'


const FollowerCard = props => {

    return (
        <div>
            <img src={props.followerObj.avatar_url} alt="user"/> 
            <h3>{props.followerObj.login}</h3>
        </div>
    )

}

export default FollowerCard