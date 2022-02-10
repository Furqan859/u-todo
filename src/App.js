import React, { useState } from 'react';
import Add from './component/Add';
import Listing from './component/Listing';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Edit from './component/Edit';



function App() {
  const [datas, setDatas] = useState([]);



  const handleSubmit = (input, setInput) => {

    if (!input) {
      alert("Task to be added should not be empty!")
    } else {
      setDatas((a) => [input, ...a])
      setInput("")
    }
  }
  const deleteButton = (index) => {

    const List = [...datas];
    List.splice(index, 1);
    setDatas(List);

  }


  const editButton = (index) => {
        
    setDatas(value[index])
  }

  <Link to="/">Home</Link>

  return (
    <div>
      
    <Add handleSubmit={handleSubmit} />
      <BrowserRouter>
        <Routes>
         
      <Route path='/' element={<Listing datas={datas} deleteButton={deleteButton} editButton={editButton} />} />
          <Route path='/edit' element={<Edit datas={datas} value={value}/>} />
        </Routes>
      </BrowserRouter>

    </div>

  );


}
export default App;