import getMockServer from "../MockServer";
import { createContext, useContext } from "react";

const mockServer = getMockServer()

export const AppContext = createContext()
export const AppContextDefault = {
    isLoggedIn: false,
    profile: null,
    server: mockServer,
    setIsLoggedIn: () => {},
    setProfile: () => {},
    
}

export const useApp = () => useContext(AppContext)