import IPost from "./IPost";
import User from "../../users/models/User";
import {useMemo} from "react";

class Post implements IPost {
    id: string;
    message: string;
    userId: string;
    user?: User;

    static get(data: IPost) {
        return useMemo(() => {
            const post = Object.assign(new Post(), data);

            if(!!data.user) {
                post.user = Object.assign(new User(), data.user);
            }

            return post;
        }, [data]);
    }
}

export default Post;
