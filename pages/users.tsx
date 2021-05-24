import {initializeStore} from "../src/modules/commons/store";
import {getRandomUsers} from "../src/modules/users/state/thunk";
import UserList from "../src/modules/users/components/UserList";
import DefaultTemlpate from "../src/templates/DefaultTemplate";

function Users() {
    return (
        <DefaultTemlpate>
            <UserList/>
        </DefaultTemlpate>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    const reduxStore = initializeStore();
    const {dispatch} = reduxStore;

    await dispatch(getRandomUsers({number:5}));

    return {props: {initialReduxState: reduxStore.getState()}}
}

export default Users;
