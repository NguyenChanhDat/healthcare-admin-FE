import React, { useEffect } from 'react';
import './App.css';
import { User, UserCreateDto } from './lib/type';
import { RenderUserTable } from './ui/user-table';
import { CreateUserForm } from './ui/create-user-form';
const port = process.env.PORT || 3000;

function App() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [isLoad, setIsLoad] = React.useState(false);
  const [isCreate, setIsCreate] = React.useState(false);

  const fetchUser = async () => {
    try {
      const response = await fetch(`http://localhost:${port}/user`);
      console.log(response);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data: User[] = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleCreateUser = async (userCreated: UserCreateDto) => {
    try {
      const response = await fetch(`http://localhost:${port}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCreated),
      });
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      const newUser: User = await response.json();
      setUsers((prevUsers) => [...prevUsers, newUser]);
      console.log('Number of users:', users.length);
      console.log('User created:', newUser);

      fetchUser();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    useEffect(() => {
      fetchUser();
    }, []),
    (
      <div className="App">
        <h1>HI HELLO {10 + 10}</h1>
        <button onClick={() => setIsLoad(true)} className="user-btn">
          User List
        </button>
        <button onClick={() => setIsCreate(true)} className="user-btn">
          Create User
        </button>
        <div>{isLoad && <RenderUserTable userList={users} />}</div>

        {isCreate && <CreateUserForm onClickAction={handleCreateUser} />}
      </div>
    )
  );
}

export default App;
