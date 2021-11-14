import { ChatEngine } from "react-chat-engine";

import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="75289545-5f69-43a2-a84c-91a212a6877a"
            userName="Admin"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    )
}

export default App