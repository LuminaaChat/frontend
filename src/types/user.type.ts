export type User = {
    _id: string;
    __v: number;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    pin: string;
    active: boolean;
    lastLoginAt: Date;
    createdAt: Date;
    updatedAt: Date;
};
