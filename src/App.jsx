import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'
import './App.css'
import All from './All'
import FullStackDevelopment from './FullStackDevelopment'
import DataScience from './DataScience'
import Career from './Career'
import CyberSecurity from './CyberSecurity'

function App() {
 
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            
            <Link to="/">All</Link>
          </li>
          <li>
            
            <Link to="/fullstackdevelopmemnt">FullStackDevelopment</Link>
          </li>
          <li>
           
            <Link to="/datascience">DataScience</Link>
          </li>
          <li>
           
            <Link to="/cybersecurity">CyberSecurity</Link>
          </li>
          <li>
           
            <Link to="/career">Career</Link>
          </li>
          
        </ul>
      </nav>
    </div>
    <div className='content'>
    <Routes>
        <Route path="/" exact Component={All}></Route>
        <Route path="/fullstackdevelopmemnt" exact Component={FullStackDevelopment}></Route>
        <Route path="/datascience" exact Component={DataScience}></Route>
        <Route path="/cybersecurity" exact Component={CyberSecurity}></Route>
        <Route path="/career" exact Component={Career}></Route>
        
       
      </Routes>
    </div>
  </Router>
  )
}

export default App
