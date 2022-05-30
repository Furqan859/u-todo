import React, { useState } from 'react';
import Add from './component/Add';
import Listing from './component/Listing';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Edit from './component/Edit';
import Header from './pages/header/Header';
import Footer from './pages/footer/Footer';




function App() {
  const [datas, setDatas] = useState('');



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


  
const saveButton=(editvalue,id)=>{
  let newData = [...datas];
  newData[id] = editvalue;
  setDatas([...newData]);
  // const Save = [...datas];
  // Save.splice(id, 1 ,editvalue );
  // setDatas(Save);
}
  

  

  <Link to="/">Home</Link>

  return (
    <div className='App'>
      
    
      <BrowserRouter>
      <Header/>
        <Routes>
         
      <Route path='/' element={[<Add handleSubmit={handleSubmit} datas={datas} />,<Listing datas={datas} deleteButton={deleteButton} />]} />
          <Route path='/edit/:id' element={<Edit datas={datas}  saveButton={saveButton} setDatas={setDatas}/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

      

    </div>

  );


}
export default App;