import mongoose from 'mongoose';
import { ApiError } from '../utils/api-error.js';

const errorHandler = (error, req, res, next) => {
    let err = error;
    if (!(err instanceof ApiError)) {
        const statusCode = err.statusCode || err instanceof mongoose ? 400 : 500;
        const message = err.message || 'Something went wrong';

        err = new ApiError(statusCode, message, err?.errors || [], error.stack);
    }

    const response = {
        ...err,
        message: err.message,
        ...(process.env.NODE_ENV === 'development' ? { stack: err.stack } : {}),
    };

    return res.status(err.statusCode).json(response);
};

export { errorHandler };
