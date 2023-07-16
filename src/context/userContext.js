import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const userContext = createContext();

export default function UserProvider({ children }) {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localUser !== null ? localUser : {});
  const navigate = useNavigate();

  useEffect(() => {
   
    
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser === null) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        {children}
      </userContext.Provider>
    </>
  );
}
