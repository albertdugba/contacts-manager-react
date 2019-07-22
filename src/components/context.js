import React, { Component } from "react";

const Context = React.createContext();

// Reducer Method
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Sara Edoh",
        email: "sdrasna@netlify.com",
        phone: "020191928"
      },
      {
        id: 2,
        name: "Kyle Simpson",
        email: "getify@gmail.com",
        phone: "029283848"
      },
      {
        id: 3,
        name: "Steve Kinney",
        email: "kinney@sendgrid.com",
        phone: "092873738"
      },
      {
        id: 4,
        name: "Scott Moss",
        email: "scotmosss@tipe.com",
        phone: "92837788"
      },

      {
        id: 5,
        name: "Victor Bruce",
        email: "victorbruce@gmail.com",
        phone: "028892020"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
