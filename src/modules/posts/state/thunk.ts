import {fetchPosts} from "./service";
import IPost from "../models/IPost";
import {createAsyncThunk} from "@reduxjs/toolkit";

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(getRandomUsers())`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getRandomPosts = createAsyncThunk(
    'posts/getRandomPosts',
    async (payload: { number: number, usersNumber: number; }): Promise<IPost[]> => {
        const response = await fetchPosts(payload.number, payload.usersNumber);
        // The value we return becomes the `fulfilled` action payload

        return response.data as IPost[];
    }
);
