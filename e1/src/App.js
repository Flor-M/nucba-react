import './App.css';

import { useState } from 'react';
import { FormTasks } from './Components/FormTasks';
import { ListTasks } from './Components/ListTasks';

/*
ESTOY ATRASADA Y ENTENDI LA MITAD,

Y TENGO QUE VOLVER A VER LAS CLASES



NO QUISE COPIAR Y PEGAR CODIGO QUE NO ENTIENDO ASI 

QUE LO ENTREGO ASI

Y DESPUES LO HAGO COMO CORRESPONDE

*/


const App = () => {

  const [inputText,setInputText]=useState("")
  const [todos,setTodos]=useState([]);

  return (
    <div>

      <FormTasks/>
      <ListTasks/>

    </div>
  );
}

export default App;
