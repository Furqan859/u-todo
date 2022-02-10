import React, { useState }from 'react';

function Edit(props) {
    const [editvalue, setEditValue,value] = useState(null)
    const {datas} = props
    return (
        <div>
        {datas}
            <input type="text" value={editvalue} onChange={(e) => setEditValue(e.target.value)}/>
            <button>Save</button>
        </div>
    );
}

export default Edit;