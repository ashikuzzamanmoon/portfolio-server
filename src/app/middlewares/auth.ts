import { NextFunction, Request, Response } from "express";
import MyAppError from "../errors/AppError";
import httpStatus from "http-status";
import jwt, { JwtPayload, Secret } from 'jsonwebtoken'
import config from "../config";
import catchAsync from "../utils/catchAsync";
import { User } from "../modules/user/user.model";


const auth = () => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {

        const token = req.headers.authorization;

        if (!token) {
            throw new MyAppError(httpStatus.UNAUTHORIZED, 'Unauthorized Access', 'You do not have the necessary permissions to access this resource.')
        }

        const decoded = jwt.verify(token, config.jwt_secret as Secret) as JwtPayload;
        // console.log(decoded);
        const { email, role, iat } = decoded

        // check user exist or not
        const userData = await User.isUserExistByEmail(email);

        if (!userData) {
            throw new MyAppError(httpStatus.UNAUTHORIZED, 'Unauthorized Access', 'You do not have the necessary permissions to access this resource.')
        }

        // for password change invalid the previous token
    

        // if (roles && !roles.includes(role)) {
        //     throw new MyAppError(httpStatus.UNAUTHORIZED, 'Unauthorized Access', 'You do not have the necessary permissions to access this resource.')
        // }

        req.user = decoded;

        next();
    })
}

export default auth;