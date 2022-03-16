import { BrouserRouter as Router, Routes, Route} from 'react-router-dom';
import JokesComp from './screens/JokesComp';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={ < JokesComp /> } ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
