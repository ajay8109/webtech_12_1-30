import React from 'react'
import {deleteUser, updateUser,getUsers} from './api/userApi';
import { useState } from 'react';

const UserList = ({users, refresh}) => {
    const [editId, setEditId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        phone: ''
    });

    const handleEdit = (user) => {
        setEditId(user._id);
        setFormData({
            name: user.name,
            email: user.email,
            password: user.password,
            address: user.address,
            phone: user.phone
        });
    };

    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleUpdate = async () => {
       await updateUser(editId, {...formData});
       setEditId(null);
       refresh();
    }

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            refresh();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }
  return (
    <div className="table-container">
      {users.length === 0 ? (
        <div className="empty-state">
          <p>No active users registered. Add a user to get started.</p>
        </div>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className={editId === user._id ? "editing-row" : ""}>
                {editId === user._id ? (
                  <>
                    <td><input type="text" className="table-input" name="name" value={formData.name} onChange={handleChange} required /></td>
                    <td><input type="email" className="table-input" name="email" value={formData.email} onChange={handleChange} required /></td>
                    <td><input type="password" className="table-input" name="password" value={formData.password} onChange={handleChange} required /></td>
                    <td><input type="text" className="table-input" name="address" value={formData.address} onChange={handleChange} required /></td>
                    <td><input type="text" className="table-input" name="phone" value={formData.phone} onChange={handleChange} required /></td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-save" onClick={handleUpdate}>Save</button>
                        <button className="btn btn-cancel" onClick={() => setEditId(null)}>Cancel</button>
                      </div>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="user-name-cell">{user.name}</td>
                    <td>{user.email}</td>
                    <td><span className="password-dot">••••••••</span></td>
                    <td>{user.address}</td>
                    <td>{user.phone}</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-edit" onClick={() => handleEdit(user)}>Edit</button>
                        <button className="btn btn-delete" onClick={() => handleDelete(user._id)}>Delete</button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default UserList

