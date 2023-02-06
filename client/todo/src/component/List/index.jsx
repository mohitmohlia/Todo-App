import { destroy } from '../../api';
import deleteImg from '/delete.png';
import './list.scss'
import { useEffect } from 'react';

const List = ({tasks,onTaskClick}) =>{

    const handleDelete=async(e,id)=>{
        try{
            e.stopPropagation();
            await destroy(`/task/${id}`);
        }catch(err){
            console.log(err);
        }finally{
           window.location.reload();
        }
    }

    const handleTaskClick =(task)=>{
        onTaskClick(task);
    }
    
    return (
        <table className="tasks">
            <tr className='table-header-row'>
                <th>Task</th>
                <th>Task status</th>
                <th>Action</th>
            </tr>
            {
                tasks?.map(task=>{
                    return (
                        <tr className='table-data-row' onClick={()=>handleTaskClick(task)}>
                            <td className='col-1' key={task.id}>{task.text}</td>
                            <td className='col-2'>{task.isComplete?'Completed':"Pending"}</td>
                            <td className='col-3'><img onClick={(e)=>handleDelete(e,task.id)} src={deleteImg}/></td>
                        </tr>
                    );
                })
            }
        </table>
    );
}
export default List

