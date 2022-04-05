import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import UserAuth from './components/UserAuth';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { mode } = useTheme();
  const { user } = useAuthContext();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <UserAuth />
        <Navbar />
        <ThemeSelector />
        
        <Switch>
          <Route exact path='/'>
            {!user && <Redirect to='/login'/>}
            <Home />
          </Route>
          <Route path='/create'>
            {!user && <Redirect to='/login'/>}
            <Create />
          </Route>
          <Route path='/search'>
            {!user && <Redirect to='/login'/>}
            <Search />
          </Route>
          <Route path='/recipes/:id'>
            {!user && <Redirect to='/login'/>}
            <Recipe />
          </Route>
          <Route path='/login'>
            {user && <Redirect to='/'/>}
            <Login />
          </Route>
          <Route path='/signup'>
            {user && <Redirect to='/'/>}
            <Signup />
          </Route>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
