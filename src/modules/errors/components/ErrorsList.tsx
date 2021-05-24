import React from "react";
import ErrorsItem from "./ErrorsItem";
import IError from "../models/IError";

interface ErrorsListProps {
    errors: IError[]
}

const ErrorsList: React.FC<ErrorsListProps> = function({ errors }) {
    return !!errors && errors.length > 0 && (
        <div className="fixed top-0 right-3 z-50">
           {errors.map(error => (
                <ErrorsItem key={error.message} error={error}/>
            ))}
        </div>
    )
};

export default ErrorsList;
