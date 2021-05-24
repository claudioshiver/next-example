import {createEntityAdapter} from '@reduxjs/toolkit';
import {RootState} from '../../commons/store';
import IUser from "../models/IUser";

export const usersAdapter = createEntityAdapter<IUser>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (user) => user.id
});

export const usersSelectors = usersAdapter.getSelectors<RootState>(
    (state) => state.users
);
