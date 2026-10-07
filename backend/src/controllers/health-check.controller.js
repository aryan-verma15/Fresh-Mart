import { ApiResponse } from '../utils/api-response.js';
import { asyncHandler } from '../utils/async-handler.js';
import { ApiError } from '../utils/api-error.js';

const healthCheck = asyncHandler(async (req, res) => {
    return res.status(200).json(new ApiResponse(200, 'Ok', 'Health check passed'));
});

const testError = asyncHandler(async (req, res) => {
    throw new ApiError(500, 'This is a test error');
});

export { healthCheck, testError };
