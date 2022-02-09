import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Listing = (props) => {
    const [editvalue, setEditValue] = useState(null)
    const { datas, deleteButton, editButton } = props;



    return (
        <>
            {datas.map((data, index) => (

                <ul>

                    <li key={index}>
                        {data}  <br />
                        <input value={data} onChange={(e) => setEditValue(e.target.value)} />
                        {<BrowserRouter>
                            <Routes>
                            <Route path="/edit" element={<button onClick={() => editButton(index)} >Edit</button>} />
                        
                        </Routes>
                        </BrowserRouter>}
                        <button onClick={() => deleteButton(index)}>Delete</button>
                    </li>
                </ul>

            ))}


        </>
    );
};

export default Listing;