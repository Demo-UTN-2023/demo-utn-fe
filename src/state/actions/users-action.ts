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
    delete data.id;
    const res = await axios.post(`${BASE_API_URL}/users`, data);

    return true;
  } catch (error) {
    throw new Error('Error getting all users')
  }
}

export const putUser = async (user: IUser) => {
  try {
    const data = { ...user };
    const res = await axios.put(`${BASE_API_URL}/users/${user.id}`, data);

    return res.data;
  } catch (error) {
    throw new Error('Error getting all users')
  }
}

export const deleteUser = async (user: IUser) => {
  try {
    const res = await axios.delete(`${BASE_API_URL}/users/${user.id}`);
    const users = await getUsers();
    return users;
  } catch (error) {
    throw new Error('Error getting all users')
  }
}