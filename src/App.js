import React, { Component } from "react";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Layout/Header";
import { Provider } from "./components/context";
class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
