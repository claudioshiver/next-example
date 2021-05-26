import {useVariant} from "../../commons/hooks";
import React from "react";
import {getRandomUsers} from "../state/thunk";
import Button from "../../commons/components/Button";
import Badge from "../../commons/components/Badge";
import UserItem from "./UserItem";
import {AppDispatch, RootState} from "../../commons/store";
import {connect} from "react-redux";
import {selectUsers, selectUsersLoading} from "../state/slice";
import {useLogger} from "../../commons/logger";

type UserListProps =
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>

const UserList: React.FC<UserListProps> = function(props: UserListProps) {
    const {
        users,
        loading,
        getRandomUsers
    } = props;

    const logger = useLogger(UserList.name);
    logger.info('render');

    const variant = useVariant(loading);

    return (
        <div className="p-5 bg-white border border-primary">
            <Button onClick={getRandomUsers}>
                LOAD RANDOM USERS
            </Button>

            <div className="mt-3">
                <Badge variant={variant}>
                    {loading}
                </Badge>
            </div>

            <div className="mt-3">
                {users && users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        </div>
    )
};

const mapStateToProps = function(state: RootState) {
    return {
        users: selectUsers()(state),
        loading: selectUsersLoading()(state)
    }
};

const mapDispatchToProps = function(dispatch: AppDispatch) {
    return {
        getRandomUsers: () => dispatch(
            getRandomUsers({
                number:5
            })
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
