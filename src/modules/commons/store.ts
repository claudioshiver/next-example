import { configureStore } from '@reduxjs/toolkit';
import {useMemo} from "react";
import {usersSlice} from "../users/state/slice";
import {errorsSlice} from "../errors/state/slice";
import {postsSlice} from "../posts/state/slice";

let store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        errors: errorsSlice.reducer,
        posts: postsSlice.reducer
    }
});

function initStore(preloadedState) {
    store = configureStore({
        reducer: {
            users: usersSlice.reducer,
            errors: errorsSlice.reducer,
            posts: postsSlice.reducer
        },
        preloadedState
    });

    return store;
}

export const initializeStore = (preloadedState?: RootState) => {
    let _store = store ?? initStore(preloadedState);

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        });
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store;
    // Create the store once in the client
    if (!store) store = _store;

    return _store;
};

export function useStore(initialState) {
    return useMemo(() => initializeStore(initialState), [initialState])
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
