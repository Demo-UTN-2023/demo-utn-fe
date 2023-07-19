import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces/IUser'
import { getUsers, postUser, deleteUser, putUser } from '../../state/actions/users-action';

// Define a type for the slice state
interface InitialState {
  activeUser: IUser | undefined;
  users: Array<IUser>;
  action: boolean;
}

// Define the initial state using that type
const initialState: InitialState = {
  activeUser: undefined,
  users: [
    { _id: '1', name: "Denner", lastname: 'Portuguez', country: 'Costa Rica' },
    { _id: '2', name: "Karol", lastname: 'Arce', country: 'Alemania' },
    { _id: '3', name: "Freivin", lastname: 'Campbell', country: 'Brasil' },
    { _id: '4', name: "Jimmy", lastname: 'Ugalde', country: 'Costa Rica' },
  ],
  action: false
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<IUser | undefined>) => {
      state.activeUser = action.payload;
    },
    changeAction: (state, action: PayloadAction<boolean>) => {
      state.action = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      if (action.payload) {
        state.users = action.payload
      }
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.action = true;
      }
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.users = action.payload;
      }
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.action = true;
      }
    });
  },
});

export const getAllUsers = createAsyncThunk('users/getAllUsers', getUsers);
export const updateUser = createAsyncThunk('users/updateUser', putUser);
export const removeUser = createAsyncThunk('users/removeUser', deleteUser);
export const createUser = createAsyncThunk('users/createUser', postUser);

// Export actions
export const { setActiveUser, changeAction } = usersSlice.actions

// Export reducer
export default usersSlice.reducer