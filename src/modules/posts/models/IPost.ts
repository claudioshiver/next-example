import IUser from "../../users/models/IUser";

interface IPost {
    id: string;
    message: string;
    userId: string;
    user?: IUser;
}

export default IPost;
