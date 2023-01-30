import { useState, useEffect } from 'react'
import './todo.scss'
import { fetch } from '../../api';
import Search from '../Search';
import List from '../List'

const Todo = ({onOpen,onTaskClick}) =>{
    const [tasks,setTask] = useState(null);
    const [loading,setLoading] = useState(false);
    const fetchTasks = async(url,cb) =>{
        try{
            setLoading(true);
            const tasks = await fetch(url);
            cb(tasks);
        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(!tasks){
            fetchTasks('/task',setTask)
        }
    },[tasks]);

    if(loading){
        return (
            <div className='todo'>
                Loading.....
            </div>
        );
    }
    if(tasks){
        return (
            <div className='todo'>
                <Search/>
                 <div className='addTask'><button onClick={onOpen}>Add Task</button></div>
                <List tasks={tasks} onTaskClick={onTaskClick}/> 
            </div>
        )
    }
    else return null;
}

export default Todo