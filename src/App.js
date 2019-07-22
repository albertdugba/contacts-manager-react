import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Layout/Header";
import { Provider } from "./components/context";
import AddContacts from "./components/Contacts/AddContacts";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContacts} />
                <Route exact path="/about/" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
