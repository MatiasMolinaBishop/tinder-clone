const ChatHeader = () => {
    return(
        <div className="chat-container-header">
            <div className="profile">
                <div className="img-container">
                    <img src='https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80' alt='header chat img'/>
                </div>
                <h3>Matias Molina</h3>
            </div>
            <i className="log-out-icon">←</i>
        </div>
    )
}

export default ChatHeader