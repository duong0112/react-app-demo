import React from "react";

class AddUserComponent extends React.Component {
  state = {
    name: '',
    email: '',
  };
  constructor(props: {
    name: String; email: String ;
  }) {
    super(props);
    this.state = {
      name: this.props.name,
      email: this.props.email,
    };
  }

  

  handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Logic to add user goes here
    console.log('User added:', this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <button type="submit">Add User</button>
      </form>
    );
  }
  export: any default: any AddUserComponent: any;
}