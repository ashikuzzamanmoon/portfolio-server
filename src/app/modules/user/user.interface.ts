import { Model } from "mongoose";

export type TUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  isDeleted: boolean;
};

export interface UserModel extends Model<TUser> {
  isUserExistByEmail(email: string): Promise<TUser>;
  isPasswordMatched(
    plainPassword: string,
    hashPassword: string
  ): Promise<boolean>;
}
