import { Route, Routes } from 'react-router-dom';
import './App.css';
import Charts from './componants/Chart/Charts';
import LineChart from './componants/Chart/LineChart';
import Dashboard from './componants/Dashboard/Dashboard';
import Error from './componants/Error/Error';
import Home from './componants/Home/Home';


function App() {
  return (
    <div className="App">      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Error></Error>} />

        <Route path='/dashboard' element={<Dashboard/>}>
          <Route index element={<Charts/>}></Route>
          <Route path="lineChart" element={<LineChart/>}></Route>
        </Route>

        
      </Routes>
    </div>
  );
}

export default App;
