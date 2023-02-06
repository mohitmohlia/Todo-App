import { useCallback, useEffect } from 'react';
import './modal.scss'

const Modal = ({showModal,onClose,component,title})=>{

    const closeOnEscapeKeyDown = useCallback((e)=>{
        if(e.charCode || e.keyCode===27){
            onClose();
        }
    },[onClose]);
    
    useEffect(()=>{
        document.body.addEventListener('keydown',closeOnEscapeKeyDown);
        return ()=>{
            document.body.removeEventListener('keydown',closeOnEscapeKeyDown);
        }
    },[closeOnEscapeKeyDown])

    if(!showModal){
        return null;
    }else{
        return (
            <div className="modal" onClick={onClose}>
                <div className='modal-content' onClick={(e)=>e.stopPropagation()}>
                    <div className='modal-header'>
                        <div className='modal-info'>
                            <h4>{title} your task</h4>
                            <h2>Keep up the good habit for completing tasks !</h2>
                        </div>
                        <button onClick={onClose}>close</button>
                    </div>
                    <div className='modal-body'>
                        {component}
                    </div>
                </div>
            </div>  
        )
    }
}
export default Modal