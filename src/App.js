import Header from './components/Header'
import ToDoList from './components/ToDoList'
import Login from './components/Login'
import Register from './components/Register'
import Tasks from './components/Tasks'
import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

function App() {
  const [loggedIn, setLoggedIn] = useState({});
  const [lists, setLists] = useState([]);

  useEffect(() => {
    setLoggedIn(JSON.parse(localStorage.getItem('loggedIn')) || {});
    setLists(JSON.parse(localStorage.getItem('ToDoList')) || []);
  }, [])

  useEffect(() => {
    localStorage.setItem('ToDoList', JSON.stringify(lists));
  }, [lists])

  useEffect(() => {
    if (loggedIn.hasOwnProperty("user")) {
      localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
    } else {
      localStorage.removeItem('loggedIn');
    }
  }, [loggedIn])

  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} setLists={setLists} />
      <main>
        <Switch>
          <Route exact path="/">
            {(loggedIn.hasOwnProperty("user") ?? loggedIn.user.id) ? <Redirect to="/list" /> : <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          </Route>
          <Route path="/register">
            {(loggedIn.hasOwnProperty("user") ?? loggedIn.user.id) ? <Redirect to="/list" /> : <Register loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          </Route>
          <Route exact path="/list">
            {!(loggedIn.hasOwnProperty("user") ?? loggedIn.user.id) ? <Redirect to="/" /> : <ToDoList lists={lists} setLists={setLists} auth={loggedIn.jwt} />}
          </Route>
          <Route path="/list/:id">
            {!(loggedIn.hasOwnProperty("user") ?? loggedIn.user.id) ? <Redirect to="/" /> : <Tasks lists={lists} setLists={setLists} auth={loggedIn.jwt} />}
          </Route>
          <Route path="*">
            <div>404 - webpage not found</div>
          </Route>
        </Switch>
      </main>
      <footer>Daniel Bieniek</footer>
    </div>
  );
}

export default App