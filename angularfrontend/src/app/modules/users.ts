import {Role} from './role';

export interface Users {
    userName: string;
    userFirstName: string;
    userLastName: string;
    userPassword: string;
    role: Role;
}
