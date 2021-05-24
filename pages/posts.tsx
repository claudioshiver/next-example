import {initializeStore} from "../src/modules/commons/store";
import {getRandomPosts} from "../src/modules/posts/state/thunk";
import PostList from "../src/modules/posts/components/PostList";
import DefaultTemlpate from "../src/templates/DefaultTemplate";

function Posts() {
    return (
        <DefaultTemlpate>
            <PostList/>
        </DefaultTemlpate>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    const reduxStore = initializeStore();
    const {dispatch} = reduxStore;

    await dispatch(getRandomPosts({number:15, usersNumber:5}));

    return {props: {initialReduxState: reduxStore.getState()}}
}

export default Posts;
