import { User } from "../../../users/users-list/shared/user.model";

export class Car {
    public id?: number;
    public carYear?: number;
    public licensePlate?: string;
    public model?: string;
    public color?: string;
    public user?: User;
}
