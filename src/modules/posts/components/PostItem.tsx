import React, {useMemo} from "react";
import classNames from "classnames";
import IPost from "../models/IPost";
import Post from "../models/Post";
import {connect} from "react-redux";
import {selectUser} from "../../users/state/slice";

type PostItemProps =
    { post: IPost } &
    ReturnType<typeof mapStateToProps>;

const PostItem: React.FC<PostItemProps> = function (props: PostItemProps) {
    const {
        post: postRaw,
        user: userRaw
    } = props;

    console.log('PostItem', postRaw.id)

    const post = Post.get({
        ...postRaw,
        user: userRaw
    });

    const classes = useMemo(() => {
        return classNames('py-3 px-4 border border-primary mt-5', {
            'bg-white': !post.user?.active,
            'text-primary': !post.user?.active,
            'bg-primary': post.user?.active,
            'text-white': post.user?.active
        });
    }, [post.user]);

    return (
        <div className={classes}>
            <strong>MESSAGE:</strong>
            <div className="mb-4">
                 {post.message}
            </div>

            <div className="text-xs mb-2">
                <strong>ID:</strong> {post.id}
            </div>

            <div className="flex justify-between text-xs">
                <div><strong>USER ID:</strong> {post.userId}</div>
                {post.user && <div><strong>USER NAME:</strong> {post.user?.fullName}</div>}
            </div>
        </div>
    )
};

const mapStateToProps = (state, { post }) => ({
    user: selectUser(post.userId)(state)
});

export default connect(mapStateToProps)(PostItem);
