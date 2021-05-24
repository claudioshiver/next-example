import IUser from "./IUser";
import {useMemo} from "react";

class User implements IUser {
    id: string;
    name: string;
    surname: string;
    active: boolean;

    static get(data: IUser) {
        return useMemo(() => {
            return Object.assign(new User(), data);
        }, [data]);
    }

    get fullName() {
        return this.name + ' ' + this.surname;
    }
}

export default User;
