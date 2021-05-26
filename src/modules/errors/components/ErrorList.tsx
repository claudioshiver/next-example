import React from "react";
import ErrorItem from "./ErrorItem";
import {RootState} from "../../commons/store";
import {connect} from "react-redux";
import {selectErrors} from "../state/slice";

type ErrorListProps =
    ReturnType<typeof mapStateToProps>;

const ErrorList: React.FC<ErrorListProps> = function({ errors }) {
    return !!errors && errors.length > 0 && (
        <div className="fixed top-0 right-3 z-50">
           {errors.map(error => (
                <ErrorItem key={error.message} error={error}/>
            ))}
        </div>
    )
};

const mapStateToProps = function(state: RootState) {
    return {
        errors: selectErrors()(state)
    }
};

export default connect(mapStateToProps)(ErrorList);
