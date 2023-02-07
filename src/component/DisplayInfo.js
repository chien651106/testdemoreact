import React, { useEffect, useState } from "react";
import "./../style/DisplayInfo.scss";

const DisplayInfo = (props) => {
  const { listUser } = props;
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  const handleShowHideisUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };
  useEffect(
    ()=>{
      if(listUser.leng === 0){
        alert('123')
      }
      setTimeout(()=>{
        document.title = "abc"
      },3000)
      console.log("abc")
    },
  );

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
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div> My name is {user.name}</div>
                <div>I'im {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
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
