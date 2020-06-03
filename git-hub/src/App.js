import React from 'react';
import axios from 'axios'
import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard'
import './components/components.css'
import Box from '@material-ui/core/Box'






class App extends React.Component {

    state = {
        userData: {},
        followerData: [{}]
      }
  

  

  
  componentDidMount() { 
    //user data
    axios.get('https://api.github.com/users/jme-sull')
    .then(res => {
      this.setState({
        userData: res.data
      })
    })

    //follower data 

    axios.get('https://api.github.com/users/jme-sull/followers')
      .then(res => {
        console.log(res)
        this.setState({
          followerData: res.data
        })
      })

    }

  render() {
    return(
      
      <div> 
          <div className='header-container'>
            <h1>GitHub User</h1>
              <UserCard userObj={this.state.userData}/>  
            <h2>Followers</h2>
          </div>
                
          <div className='followers-container'>
           
          {
            this.state.followerData.map(obj => {
              return (
                  <FollowerCard key={obj.id} followerObj={obj} />
             
             
              ) 
            })
          }
      </div>

      </div>
    )
  }
}

export default App;

