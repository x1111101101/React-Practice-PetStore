import newMockServer from "../MockServer";
import { createContext, useContext } from "react";

const mockServer = newMockServer()

export const AppContext = createContext()
export const AppContextDefault = {
    isLoggedIn: false,
    profile: null,
    server: mockServer,
    setIsLoggedIn: () => {},
    setProfile: () => {},
    
}

export const useApp = () => useContext(AppContext)