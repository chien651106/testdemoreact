import React from "react";

class UserInfo extends React.Component {
  state = {
    name: "eric",
    address: "Ha Noi",
    age: "25",
  };
  //jsx
  handleonchangeInputname = (event) => {
    this.setState({
      name: event.target.value,
     
    });
  };
  handleonchangeInputage = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleonSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNewUser({
      id: Math.floor((Math.random()*100) + 1) + '-random',
      name: this.state.name,
      age: this.state.age,
    });
  };
  render() {
    return (
      <div>
        My name is {this.state.name} I im from {this.state.age}
        <form onSubmit={(event) => this.handleonSubmit(event)}>
          <label>Your name</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleonchangeInputname(event)}
          />
          <label>Your age</label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleonchangeInputage(event)}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}
export default UserInfo;
