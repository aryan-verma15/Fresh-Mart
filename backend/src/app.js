import express from 'express';
import { errorHandler } from './middlewares/error-handler.middleware.js';

const app = express();

// MIDDLEWARES

// ROUTES
import healthCheckRouter from './routes/health-check.router.js';

app.use('/api/v1/healthcheck', healthCheckRouter);
app.use(errorHandler);

export { app };
