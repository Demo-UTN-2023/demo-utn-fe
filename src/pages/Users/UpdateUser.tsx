import { useAppSelector } from "../../hooks/useAppSelector"
import { IUser } from "../../interfaces/IUser";
import { changeAction, setActiveUser, updateUser } from "./usersSlider";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {

  let { userId } = useParams();

  const { action, activeUser, users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState<string>(activeUser?.name ?? '');
  const [lastName, setLastName] = useState<string>(activeUser?.lastName ?? '');
  const [country, setCountry] = useState<string>(activeUser?.country ?? '');

  useEffect(() => {

    if (!activeUser) {
      const user = users.find((item: IUser) => item.id == userId);
      setName(user!.name);
      setLastName(user!.lastName)
      setCountry(user!.country);
      dispatch(setActiveUser(user))
    }


    return () => {
      dispatch(changeAction(false))
      dispatch(setActiveUser(undefined));
    }
  }, [])

  const onClickUpdate = () => {
    const userUpdated: IUser = {
      country,
      name,
      lastName,
      id: Number.parseInt(userId!)
    }
    dispatch(updateUser(userUpdated));
  }

  if (action) {
    Swal.fire({
      title: 'User Updated',
      confirmButtonText: 'OK',
    }).then((result) => {
      dispatch(changeAction(false))
      navigate('/users')
    })
  }

  return (
    <main>
      <div className="container">
        <div className="row mt-5 rounded justify-content-between" style={{ background: "#3E5641" }}>
          <div className="col-9">
            <h1 className="text-white">Create a user</h1>
          </div>
          <div className="col-3">
            <a className="btn btn-dark mb-2 mt-2" href="/users">Go Back</a>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-8">
            <form>
              <div className="row mt-2 mb-2">
                <div className="col-12">
                  <label className="form-label" htmlFor="nameInput">Name</label>
                  <input className="form-control" id="nameInput" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
              </div>
              <div className="row mt-2 mb-2">
                <div className="col-12">
                  <label className="form-label" htmlFor="lastNameInput">Last Name</label>
                  <input className="form-control" id="lastNameInput" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
              </div>
              <div className="row mt-2 mb-5">
                <div className="col-12">
                  <label className="form-label" htmlFor="countryInput">Country</label>
                  <input className="form-control" id="countryInput" type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
              </div>
              <div className="row justify-content-end">
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary" onClick={onClickUpdate}>Update user</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default UpdateUser