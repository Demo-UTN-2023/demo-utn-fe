import axios from "axios";
import { BASE_API_URL } from "../../components/constants";
import { IUser } from "../../interfaces/IUser";


export const getUsers = async () => {
  try {
    const res = await axios.get(`${BASE_API_URL}/users`);

    return res.data;
  } catch (error) {
    throw new Error('Error getting all users')
  }
}

export const postUser = async (user: IUser) => {
  try {
    const data = { ...user };
    delete data._id;
    const res = await axios.post(`${BASE_API_URL}/users`, data);

    return true;
  } catch (error) {
    throw new Error('Error getting all users')
  }
}

export const putUser = async (user: IUser) => {
  try {
    const res = await axios.patch(`${BASE_API_URL}/users/${user._id}`, user);

    return res.data;
  } catch (error) {
    throw new Error('Error getting all users')
  }
}

export const deleteUser = async (user: IUser) => {
  try {
    const res = await axios.delete(`${BASE_API_URL}/users/${user._id}`);
    const users = await getUsers();
    return users;
  } catch (error) {
    throw new Error('Error getting all users')
  }
}