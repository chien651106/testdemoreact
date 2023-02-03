import React from "react";

class UserInfo extends React.Component {
  state = {
    name: "eric",
    address: "Ha Noi",
    age: "25",
  };
  //jsx
  handleonchangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleonSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        My name is {this.state.name} I im from {this.state.address}
        <form onSubmit={(event) => this.handleonSubmit(event)}>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleonchangeInput(event)}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}
export default UserInfo;
