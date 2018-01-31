import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route, Link, Switch, Redirect, AuthRoute } from 'react-router-dom';

const App = () => (
  <div className="app">
      <header className="top-line">
        <div className="top-col">
          <div className="header-list">
            <ul>
              <li>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <h1 id="logo">Opus</h1></Link>
              </li>
              <li>
                <Route path="/"><GreetingContainer /></Route>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="main-page">
          <Switch>
            <Route path="/login" component={SessionFormContainer} />
            <Route path="/signup" component={SessionFormContainer} />
            <Redirect to="/"></Redirect>
          </Switch>
        </div>
      <br />
      <br />

      <footer>
        <ul>
          <li>&copy; Ricki Nelson</li>
          <li><a href="https://github.com/rnelson082/opus"><img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"></img></a></li>
          <li><a href="https://www.linkedin.com/in/ricki-nelson-7885043a/"><img src="https://n6-img-fp.akamaized.net/free-icon/linkedin-logo-button_318-84979.jpg?size=338c&ext=jpg"></img></a></li>
        </ul>
      </footer>
    </div>
)

export default App;
