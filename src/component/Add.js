import React, { useState } from 'react';


function Add(props) {
    const { handleSubmit } = props;

    const [input, setInput] = useState('');

    return (
        <div >
            <input type="text" placeholder="Add the Value" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => handleSubmit(input, setInput)} >Add</button>
        </div>
    );
}

export default Add;