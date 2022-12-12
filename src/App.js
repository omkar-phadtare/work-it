import './App.css';
import Home from './component/Home';
import Login from './component/Login';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UserHome from './component/UserHome';
import AuthState from './context/AuthState';
function App() {
  return (
    <div className="App">
      <AuthState>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path='/UserHome' element={<UserHome/>}/>
        </Routes>
      </BrowserRouter>
      </AuthState>
    </div>
  );
}

export default App;
