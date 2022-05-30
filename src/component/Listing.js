import React from 'react';
import './Add.css';

import { NavLink } from 'react-router-dom';




const Listing = (props) => {
   const { datas, deleteButton } = props;





    return (
        <>
        { datas.map((data, index) => (
            <li key={index}>
        <section id="app">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="comment">
            <p v-for="items in item" v-text="items"></p>
              </div>
              </div>
              </div>
          <div className="row">
            <div className="col-6">
            <textarea style={{marginBottom:"-75px"}} value={data}  type="text" className="input" placeholder="Write a comment" v-model="newItem" ></textarea>

            </div>
          </div>
        </div>
        <div className="container">
         
          <div className="row">
            <div className="col-6">
            <NavLink to={`edit/${index}`}>

                            {<button className='primaryContained float-right' style={{marginRight:"10px"}}>Edit</button>}
                        
                            </NavLink>
              <button onClick={() => deleteButton(index)} className='primaryContained float-right' >delete</button>
            
           
</div>
          </div>
        </div>
        
      </section>
    </li>   
    ))}



















         

        </>
    );
};

export default Listing;