import { useState } from 'react';
import './addTask.scss';

const AddTask =({onSubmit,isSubmitting=false,task={text:'',isComplete:false,id:null}})=>{

    const [inputs,setInputs] = useState(task);
    
    const handleOnChange=(event)=>{
        const name = event.target.name;
        const value = event.target.type ==='checkbox'? event.target.checked: event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit =(event)=>{
        event.preventDefault();    
        onSubmit(inputs);
    }


    return (
        <form onSubmit={handleSubmit} className='form'>
            <label for="text">Task</label>
                <input 
                    type='text'
                    placeholder="Enter task here"
                    id='text'
                    name='text'
                    value={inputs?.text || ''}
                    onChange={handleOnChange}
                  />
                  
            <label for="isComplete">is task already complete?</label>
                <input 
                    type='checkbox' 
                    className='checkbox' 
                    id="isComplete" 
                    name="isComplete"
                    value={inputs?.isComplete || false}
                    checked={inputs?.isComplete?'checked' : null}
                    onChange={handleOnChange}
                    />
            <button type="submit" disabled={isSubmitting} >{inputs?.id?'Edit':'+ Add'} task</button>
        </form>
    )
}
export default AddTask