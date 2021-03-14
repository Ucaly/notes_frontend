import React, { useState, useContext } from 'react';

export const baseUrl = 'http://127.0.0.1:5000';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState(null)
    const [jwtToken, setJwtToken] = useState(null)

    return (
        <AppContext.Provider
            value={{
                currentUser, setCurrentUser, loading, setLoading, jwtToken, setJwtToken
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
