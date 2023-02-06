import React from "react";
import './../style/DisplayInfo.scss';

class DisplayInfo extends React.Component {
  constructor(props){
    console.log('call constructor')
    super(props);
    this.state={
        isShowisUser:true,
    }
  }
  
  handleclickshow = () => {
    this.setState(
        {
            isShowisUser: !this.state.isShowisUser 
        }
    )
  };
  componentDidMount(){
    console.log('call me component did mount')
    setTimeout(() => {
      document.title = "abc";
    }, 3000);
  }
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('abc', this.prevProps,this.prevState,this.snapshot)
  }
  render() {
    // console.log(this.props);
    console.log('call me render')
    const { listUser } = this.props;
    return (
      <div>
        {this.state.isShowisUser && (
          <>
            {listUser.map((user,index) => {
              return (
                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                  <div > My name is {user.name}</div>
                  <div>I'im {user.age}</div>
                  <div>
                      <button onClick={()=> this.props.handleDeleteUsser(user.id)}>delete</button>
                  </div>
                  <hr/>
                </div>
              );
            })}
          </>
        )}
        <div>
          <span
            onClick={() => {
              this.handleclickshow();
            }}
          >
            {this.state.isShowisUser === true?"hide":"show"}
          </span>
        </div>
      </div>
    );
  }
}
export default DisplayInfo;
