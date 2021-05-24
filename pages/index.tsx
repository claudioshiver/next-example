import {initializeStore} from "../src/modules/commons/store";
import {getRandomUsers} from "../src/modules/users/state/thunk";
import {getRandomPosts} from "../src/modules/posts/state/thunk";
import UserList from "../src/modules/users/components/UserList";
import PostList from "../src/modules/posts/components/PostList";
import DefaultTemlpate from "../src/templates/DefaultTemplate";

function Home() {
    return (
        <DefaultTemlpate>
            <UserList/>
            <PostList/>
        </DefaultTemlpate>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    const reduxStore = initializeStore();
    const {dispatch} = reduxStore;

    await dispatch(getRandomUsers({number:5}));
    await dispatch(getRandomPosts({number:15, usersNumber:5}));

    return {props: {initialReduxState: reduxStore.getState()}}
}

export default Home;
