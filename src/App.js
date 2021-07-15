import Header from './components/Header/Header';
import './App.css';
import SimpleBottomNavigation from './components/MainNav/MainNav';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
import { Route } from 'react-router-dom';
require('dotenv').config();
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        <Container>
          <Switch>
            <Route path='/' exact component={Trending} />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />
          </Switch>
        </Container>
        <SimpleBottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
