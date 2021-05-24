import {createEntityAdapter} from '@reduxjs/toolkit';
import {RootState} from '../../commons/store';
import IPost from "../models/IPost";

export const postsAdapter = createEntityAdapter<IPost>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (post) => post.id
});

export const postsSelectors = postsAdapter.getSelectors<RootState>(
    (state) => state.posts
);
