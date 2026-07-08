import React, { useState } from 'react'

const User2 = () => {

const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [data, setData] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();// in html behaviour of the html form is by defuslt refresh 

        const newUser = {
            name: name,
            email: email
        }

        setData([...data, newUser]);

        setName("");
        setEmail("");
    }

    function deleteUser(index) {

        const updateData = data.filter((ele, id) => {
            return id !== index;
        })

        setData(updateData);
    }

    localStorage.setItem(name,email)


  return (
    
    <>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter name'
                />

                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter email'
                />

                <button type='submit'>Add</button>

            </form>

            {
                data.map((data1, index) => (
                    <ul key={index}>
                        <li>{data1.name}</li>
                        <li>{data1.email}</li>

                        <button onClick={() => deleteUser(index)}>
                            delete
                        </button>
                    </ul>
                ))
            }
        </>
    )
}



export default User2