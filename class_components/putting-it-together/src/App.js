import './App.css';
import PropItUp from './Components/PropItUp'
import PersonCard from './Components/PersonCard';

function App() {
  return (
    <div className="App">
      {/* <PropItUp lastName="Doe" firstName="Jane" age={67}/>
      <PropItUp lastName="Miller" firstName="Frank" age={41}/> */}
      <PersonCard firstName ='Chris' lastName='Frederick' age='41' hairColor='Brown'/>
      <PersonCard firstName ='Nysha' lastName='Frederick' age='29' hairColor='Brown'/>
      <PersonCard firstName ='Harry' lastName='Frederick' age='1' hairColor='Blonde'/>
    </div>
  );
}

export default App;
