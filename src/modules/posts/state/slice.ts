import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../commons/store';
import IPost from "../models/IPost";
import LoadingState from "../../commons/enums/LoadingState";
import {getRandomPosts} from "./thunk";
import {postsAdapter, postsSelectors} from "./adapter";
import {usersSelectors} from "../../users/state/adapter";

export interface PostsState {
    status: LoadingState;
}

const initialState: PostsState = {
    status: LoadingState.LOADED
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState(initialState),
    reducers: {},
    extraReducers: {
        [getRandomPosts.pending.type](state) {
            state.status = LoadingState.LOADING;
        },
        [getRandomPosts.rejected.type](state) {
            state.status = LoadingState.FAILED;
        },
        [getRandomPosts.fulfilled.type](state, action: PayloadAction<IPost[]>) {
            state.status = LoadingState.LOADED;
            postsAdapter.setAll(state, action.payload);
        }
    }
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPosts = () => (state: RootState) => postsSelectors.selectAll(state);
export const selectPostsLoading = () => (state: RootState) => state.posts.status;

export default postsSlice.reducer;
