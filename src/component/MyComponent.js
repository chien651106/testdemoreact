import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "eric",
    address: "Ha Noi",
    age: "25",
  };
  //jsx
  render() {
    return (
        <div>
            My name is {this.state.name} I im from {this.state.address}
        </div>
    );
  }
}
export default MyComponent;
