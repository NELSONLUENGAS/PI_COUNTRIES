import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './componenets/Landing_Page/LandingPage';
import Home from './componenets/Country/Home';
import CreateActivity from './componenets/Activity/CreateActivity';
import CardCountryDeatils from './componenets/Country/CardCountryDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' 
            element={<LandingPage/>}/>
          <Route path='/home' 
          element={<Home/>}/>
          <Route path='/country/:id'
            element={<CardCountryDeatils/>}/>
          <Route path='/createActivity'
            element={<CreateActivity/>}/>
          <Route path='/updateActivity/:id' 
            element={<CreateActivity/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
