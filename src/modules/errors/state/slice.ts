import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../commons/store';
import {getRandomUsers} from "../../users/state/thunk";
import IError from "../models/IError";
import {getRandomPosts} from "../../posts/state/thunk";
import {logger} from "../../commons/logger";

export interface ErrorsState {
    items: IError[]
}

const initialState: ErrorsState = {
    items: []
};

export const errorsSlice = createSlice({
    name: 'errors',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addError: (state: ErrorsState, action: PayloadAction<IError>) => {
            state.items.push(action.payload);
        },
        setErrors: (state: ErrorsState, action: PayloadAction<IError[]>) => {
            return { items: action.payload };
        },
        clearErrors: () => {
            return { items: [] };
        }
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: {
        [getRandomUsers.pending.type]() {
            return { items: [] };
        },
        [getRandomUsers.rejected.type](state: ErrorsState, action: PayloadAction<any, any, any, Error>) {
            state.items.push(action.error);
        },
        [getRandomPosts.pending.type]() {
            return { items: [] };
        },
        [getRandomPosts.rejected.type](state: ErrorsState, action: PayloadAction<any, any, any, Error>) {
            state.items.push(action.error);
        }
    }
});

export const {addError, setErrors, clearErrors} = errorsSlice.actions;

export const errorsMiddleware = function() {
    return (next: Dispatch) => (action: PayloadAction<any, any, any, Error>) => {
        if(action.type.endsWith('/rejected')){
            const { error, meta, type } = action;
            logger.error({ error, meta, type });
        }

        return next(action);
    };
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectErrors = (state: RootState) => state.errors.items;

export default errorsSlice.reducer;
