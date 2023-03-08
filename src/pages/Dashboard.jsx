import TinderCard from 'react-tinder-card'
import { useState } from "react"
import ChatContainer from "../components/ChatContainer"



const Dashboard = () => {

  const characters = [
    {
      name: 'Richard Hendricks',
      url: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'
    },
    {
      name: 'Erlich Bachman',
      url: 'https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80'
    },
    {
      name: 'Monica Hall',
      url: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      name: 'Jared Dunn',
      url: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80'
    },
    {
      name: 'Dinesh Chugtai',
      url: 'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=732&q=80'
    }
  ]

  //const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

    return(
        <div className="dashboard">
          <ChatContainer/>
          <div className="swipe-container">
            <div className="card-container">
              {characters.map((character) =>
                <TinderCard 
                  className='swipe' 
                  key={character.name} 
                  onSwipe={(dir) => swiped(dir, character.name)} 
                  onCardLeftScreen={() => outOfFrame(character.name)}
                >
                 <div style={{ backgroundImage: 'url(' + character.url + ')' }} 
                  className='card'
                 >
                   <h3>{character.name}</h3>
                </div>
                </TinderCard>
                  )}
                  <div className='swipe-info'>
                    {lastDirection? <p>you swiped {lastDirection}</p> : <p/>}
                  </div>
            </div>
          </div>
        </div>
    )
}

export default Dashboard