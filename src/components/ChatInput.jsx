import { useState } from "react"

const ChatInput = () => {

    const [textarea, setTextArea] = useState('Meet someone special')

    const handleChange = (e) => {
        console.log(e.target.value)
        setTextArea(e.target.value)
    }

    return(
        <div className="chat-input">
            <textarea 
            value={textarea}
            onChange = {handleChange}
            />
            <button className="secondary-button">Submit</button>
            
        </div>
    )
}

export default ChatInput