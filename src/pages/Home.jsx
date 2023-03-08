import { useState } from "react"
import Nav from "../components/Nav"
import AuthModal from "../components/AuthModal"

const Home = () => {

    const [showModal, setShowModal] = useState(false)
    //initially we assume poeple who come into our website need to sigup
    const [isSignUp, setIsSignUp] = useState(true)


    const handleClick = () => {
        console.log('clicked')
        setShowModal(true)
        setIsSignUp(true)
    }
    
    const authToken=false

    return(
        <div className="overlay">
        <Nav minimal={false} setShowModal={setShowModal} showModal={showModal} setIsSignUp={setIsSignUp}/>
        <div className="home">
             <h1 className="primary-title">Swipe Right</h1>
             <button className="primary-button" onClick={handleClick}>
                {authToken? 'signout':'Create Account'}
             </button>

             {showModal && (
             <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>)}
        </div>
        </div>
    )
}

export default Home