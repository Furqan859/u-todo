import React, { useState } from 'react';


const Listing = (props) => {
    const [editvalue, setEditValue] = useState(null)
    const { datas, deleteButton, editButton } = props;



    return (
        <>
            {datas.map((data, index) => (

                <ul>
                   
                    <li key={index}>
                        {data}  <br />
                        <input value={datas} onChange={(e) => setEditValue(e.target.value)} />
                        
                        <button onClick={() => editButton(index)} >Edit</button>
                        <button onClick={() => deleteButton(index)}>Delete</button>
                    </li>
                </ul>

            ))}


        </>
    );
};

export default Listing;