import React, { useState, useEffect } from 'react'
import { fetch } from '../../api';
import Search from '../Search';
import List from '../List'
import './todo.scss'

const Todo = ({onOpen,onTaskClick}) =>{
    const [tasks,setTask] = useState(null);
    const [loading,setLoading] = useState(false);
    const [searchText,setSearchText]=useState('');

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
        fetchTasks(`/task`,setTask);
    },[]);

    useEffect(()=>{
        if(searchText){
            fetchTasks(`/task?search=${searchText}`,setTask);    
        }else if(!searchText){
            fetchTasks(`/task`,setTask);
        }
    },[searchText]);


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
                <Search searchText={searchText} setSearchText={setSearchText}/>
                <div className='addTask'><button onClick={onOpen}>Add Task</button></div>
                <List tasks={tasks} onTaskClick={onTaskClick}/> 
            </div>
        )
    }
    else return null;
}

export default Todo