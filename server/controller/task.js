import crypto from 'crypto'

import { addTimeStamp } from '../lib/util.js';

import {db} from '../models/index.js'

const Task = db.task

const Op = db.Sequelize.Op;

const create = async (req,res)=>{
    try{
        if(!req.body.text){
            res.status(400).send('Task should have a text');
            return;
        }
        const task = {
            id:crypto.randomUUID(),
            text:req.body.text,
            isComplete:req.body.isComplete?req.body.isComplete:false,
        };
        const data = await Task.create(task)
        if(data){
            res.status(201).send(data)
        }else {
            res.status(201).send('Task not created');
        }
    }catch(err){
        res.status(500).send('Something went wrong');
    }
}

const findOne = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await Task.findByPk(id);
        if(data){
            res.status(201).send(data);
        }
        else{
            res.status(201).send('Task not found');
        }
    }catch(err){
        res.status(500).send('Something went wrong');
    }
};

const update = async (req, res) => {
    try{
        const id = req.params.id;
        const task = {
            text:req.body.text,
            isComplete:req.body.isComplete,
            updatedAt:addTimeStamp()
        };
         const [num,data] = await Task.update(task,{
            where:{id},
            returning:true
        })
        if(num === 1){
            res.status(201).send(data);
        }else{
            res.status(201).send('Task did not update');
        }
    }catch(err){
        res.status(500).send('Something went wrong');
    }
    
};

const destroy = async (req, res) => {
    const id = req.params.id;
    try{
        const num = await Task.destroy({where:{id}})
        if(num === 1){
            res.status(201).send('Task Deleted');
        }else{
            res.status(404).send('Task does not exist');
        }
    }catch(err){
        res.status(500).send('Something went wrong');
    }
};

const findAll = async (req,res)=>{
    try{
        const searchText = req.query.search;

        const condition = searchText ?
         {
            text: {
                [Op.iLike]: `%${searchText}%`
            }
        } 
        : null;

        console.log(condition);

        const data = await Task.findAll({where:condition});
        
        console.log(searchText);
        console.log(data);
        if(data){
            res.status(201).send(data);
        }else{
            res.status(201).send('No data found');
        }
    }catch(err){
        res.status(500).send('Something went wrong');
    }
       
}

export {
    create as createTask ,
    findAll as findAllTask,
    findOne as findOneTask,
    destroy as destroyTask,
    update as updateTask
}