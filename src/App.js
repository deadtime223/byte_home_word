import './App.css';
import React from 'react';
function App() {
      const [message, setMessage] = React.useState("")
        const Hello = () => {
        message == "" ? setMessage("Привет") : setMessage("")
      }
      return (
    <div className="App">
      <div>
        <h1>{message}</h1>
      <button onClick={Hello} className="Hello">Нажми на меня</button>
      </div>
    </div>
  );
}
export default App;