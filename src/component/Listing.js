import React from 'react';

import { Link } from 'react-router-dom';




const Listing = (props) => {
   const { datas, deleteButton, editButton } = props;





    return (
        <>
            {datas.map((data, index) => (

                <ul>

                    <li key={index}>
                        {data}  <br />
                        <h5> {data}  </h5>


                        <Link to='/edit'>

                            {<button onClick={() => editButton(index)} >Edit</button>}
                        
                            </Link>

                        <button onClick={() => deleteButton(index)}>Delete</button>
                    </li>
                </ul>

            ))}

            

         

        </>
    );
};

export default Listing;