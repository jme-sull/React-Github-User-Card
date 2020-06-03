import React from 'react';
import axios from 'axios'
import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard'


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
          <UserCard userObj={this.state.userData}/> 
          {
            this.state.followerData.map(obj => {
              return (
              <FollowerCard key={obj.id} followerObj={obj} />
              ) 
            })
          }
      </div>
    )
  }
}

export default App;

