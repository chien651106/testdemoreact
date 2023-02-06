import React, { useState } from "react";
import "./../style/DisplayInfo.scss";

// class DisplayInfo extends React.Component {
//   render() {
//     // console.log(this.props);
//     console.log("call me render");
//     const { listUser } = this.props;
//     return (
//       <div>
//         {true && (
//           <>
//             {listUser.map((user, index) => {
//               return (
//                 <div key={user.id} className={user.age > 18 ? "green" : "red"}>
//                   <div> My name is {user.name}</div>
//                   <div>I'im {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUsser(user.id)}
//                     >
//                       delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }
const DisplayInfo = (props) => {
  const { listUser } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);
  const handleShowHideisUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };
  return (
    <div className="display-infor-container">
      <div>
        <span
          onClick={() => {
            handleShowHideisUser();
          }}
        >
          {isShowHideListUser === true ? "show" : "hide"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUser.map((user, index) => {
            return (
              <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                <div> My name is {user.name}</div>
                <div>I'im {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUsser(user.id)}>
                    delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
export default DisplayInfo;
