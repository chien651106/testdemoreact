import "./style/App.scss";
import Header from "./component/Header/header.js";
import { Outlet} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav"></div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default App;
