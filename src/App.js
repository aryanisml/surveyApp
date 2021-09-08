import './App.css';
import Timer from './components/Timer';
import { DataContextProvider } from './context/DataContext';
import QuestionReducer, { initalState } from './context/QuestionReducer';
import Survey from './components/Survey';

function App() {

  const hoursMinSecs = {hours:1, minutes: 20, seconds: 40}
  return (
    <div className="App">
      <DataContextProvider initialState={initalState} reducer={QuestionReducer}>
      <Timer  limitTimeinHrsMinSec={hoursMinSecs}/>
      <Survey />
         </DataContextProvider>
          
    </div>
  );
}

export default App;
