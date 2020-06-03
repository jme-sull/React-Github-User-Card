import React from 'react'

const FollowerCard = props => {

   
    return (

        <div>
            <img src={props.followerObj.avatar_url} alt="user"/> 
            <h2>{props.followerObj.name}</h2>
            <h3>{props.followerObj.login}</h3>
            <p>{props.followerObj.location}</p>
        </div>
    )

}

export default FollowerCard