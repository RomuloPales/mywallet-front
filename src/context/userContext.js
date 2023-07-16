import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const userContext = createContext();

export default function UserProvider({ children }) {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localUser !== null ? localUser : {});
  const navigate = useNavigate();

  useEffect(() => {
    if (localUser === null) {
      navigate("/");
    } else {
      navigate("/home");
    }
  },[]);
  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        {children}
      </userContext.Provider>
    </>
  );
}
