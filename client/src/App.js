import './App.css';
import NavBar from './Components/NavBar/navBar';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import Home from './Components/pages/Home'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <NavBar/>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route  path='/Signin' component={SignIn}/>
        <Route  path='/Signup' component={SignUp}/>

        </Switch>
        
    </BrowserRouter>
    </div>
   
  );
}

export default App;
