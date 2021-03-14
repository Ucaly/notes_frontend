
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';
import SignUp from './components/SignUp'
import LogIn from './components/LogIn';
import Navbar from './components/Navbar';
import { ProvideAuth } from './use-auth';
import NoteUpdate from './pages/NoteUpdate';
import NoteNew from './pages/NoteNew';

function App() {

  return (
    <ProvideAuth>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/sign_up'>
          <SignUp />
        </Route>
        <Route exact path='/log_in'>
          <LogIn />
        </Route>        
        <Route exact path='/notes'>
          <Notes />
        </Route>
        <Route exact path='/note_update/:id'>
          <NoteUpdate />
        </Route>
        <Route exact path='/note_new'>
          <NoteNew />
        </Route>
      </Switch>
    </Router>
    </ProvideAuth>
  );
}

export default App;
