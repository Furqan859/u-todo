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
         
            <textarea className="input" type="text" value={editvalue} onChange={(e) => setEditValue(e.target.value)} style={{height:"250px" , width:"700px" , display:"flex", marginRight:"auto",marginLeft:"auto", marginTop:"10px"}}></textarea>
      
            <Link to='/'>
            <button style={{marginBottom:"10px" , marginTop:"10px" , display:"flex", marginRight:"auto",marginLeft:"auto"}} className='primaryContained float-right' onClick={()=>saveButton(editvalue,id)}>Save</button>
            </Link>
        </div>
    );
}

export default Edit;