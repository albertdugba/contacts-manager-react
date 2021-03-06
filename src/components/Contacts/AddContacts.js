import React, { Component } from "react";
import uuid from "uuid";
import axios from "axios";
import { Consumer } from "../context";
import TextInputGroup from "../Layout/TextInputGroup";

class AddContacts extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: {}
  };
  onChangeHandler = event => {
    const target = event.target.name;
    const value = event.target.value;
    this.setState({ [target]: value });
  };

  onSubmitHandler = async (dispatch, event) => {
    event.preventDefault();
    // Check for Errors
    const { name, email, phone } = this.state;
    if (name === "") {
      this.setState({ error: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ error: { name: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ error: { name: "Phone is required" } });
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/users`,
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    this.setState({ name: "", email: "", phone: "" });

    // Clear form fields
    this.setState({
      name: "",
      email: "",
      phone: ""
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, error } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header ">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmitHandler.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChangeHandler}
                    error={error.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChangeHandler}
                    error={error.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChangeHandler}
                    error={error.phone}
                  />

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContacts;
