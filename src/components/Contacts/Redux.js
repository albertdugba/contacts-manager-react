import React, { Component } from "react";

class AddContacts extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmitHandler = event => {
    event.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  static defaultProps = {
    name: "Jones Myles",
    email: "jones@gmail.com",
    phone: "12324356"
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header ">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                ref={this.nameInput}
                defaultValue={name}
                name="name"
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                ref={this.emailInput}
                defaultValue={email}
                name="email"
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Email..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                ref={this.phoneInput}
                defaultValue={phone}
                name="name"
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Phone Number..."
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContacts;
