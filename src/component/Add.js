import React, { useState } from 'react';
import './Add.css';
import Filter from './Filter';


function Add(props) {
    const { handleSubmit , datas } = props;

    const [input, setInput] = useState('');
    

    return (
        <section className="section">
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
      <textarea value={input} onChange={(e) => setInput(e.target.value)} type="text" className="input" placeholder="Write a comment" v-model="newItem" style={{height: "106px",
        width: "605px"}} ></textarea>
      <Filter datas={datas}/>

          <button onClick={() => handleSubmit(input, setInput)} className='primaryContained float-right' type="submit">Add Comment</button>
        </div>
      </div>
    </div>
    
    
  </section>
        
    );
}

export default Add;