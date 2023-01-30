import express from 'express'
import { taskRouter } from './task.js'

const protectedRoute = express.Router();

protectedRoute.use('/task',taskRouter);

export { protectedRoute };