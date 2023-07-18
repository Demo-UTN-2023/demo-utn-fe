import { useEffect } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { IUser } from "../../interfaces/IUser";
import { getAllUsers, removeUser, setActiveUser } from "./usersSlider";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const Users = () => {

  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [])

  const onDelete = (user: IUser) => {
    Swal.fire({
      title: 'Do you want to delete the user?',
      showDenyButton: true,
      confirmButtonText: 'Cancel',
      denyButtonText: `Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isDenied) {
        if (user.id) {
          dispatch(removeUser(user))
        }
      }
    })
  }

  const onUpdate = (user: IUser) => {
    dispatch(setActiveUser(user));
    navigate(`/users/update/${user.id}`);
  }

  return (
    <main>
      <div className="container">
        <div className="row mt-5 rounded justify-content-between" style={{ background: "#3E5641" }}>
          <div className="col-9">
            <h1 className="text-white">Users List</h1>
          </div>
          <div className="col-3">
            <a className="btn btn-dark mb-2 mt-2" href="/users/create">Create User</a>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-8">
            <table className="table table-striped">
              <tbody>


                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Country</th>
                  <th scope="col">Actions</th>
                </tr>
                {users && users.map((item: IUser) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.lastName}</td>
                    <td>{item.country}</td>
                    <td className="d-flex flex-wrap flex-column">
                      <button className="btn btn-primary mb-2 mt-2">See Car(s)</button>
                      <button className="btn btn-danger mb-2" onClick={() => onDelete(item)}>Delete</button>
                      <button className="btn btn-warning text-black mb-2" onClick={() => onUpdate(item)}>Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Users