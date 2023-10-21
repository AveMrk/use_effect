import React, { useState } from 'react';
import { useEffect } from 'react';

export default function UserDetail({info}) {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
    .then((res) => res.json())
    .then((data) => setUserInfo(data))
    .catch((err) =>{
      console.log("errorr occured", err)
    })
  }, [info.id])
  return (
    <div className='user-detail'>
      {console.log(userInfo)}
      <img src={userInfo.avatar} alt={userInfo.name}/>
      <h2>{userInfo.name}</h2>
      <div className='user-info'>
        <div className='user-info__city'>City: {userInfo.details.city}</div>
        <div className='user-info__company'>Company: {userInfo.details.company}</div>
        <div className='user-info__position'>Position: {userInfo.details.position}</div>
      </div>
    </div>
  )
}
