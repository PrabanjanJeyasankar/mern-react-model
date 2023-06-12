import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom"
import './App.css';
import HolidayComponent from './Components/HolidayComponent/HolidayComponent';


function App() {
  return (
    <Router>
  <div >
        <ul className='bg-gray-400 flex justify-center text-2xl font-semibold '>
          <li >
            <Link to='/HolidayComponent'><h3 className="p-8 pl-5 pr-5 pt-2 pb-2  m-2 mt-6 mb-6 hover:bg-white hover:text-gray-800 hover:rounded-full">Holiday Plans</h3></Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/HolidayComponent' element ={<HolidayComponent/>} ></Route>
      </Routes>
        </div>
      
    </Router>
  );
}

export default App;
