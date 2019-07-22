import React, { Component } from "react";

import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Layout/Header";
import { Provider } from "./components/context";
import AddContacts from "./components/Contacts/AddContacts";

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContacts />

            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
