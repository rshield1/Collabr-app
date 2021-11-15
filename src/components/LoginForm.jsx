import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

      //username and password. Then ask chatengine to give messsages
        const authObject = { 'Project-ID': "75289545-5f69-43a2-a84c-91a212a6877a", "User-Name" : username, "User-Secret": password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload()
           //works, login 
        } catch (error) {
           //not, error  
           setError('Incorrect credentials')
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Collab-R Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                        placeholder="Username"
                        required 
                    />

                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        placeholder="Password"
                        required 
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                    
                </form>
            </div>
        </div>
    )
}

export default LoginForm