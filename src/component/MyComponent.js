import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "abc", age: "11" },
      { id: 2, name: "cde", age: "27" },
      { id: 3, name: "fgh", age: "28" },
    ],
  };
  handleAddNewUser = (userObj) => {
    this.setState({
      listUser:[userObj,...this.state.listUser]
    })
  };
  handleDeleteUsser = (userId) => {
    let listUserclone =[...this.state.listUser]
    listUserclone = listUserclone.filter(item => item.id !== userId)
    this.setState({
      listUser:listUserclone,
    })
  }
  render() {
    // const myInfo =['a','b','c']
    return (
      <>
        <div className="a">
          <UserInfo handleAddNewUser={this.handleAddNewUser} />
          <br />
          {/* <DisplayInfo name="Eric" age="26" myInfo={myInfo}/> */}
          <DisplayInfo 
            listUser={this.state.listUser} 
            handleDeleteUsser={this.handleDeleteUsser}
          />
        </div>
        <div className="b">

        </div>
      </>
    );
  }
}
export default MyComponent;
