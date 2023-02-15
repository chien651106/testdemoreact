
const TableUser = (props) => {
  const {listUsers} = props;
  return (
    <>
      <table className="table table-hover  table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`table-user-${index}`}>
                    
                  <th >{item.id}</th>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className="btn">View</button>
                    <button className="btn btn-warning mx-3" onClick={()=>{props.hadleClickBtnUpdate(item)}}>Update</button>
                    <button className="btn btn-danger" onClick={()=>{props.hadleClickBtnDelete(item)}}>Delete</button>
                  </td>
                </tr>
              );
            })}
          {listUsers && listUsers.length === 0 && <tr><td colSpan={4}>not found data</td></tr>}
        </tbody>
      </table>
    </>
  );
};
export default TableUser;