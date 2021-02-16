import './App.css';
import NavBar from './Components/NavBar/navBar';
import ArtCard from './Components/article/articleCard'
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import Home from './Components/pages/Home'
import CreateProfile from './Components/Profile/createProfile';
import CardProfile from './Components/Profile/cardProfile'
import { getAuthUser } from './Redux/actions/sportAction';
import { getCurrentProfile } from './Redux/actions/profileAction';

import UserList from './Components/users/UserList'
import DashboardAdmin from './Components/pages/DashboardAdmin';
import AddUsers from './Components/users/AddUsers';
function App() {
 
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.sportReducer);
    const getUser = () => dispatch(getAuthUser());
    const getProfile=() => dispatch(getCurrentProfile());
    useEffect(() => {
      getUser();
    }, []);

    useEffect(() => {
      getProfile();
    }, []);


    if (isLoading) {
      return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Spinner
            style={{ width: '3rem', height: '3rem', color: 'secondary' }}
            type="grow"
          />
        </div>
      );
    }
  return (
    <div className="App">
   <BrowserRouter>
    <NavBar/>
    
    <Switch>
    <Route exact path='/art' component={ArtCard}/>
    <Route exact path='/' component={Home}/>
    <Route  path='/Signin' component={SignIn}/>
    <Route  path='/Signup' component={SignUp}/>
    <Route  path='/dashboard' component={DashboardAdmin}/>

    <Route path='/listusers' render={()=><UserList/>} />
    <Route path='/adduser' render={()=><AddUsers/>} />

    <Route exact path='/createprofile' component={CreateProfile}/>
    <Route exact path='/profile' component={CardProfile}/>

    </Switch>
    </BrowserRouter>
    </div>
  );
}


export default App ;
