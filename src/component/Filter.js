import React, { useState } from 'react';

// This holds a list of some fiction people
// Some  have the same name but different age and id

function Filter({datas}) {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(datas);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = datas.filter((user) => {
        return user.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(datas);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
      
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user}</span>
              
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default Filter;