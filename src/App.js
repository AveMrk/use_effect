import './App.css';
import UsersList from './components/UsersList';
import { useEffect, useState } from 'react';
import UserDetail from './components/UserDetail';

function App() {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState({});
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setUsers(data)
    })
    .catch((err) =>{
      console.log("errorr occured", err)
    })
  }, []);
  return (
    <div className="App">
      <UsersList 
      users={users}
      changeUser={setActiveUser}/>
      {console.log('users ', users)}
    {activeUser && <UserDetail info={activeUser}/>}
    </div>
  );
}

export default App;
