import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID="c1dc5c43-2d08-481a-9919-697bdd52961a"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App
