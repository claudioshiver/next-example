import React from "react";
import IError from "../models/IError";
import { clearErrors } from "../state/slice";
import {AppDispatch} from "../../commons/store";
import {connect} from "react-redux";

type ErrorItemProps =
    { error: IError } &
    ReturnType<typeof mapDispatchToProps>;

const ErrorItem: React.FC<ErrorItemProps> = function({ error, clearErrors }) {
    return (
        <div className="border border-red-700 bg-red-300 text-red-700 rounded py-2 px-4 mt-3">
            {error.name}: {error.message}

            <span className="ml-3 text-xl cursor-pointer"
                  onClick={clearErrors}>
                &times;
            </span>
        </div>
    )
};

const mapDispatchToProps = function(dispatch: AppDispatch) {
    return {
        clearErrors: () => dispatch(clearErrors())
    }
};

export default connect(null, mapDispatchToProps)(ErrorItem);
