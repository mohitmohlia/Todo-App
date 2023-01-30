import { useState } from 'react'
import { create, update } from '../api';
import AddTask from '../component/AddTask';
import Modal from '../component/Modal'
import Todo from '../component/Todo'
import './App.scss'

function App() {
  const [showModal,setShowModal] = useState(false);
  const [loading,setLoading] = useState(false);
  const [task,setTask] = useState(null);

  const onTaskClick = (task)=>{
    const selectedTask={text:task.text,id:task.id,isComplete:task.isComplete};
    setTask(selectedTask);
    setShowModal(true);
  }
  const onClose = () =>{
    setShowModal(false);
    setTask(null);
  }

  const handleAddTask = async (data) =>{
    try{
      setLoading(true);
      if(data.id){
        const response = await update(`/task/${data.id}`,data);
        if(response){
          setShowModal(false);
          setTask(null);
        } 
      }else{
        const response = await create('/task',data);
        if(response){
          setShowModal(false);
        }
      }
    }catch(err){
      console.log(err);
    }finally{
      setLoading(false);
      window.location.reload();
    }
  }

  return (
    <div className="App">
      <Todo onOpen={()=>setShowModal(true)} onTaskClick={onTaskClick}/>
      <Modal 
        showModal={showModal} 
        onClose={onClose}
        title={task?.id?'Edit':'Add'}
        component={
          <AddTask 
          onSubmit={handleAddTask} 
          isSubmitting={loading} 
          task={task}
          />
        }
        />
    </div>
  )
}

export default App
