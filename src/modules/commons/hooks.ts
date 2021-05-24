import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
import {useMemo} from "react";
import LoadingState from "./enums/LoadingState";
import {BadgeType} from "./components/Badge";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useVariant = (loading) => useMemo(() => {
    return loading === LoadingState.FAILED
        ? BadgeType.ERROR
        : loading === LoadingState.LOADING
            ? BadgeType.WARNING
            : BadgeType.SUCCESS
}, [loading]);
