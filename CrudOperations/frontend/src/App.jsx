import React from 'react'
import UserForm from './UserForm';
import { useState, useEffect } from 'react';
import UserList from './UserList';
import { getUsers } from './api/userApi';

function App() {

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
   const res = await getUsers();
   setUsers(res.data.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">User Management Portal</h1>
        <p className="app-subtitle">CRUD operations using React, Node.js & MongoDB</p>
      </header>
      <main className="app-main">
        <section className="form-card">
          <h2 className="section-title">Register New User</h2>
          <UserForm refresh={fetchUsers}/>
        </section>
        <section className="list-card">
          <h2 className="section-title">Active User Registry</h2>
          <UserList users={users} refresh={fetchUsers}/>
        </section>
      </main>
    </div>
  )
}

export default App