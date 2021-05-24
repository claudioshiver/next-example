import {useVariant} from "../../commons/hooks";
import React from "react";
import Button from "../../commons/components/Button";
import Badge from "../../commons/components/Badge";
import {getRandomPosts} from "../state/thunk";
import {connect} from "react-redux";
import {selectPosts, selectPostsLoading} from "../state/slice";
import PostsItem from "./PostItem";
import {AppDispatch, RootState} from "../../commons/store";

type PostListProps =
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const PostList: React.FC<PostListProps> = function(props: PostListProps) {
    const {
        posts,
        loading,
        getRandomPosts
    } = props;

    console.log('PostList')

    const variant = useVariant(loading);

    return (
        <div className="p-5 bg-white border border-primary">
            <Button onClick={getRandomPosts}>
                LOAD RANDOM POSTS
            </Button>

            <div className="mt-3">
                <Badge variant={variant}>
                    {loading}
                </Badge>
            </div>

            <div className="mt-3">
                {posts && posts.map(post => (
                    <PostsItem key={post.id} post={post}/>
                ))}
            </div>
        </div>
    )
};

const mapStateToProps = function(state: RootState) {
    return {
        posts: selectPosts()(state),
        loading: selectPostsLoading()(state)
    }
};

const mapDispatchToProps = function(dispatch: AppDispatch) {
    return {
        getRandomPosts: () => dispatch(getRandomPosts({
            number:15,
            usersNumber:5
        }))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
