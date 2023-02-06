import React from "react";
import "./style/App.scss";
import MyComponent from "./component/MyComponent";
import logo from "./static/img/logo.svg"

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        abcxyz
        {/* <img src={logo} alt=""></img> */}
        <MyComponent></MyComponent>
      </div>
    );
  }
}
// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }
export default App;
