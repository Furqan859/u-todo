import React from 'react';

const Listing = (props) => {
    const {datas,deleteButton,editButton} = props;
    
    return (
        <>
        {datas.map((data,index) => (
            
                <ul>
               console index {index} 
                <li key={index}>
               {data}  <br/>
                <button onClick={()=>editButton(index)}>Edit</button>
                <button onClick={()=>deleteButton(index )}>Delete</button>
                </li>
                </ul>
             
        ))}
           
           
        </>
    );
};

export default Listing;