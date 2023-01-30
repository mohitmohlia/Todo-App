import express from 'express';
import { createTask, updateTask ,destroyTask, findAllTask, findOneTask }  from '../controller/task.js';

const taskRouter = express.Router({mergeParams:true});

taskRouter.post('/',createTask);

taskRouter.put('/:id',updateTask);

taskRouter.delete('/:id',destroyTask);

taskRouter.get('/',findAllTask);

taskRouter.get('/:id',findOneTask);

export { taskRouter}