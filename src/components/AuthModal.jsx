import { useState } from "react"

const AuthModal = ({setShowModal, isSignUp}) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)

    const handleClick = () => {
        setShowModal(false)
    }

    console.log(email, password, confirmPassword)

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            if(isSignUp && (password !== confirmPassword)){
                setError('password needs to match')
            }
            console.log('make a post request to our data base')
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className="auth-modal">
            <div className='close-icon' onClick={handleClick}>x</div>
            <h2>{isSignUp ? 'CREATE ACCOUNT':'LOG IN'}</h2>
            <p>By clicking Log in, you agree to our terms</p>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='email'
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='password'
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input
                    type='password'
                    id='passwordCheck'
                    name='passwordCheck'
                    placeholder='confirm password'
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input className="secondary-button" type='submit'/>
                <p>{error}</p>
            </form>
            <hr/>
            <h2>Get the app</h2>
        </div>
    )
}

export default AuthModal