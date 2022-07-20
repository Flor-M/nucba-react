import React from 'react'

export const FormTasks = ({setInputText, inputText}) => {

    const inputTextHandler =(e)=>{


    }

    const submitToDoHandler=(e)=>{

        e.preventDefault();
        
    }

    const deleteHandler=()=>{
        
    }

  return (
    <form onSubmit={()=> submitToDoHandler()}>

        <input 
        type='text'
        placeholder='Escribir tarea...' 
        value={inputText}
        onChange={inputTextHandler}
        />

        <button 
        type='submit'>
            Agregar tarea
        </button>

        <button 
        type='button' 
        onClick={()=> deleteHandler()}>
            Eliminar lista
        </button>

    </form>
  )
}
