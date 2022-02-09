import React,{ useState }  from 'react';
import Add from './component/Add';
import Listing from './component/Listing';
import styles from './App.css';


 function App() {
  const [datas , setDatas] = useState([]);
  
 
    
      const handleSubmit = (input,setInput) => {
          
          if (!input) {
            alert("Task to be added should not be empty!")
          } else {
            setDatas((a) => [input,...a ])
           
      
            setInput("")
  
      
          }

        }
          const deleteButton = (index) => {

            const List = [...datas];
            List.splice(index, 1);
            setDatas(List);
           
        }


        const editButton = (index) => {

          console.log(index);
      
        }
      
      
        
      return (
          <div className="App">
          {datas}
         
         <Add handleSubmit={handleSubmit} />
         <Listing datas={datas} deleteButton={deleteButton} editButton={editButton}/>
          </div>
     
     );
  
   
}
export default App;