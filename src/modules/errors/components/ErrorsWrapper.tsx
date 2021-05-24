import React from "react";
import ErrorsList from "./ErrorsList";
import {useSelector} from "react-redux";
import {selectErrors} from "../state/slice";

const ErrorsWrapper: React.FC = function() {
    const errors = useSelector(selectErrors);

    return !!errors && errors.length > 0 && (
        <ErrorsList errors={errors}/>
    )
};

export default ErrorsWrapper;
