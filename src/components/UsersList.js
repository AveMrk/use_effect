import React from 'react'

export default function UsersList({users, changeUser}) {
  const handleClick = (user) => {
    changeUser(user);
    console.log('active user:', user)
  }
  return (
    <div className='users-list'>
      {users.map((user)=>(
        <div 
        className='user-item' 
        key={user.id}
        onClick={()=> handleClick(user)}
        >
          {user.name}
        </div>
      ))}
    </div>
  )
}
