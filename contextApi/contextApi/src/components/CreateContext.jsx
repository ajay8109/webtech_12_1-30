import React, { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios"


const CreateContext = createContext();

const ThemeProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [theme, setTheme] = useState("dark");

  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
 };

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then((response) =>{
     setUser(response.data)
    })
    .catch((error) =>{
      console.log("fetching error", error)
    })
  },[])

  return (
    <CreateContext.Provider
      value={{ user, theme, themeToggle }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default ThemeProvider;
export { CreateContext };