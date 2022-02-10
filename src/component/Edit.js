import React, { useEffect, useState }from 'react';
import { useParams,Link } from 'react-router-dom';

function Edit(props) {
    let {  id } = useParams()
    const [editvalue, setEditValue] = useState(null)
    const {datas,saveButton} = props


 
useEffect(()=>{
    setEditValue(datas[id])
},[datas[id]])
    
    return (
        <div>
         
            <input type="text" value={editvalue} onChange={(e) => setEditValue(e.target.value)}/>
      
            <Link to='/'>
            <button onClick={()=>saveButton(editvalue,id)}>Save</button>
            </Link>
        </div>
    );
}

export default Edit;