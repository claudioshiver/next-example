import React, {useMemo} from "react";
import User from "../models/User";
import {toggleActiveUser} from "../state/slice";
import classNames from "classnames";
import {connect} from "react-redux";
import {AppDispatch} from "../../commons/store";
import IUser from "../models/IUser";
import {useLogger} from "../../commons/logger";

type UserItemProps =
    { user: IUser } &
    ReturnType<typeof mapDispatchToProps>;

const UserItem: React.FC<UserItemProps> = function (props: UserItemProps) {
    const {
        user: userRaw,
        toggleActiveUser
    } = props;

    const logger = useLogger(UserItem.name);
    logger.info('render %s', userRaw.id);

    const user = User.get(userRaw);

    const classes = useMemo(() => {
        return classNames('py-3 px-4 border border-primary mt-5 cursor-pointer hover:bg-primary hover:text-white', {
            'bg-white': !user.active,
            'text-primary': !user.active,
            'bg-primary': user.active,
            'text-white': user.active
        });
    }, [user]);

    return (
        <div className={classes}
             onClick={toggleActiveUser}>
            <div className="mb-4">
                <strong>AUTHOR:</strong> {user.fullName}
            </div>

            <small className="block text-xs">
                <strong>ID:</strong> {user.id}
            </small>
        </div>
    )
};

const mapDispatchToProps = function(dispatch: AppDispatch, { user }) {
    return {
        toggleActiveUser: () => dispatch(
            toggleActiveUser(user.id)
        )
    }
};

export default connect(null, mapDispatchToProps)(UserItem);
