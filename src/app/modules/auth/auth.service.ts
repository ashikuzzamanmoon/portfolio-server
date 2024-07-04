import config from "../../config";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TUserLogin } from "./auth.interface";
import httpStatus from 'http-status'
import jwt from 'jsonwebtoken'
const loginUserIntoDb = async (payload: TUserLogin) => {
    // check user is exist or not
    const user = await User.isUserExistByEmail(payload.email)
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not exist!');
    }

    // check user is deleted or not
    if (user?.isDeleted === true) {
        throw new AppError(httpStatus.FORBIDDEN, "User is already deleted!");
    }

    // check password

    if (! await User.isPasswordMatched(payload.password, user?.password)) {
        throw new AppError(httpStatus.FORBIDDEN, "Password do not matched!")
    }

    const jwtPayload={
        email:user?.email,
        role:user?.role,
        name:user?.firstName + " " + user?.lastName
    }

    // accessToken
    const accessToken=jwt.sign(jwtPayload,config.jwt_secret as string,{expiresIn:config.jwt_accessToken_expiresIn})


    return {
        accessToken
    }


}


export const AuthServices = {
    loginUserIntoDb,

}