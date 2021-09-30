import Header from './components/Header'
import ToDoList from './components/ToDoList'
import Login from './components/Login'
import Register from './components/Register'
import Tasks from './components/Tasks'
import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    setLoggedIn(JSON.parse(localStorage.getItem('loggedIn')) || false);
    setLists(JSON.parse(localStorage.getItem('ToDoList')) || []);
  }, [])

  useEffect(() => {
    localStorage.setItem('ToDoList', JSON.stringify(lists));
  }, [lists])

  useEffect(() => {
    localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
  }, [loggedIn])

  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <main>
        <Switch>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/list" /> : <Login setLoggedIn={setLoggedIn} />}
          </Route>
          <Route path="/register">
            {loggedIn ? <Redirect to="/list" /> : <Register setLoggedIn={setLoggedIn} />}
          </Route>
          <Route exact path="/list">
            {!loggedIn ? <Redirect to="/" /> : <ToDoList lists={lists} setLists={setLists} />}
          </Route>
          <Route path="/list/:id">
            {!loggedIn ? <Redirect to="/" /> : <Tasks lists={lists} setLists={setLists} />}
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