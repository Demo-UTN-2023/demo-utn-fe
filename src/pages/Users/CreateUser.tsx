import { useAppSelector } from "../../hooks/useAppSelector"
import { IUser } from "../../interfaces/IUser";
import { changeAction, createUser } from "./usersSlider";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import Swal from 'sweetalert2'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {

  const { users, action } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [country, setCountry] = useState<string>('');


  const onClickCreate = () => {
    const user: IUser = {
      country,
      name,
      lastName
    }
    dispatch(createUser(user));
  }

  if (action) {
    Swal.fire({
      title: 'Do you want to delete the user?',
      showDenyButton: true,
      confirmButtonText: 'Cancel',
      denyButtonText: `Delete`,
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
                  <button type="submit" className="btn btn-primary" onClick={onClickCreate}>Create user</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CreateUser