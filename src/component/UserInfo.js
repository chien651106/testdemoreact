import React, { useState } from "react";

// class UserInfo extends React.Component {
//   state = {
//     name: "eric",
//     address: "Ha Noi",
//     age: "25",
//   };
//   //jsx
//   handleonchangeInputname = (event) => {
//     this.setState({
//       name: event.target.value,
     
//     });
//   };
//   handleonchangeInputage = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };
//   handleonSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor((Math.random()*100) + 1) + '-random',
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };
//   render() {
//     return (
//       <div>
//         My name is {this.state.name} I im from {this.state.age}
//         <form onSubmit={(event) => this.handleonSubmit(event)}>
//           <label>Your name</label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleonchangeInputname(event)}
//           />
//           <label>Your age</label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleonchangeInputage(event)}
//           />
//           <button>submit</button>
//         </form>
//       </div>
//     );
//   }
// }
const UserInfo = (props) => {
  // state = {
  //   name: "eric",
  //   address: "Ha Noi",
  //   age: "25",
  // };
  const [name,setName] = useState('');
  const [address,setaddress] = useState ('Hà Nội');
  const [age,setAge] = useState('');
  //jsx
  const handleonchangeInputname = (event) => {
    // this.setState({
    //   name: event.target.value,
    // });
    setName(event.target.value)
  };
  const handleonchangeInputage = (event) => {
    // this.setState({
    //   age: event.target.value,
    // });
    setAge(event.target.value)
  };
  const handleonSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor((Math.random()*100) + 1) + '-random',
      name: name,
      age: age,
    });
  };
  return (
    <div>
      My name is {name} I im from {age}
      <form onSubmit={(event) => handleonSubmit(event)}>
        <label>Your name</label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleonchangeInputname(event)}
        />
        <label>Your age</label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleonchangeInputage(event)}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
export default UserInfo;
