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
import UserList from './Components/users/UserList'
import ListArticles from './Components/article/ListArticles'
import CreateArticle from './Components/article/addArticle'

import DashboardAdmin from './Components/pages/DashboardAdmin';
import DashboardJournaliste from './Components/pages/DashboardJournaliste';
import AddUsers from './Components/users/AddUsers';
import Contactus from './Components/pages/ContactUs/Contactus'
import {PrivateRouteAdmin,PrivateRouteJournaliste} from './Components/routes/PrivateRoute';
function App() {
 
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.sportReducer);
    const getUser = () => dispatch(getAuthUser());
    useEffect(() => {
      getUser();
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
    
    <Switch>
    <Route exact path='/art' component={ArtCard}/>
    <Route exact path='/' component={Home}/>
    <Route  path='/Signin' component={SignIn}/>
    <Route  path='/Signup' component={SignUp}/>
    <PrivateRouteAdmin  path='/dashboardAdmin' component={DashboardAdmin}/>
    <PrivateRouteJournaliste  path='/dashboardJournaliste' component={DashboardJournaliste}/>


    <Route path='/listusers' render={()=><UserList/>} />
    <Route path='/adduser' render={()=><AddUsers/>} />

    <Route path='/listarticle' render={()=><ListArticles/>} />
    <Route path='/addarticle' render={()=><CreateArticle/>} />

    <Route exact path='/createprofile' component={CreateProfile}/>
    <Route exact path='/profile' component={CardProfile}/>
    <Route exact path='/contactus' component={Contactus}/>

    </Switch>
    </BrowserRouter>
    </div>
  );
}


export default App ;
