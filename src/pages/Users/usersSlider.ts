import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces/IUser'

// Define a type for the slice state
interface InitialState {
  activeUser: IUser | undefined;
  users: Array<IUser>;
}

// Define the initial state using that type
const initialState: InitialState = {
  activeUser: undefined,
  users: [],
}

export const usersSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<IUser>) => {
      state.activeUser = action.payload;
    },
  }
})

// Export actions
export const { setActiveUser } = usersSlice.actions

// Export reducer
export default usersSlice.reducer