import { createContext, useContext, useState } from "react";

const userContext = createContext([]);

function AuthProvider({ children }) {
    const [user , setUser] = useState({});
  return <userContext.Provider value={{user , setUser}}>{children}</userContext.Provider>;
}
export const UserContext = () => {
    return useContext(userContext);
};
export {AuthProvider,userContext}