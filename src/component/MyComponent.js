import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";


class MyComponent extends React.Component {
  state={
    listUser : [
      {id: 1, name:"abc",age:"26"},
      {id: 2, name:"cde",age:"27"},
      {id: 3, name:"fgh",age:"28"},
    ]
  }
  render() {
    // const myInfo =['a','b','c']
    return (
        <div>
            <UserInfo/>
            <br/>
            {/* <DisplayInfo name="Eric" age="26" myInfo={myInfo}/> */}
            <DisplayInfo listUser={this.state.listUser}/>
        </div>
        
    );
  }
}
export default MyComponent;
