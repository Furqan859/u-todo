import React, { useState } from 'react';
import Add from './component/Add';
import Listing from './component/Listing';
import Edit from './component/Edit';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';


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


    console.log("this is edid index ", index)


  }



  return (
    <div>



      <Listing datas={datas} deleteButton={deleteButton} editButton={editButton} />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Add handleSubmit={handleSubmit} />} />
         
        </Routes>
      </BrowserRouter>

    </div>

  );


}
export default App;