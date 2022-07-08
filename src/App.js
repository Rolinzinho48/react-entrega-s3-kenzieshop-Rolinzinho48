import './App.css';
import MainPage from './pages/MainPage'
import KartPage from './pages/KartPage'
import {Switch,Route} from 'react-router-dom'

function App() {
  console.log("EU amo a raquel")
  return (
    <Switch>
      <Route path='/' exact>
        <MainPage></MainPage>
      </Route>
      <Route path='/kart' exact>
        
        <KartPage></KartPage>
      </Route>
    </Switch>
    
  );
}

export default App;
