import React from 'react'

const UserCard = props => {

   

    return (

        <div>
            <img src={props.userObj.avatar_url} alt="user"/> 
            <h2>{props.userObj.name}</h2>
            <h3>{props.userObj.login}</h3>
             <p>{props.userObj.location}</p>
        </div>
    )

}

export default UserCard