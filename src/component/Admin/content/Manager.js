import ModalUser from "./ModalCreatUser";
import "./Manager.scss";
import TableUser from "./Table";
import { useEffect } from "react";
import { useState } from "react";
import { getAllusers ,getUserWidthPaginate} from "../../../service/apiservice.js";
import ModalUpdateUser from "./modalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManagerUsers = (props) => {
  const Limit_User = 4;
  const [pageCount,setPageCount] = useState(0);
  const [currentPage,setCurrentPage] = useState(1);

  const [showModalCreatUser, setshowModalCreatUser] = useState(false);
  const [listUsers, setlistUsers] = useState([]);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);

  const [dataUpdate,setDataUpdate]=useState([]);
  const [dataDelete,setDataDelete]=useState([]);

  const [showModalDelete,setShowModalDelete]=useState([]);
  useEffect(() => {
    // fetchListUsers();
    fetchListUserswidthPaginate(1);
  }, []);
  const fetchListUsers = async () => {
    let res = await getAllusers();
    if (res.EC === 0) {
      setlistUsers(res.DT);
    }
  };
  const fetchListUserswidthPaginate = async (page) => {
    let res = await getUserWidthPaginate(page,Limit_User);
    if (res.EC === 0) {
      setlistUsers(res.DT.users);
      setPageCount(res.DT.totalPages)
    }
  };
  const hadleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };
  const hadleClickBtnDelete = (user) =>{
    setShowModalDelete(true);
    setDataDelete(user)
  }
  const resetUpdateData = () =>{
    setDataUpdate({});
  }
  return (
    <div className="manager-user-container">
      <div className="title">Manager User</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            onClick={() => setshowModalCreatUser(true)}
            className="btn btn-primary"
          >
            add news users
          </button>
        </div>
        <div className="table-user-container">
          {/* <TableUser
            listUsers={listUsers}
            hadleClickBtnUpdate={hadleClickBtnUpdate}
            hadleClickBtnDelete={hadleClickBtnDelete}
          /> */}
          <TableUserPaginate
              listUsers={listUsers}
              hadleClickBtnUpdate={hadleClickBtnUpdate}
              hadleClickBtnDelete={hadleClickBtnDelete}
              fetchListUserswidthPaginate={fetchListUserswidthPaginate}
              pageCount={pageCount}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
          />
        </div>
        <ModalUser
          show={showModalCreatUser}
          setShow={setshowModalCreatUser}
          fetchListUsers={fetchListUsers}
          fetchListUserswidthPaginate={fetchListUserswidthPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          ModalUpdateUser={ModalUpdateUser}
          fetchListUserswidthPaginate={fetchListUserswidthPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalDeleteUser
          show={showModalDelete}
          setShow={setShowModalDelete}
          dataDelete={dataDelete}
          fetchListUserswidthPaginate={fetchListUserswidthPaginate}
          fetchListUsers={fetchListUsers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
export default ManagerUsers;
