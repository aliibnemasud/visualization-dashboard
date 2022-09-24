import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './componants/Dashboard/Dashboard';
import Home from './componants/Home/Home';


function App() {
  return (
    <div className="App">

      <Dashboard/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
