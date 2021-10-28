import './App.css';
import PropItUp from './Components/PropItUp'

function App() {
  return (
    <div className="App">
      <PropItUp lastName="Doe" firstName="Jane" age={67}/>
      <PropItUp lastName="Miller" firstName="Frank" age={41}/>
    </div>
  );
}

export default App;
