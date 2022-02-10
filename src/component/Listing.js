import React from 'react';

import { Link } from 'react-router-dom';




const Listing = (props) => {
   const { datas, deleteButton } = props;





    return (
        <>
            {datas.map((data, index) => (

                <ul>

                    <li key={index}>
                      
                        <h3> {data}  </h3>


                        <Link to={`edit/${index}`}>

                            {<button >Edit</button>}
                        
                            </Link>

                        <button onClick={() => deleteButton(index)}>Delete</button>
                    </li>
                </ul>

            ))}

            

         

        </>
    );
};

export default Listing;