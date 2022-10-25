import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';

const List = () => {

  const [data, setData] = useState([]);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:8008/api/imgapp/delete?id=${id}`, {
      headers: {
        "Content-Type":"application/json"    
      }
    })
    .then(res=> {
      console.log(res.data.message);
    })
    .catch(error => {
      console.log(error);
    })
  }

  const fetchUsers = ()=> {
    axios.get('http://localhost:8008/api/imgapp/list', {
      headers: {
        "Content-Type":"application/json"    
      }
    })
    .then(res => {
      setData(res.data);
    })
    .catch(err=> {
      console.log(err);
    })
  }

  useEffect(()=>{
    fetchUsers()
  },[deleteUser]);

  return (
    <div>
      <h1>List of users</h1>
      <div className='userlist-container' style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
        {data.length > 0 ? data.map((user, key) =>{
          return (
            <div key={key} className="a-user" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', background: 'gray', width: '30%'}}>
              <img src={`http://localhost:8008/api/imgapp/uploads/${user.imgpath}`} alt='' style={{width: '100%', margin: 'auto', textAlign: 'center'}} />
              <div className='other-details' style={{padding: '20px'}}>
                <p className="name">{user.fname}</p>
                <p className="date">{user.date}</p>
                <button type='button' onClick={()=> deleteUser(user._id)}>Delete</button>
              </div>
            </div>
          )
        }) : <p>No Users</p>
      }
      </div>
    </div>
  )
}

export default List