import { createContext, useState} from "react";
import usersService from "./services/usersService";

export const authContext = createContext();

function AuthProvider({children}) {
const [user, setUser] = useState(usersService.getUser());

const refreshUser = () => setUser(usersService.getUser());


const login = async (credentials) => {
  const response = await usersService.login(credentials);

 refreshUser();

  return response;
};

const logout = () => {
  usersService.logout();
  refreshUser();
};

return (
    <authContext.Provider
    value={{
        user,
        login,
        logout,
        signUp: usersService.createUser,
    }}
    ></authContext.Provider>
);






}