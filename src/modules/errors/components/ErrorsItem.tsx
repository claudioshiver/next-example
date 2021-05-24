import React from "react";
import IError from "../models/IError";
import {useAppDispatch} from "../../commons/hooks";
import { clearErrors } from "../state/slice";

interface ErrorsItemProps {
    error: IError
}

const ErrorsItem: React.FC<ErrorsItemProps> = function({ error }) {
    const dispatch = useAppDispatch();

    return (
        <div className="border border-red-700 bg-red-300 text-red-700 rounded py-2 px-4 mt-3">
            {error.name}: {error.message}

            <span className="ml-3 text-xl cursor-pointer"
                  onClick={() => dispatch(clearErrors())}>
                &times;
            </span>
        </div>
    )
};

export default ErrorsItem;
